"""MCP Server for ADI Documentation.

Exposes:
- 'search'
- 'search-wiki'
- 'serve'
"""
# Keep in sync with cli/*

import asyncio
import signal
import subprocess
from typing import Any

from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent


app = Server("adoc")

background_processes: set[subprocess.Popen] = set()

tool_desc_search = (
    "Search Analog Devices documentation repositories. "
    "Use this to find datasheets, HDL projects, no-OS drivers, "
    "or technical documentation for ADI components. "
    "ADI devices typically start with ad* (e.g., ad4000), "
    "max* (e.g., max78000fthr), or lt* (e.g., lt3045). "
    "Returns search results with URLs and summaries. "
    "The search is 'or' based, 'ad9081 ad9088' will search for both parts. "
    "Use --fetch to fetch a result by index (or full url). "
    "Use --help to know about the arguments."
)

tool_desc_search_wiki = (
    "Search Analog Devices DokuWiki (wiki.analog.com). "
    "Use this to find legacy documentation, reference designs, evaluation boards, "
    "and technical articles for ADI components. "
    "ADI devices typically start with ad* (e.g., ad9081), "
    "max* (e.g., max78000), or lt* (e.g., lt3045). "
    "Returns search results with URLs and snippets. "
    "Use --fetch to fetch a result by index (or full url). "
    "Use --help to know about the arguments."
)

tool_desc_serve = (
    "Launch a Sphinx live server at the current path, "
    "watches the docs and source code to rebuild it on edit"
    "Use --once to build once. "
    "Use --sparse to include only some paths to build (e.g., --sparse learning solutions). "
    "Use --port to set the port, default is 8080. "
    "Use --help to know about the arguments."
)

@app.list_tools()
async def list_tools() -> list[Tool]:
    """List available tools."""
    return [
        Tool(
            name="search",
            description=tool_desc_search,
            inputSchema={
                "type": "object",
                "properties": {
                    "args": {
                        "type": "string",
                        "description": "List of arguments",
                    },
                },
                "required": ["args"],
            },
        ),
        Tool(
            name="search_wiki",
            description=tool_desc_search_wiki,
            inputSchema={
                "type": "object",
                "properties": {
                    "args": {
                        "type": "string",
                        "description": "List of arguments",
                    },
                },
                "required": ["args"],
            },
        ),
        Tool(
            name="serve",
            description=tool_desc_serve,
            inputSchema={
                "type": "object",
                "properties": {
                    "args": {
                        "type": "string",
                        "description": "List of arguments",
                    },
                },
                "required": ["args"],
            },
        ),
]


async def run_adoc_command_background(cmd: list[str]) -> dict[str, Any]:
    loop = asyncio.get_event_loop()
    process = await loop.run_in_executor(
        None,
        lambda: subprocess.Popen(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
    )

    await asyncio.sleep(0.5)

    if process.poll() is not None:
        stdout, stderr = process.communicate()
        return {
            "success": False,
            "output": stderr or stdout,
            "exit_code": process.returncode,
        }

    background_processes.add(process)

    return {
        "success": True,
        "output": f"Process running in the background, pid {process.pid}\n",
        "exit_code": 0,
    }


async def run_adoc_command(command: str, args: list[str]) -> dict[str, Any]:
    """Run an adoc CLI command using subprocess.

    :param command: The adoc subcommand to run (e.g., 'search', ...)
    :param args: Command arguments to pass
    :return: Dictionary containing the command output and status
    """
    cmd = ["adoc", command] + args

    if command == "serve" and "--once" not in args:
        return await run_adoc_command_background(cmd)

    loop = asyncio.get_event_loop()
    result = await loop.run_in_executor(
        None,
        lambda: subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=60
        )
    )

    return {
        "success": result.returncode == 0,
        "output": result.stdout if result.returncode == 0 else result.stderr or result.stdout,
        "exit_code": result.returncode,
    }


@app.call_tool()
async def call_tool(name: str, arguments: Any) -> list[TextContent]:
    """Handle tool calls."""
    command_map = {
        "search": "search",
        "search_wiki": "search-wiki",
        "serve": "serve",
    }

    command = command_map.get(name)
    if not command:
        return [TextContent(type="text", text=f"Unknown tool: {name}")]

    args_str = arguments.get("args", "")
    args = args_str.split() if args_str else []

    result = await run_adoc_command(command, args)

    return [TextContent(type="text", text=result["output"])]


async def main():
    """Run the MCP server using stdio transport."""
    asyncio.get_event_loop()
    shutdown_event = asyncio.Event()

    def signal_handler(signum, frame):
        """Handle SIGTERM by triggering graceful shutdown."""
        for process in background_processes:
            if process.poll() is None:
                process.terminate()
        shutdown_event.set()

    signal.signal(signal.SIGTERM, signal_handler)

    try:
        async with stdio_server() as (read_stream, write_stream):
            server_task = asyncio.create_task(
                app.run(
                    read_stream,
                    write_stream,
                    app.create_initialization_options(),
                )
            )

            shutdown_task = asyncio.create_task(shutdown_event.wait())
            done, pending = await asyncio.wait(
                [server_task, shutdown_task],
                return_when=asyncio.FIRST_COMPLETED
            )

            if shutdown_event.is_set():
                server_task.cancel()
                try:
                    await server_task
                except asyncio.CancelledError:
                    pass

            for task in pending:
                task.cancel()
                try:
                    await task
                except asyncio.CancelledError:
                    pass
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    asyncio.run(main())
