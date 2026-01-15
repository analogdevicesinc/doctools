"""MCP Server for ADI Documentation.

Exposes:
- 'adoc search' to search and fetch ADI documentation.
"""
# Keep in sync with cli/*

import asyncio
import signal
from typing import Any

from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent

from click.testing import CliRunner
from ..cli.search import search
from ..cli.string_search import (
    tool_desc_search,
    tool_desc_fetch,
    query_param_desc,
    repo_option_desc,
    format_option_desc_mcp,
    error_query_required,
    error_index_or_url_required,
)


app = Server("adoc")


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
                    "query": {
                        "type": "string",
                        "description": query_param_desc,
                    },
                    "repo": {
                        "type": "string",
                        "description": repo_option_desc,
                        "default": "all",
                    },
                    "limit": {
                        "type": "integer",
                        "description": "Number of results",
                        "default": 10,
                    },
                },
                "required": ["query"],
            },
        ),
        Tool(
            name="search_fetch",
            description=tool_desc_fetch,
            inputSchema={
                "type": "object",
                "properties": {
                    "index": {
                        "type": "integer",
                        "description": "Index of the search result to fetch.",
                    },
                    "url": {
                        "type": "string",
                        "description": "Direct URL to fetch.",
                    },
                    "format": {
                        "type": "string",
                        "enum": ["md", "html", "src"],
                        "description": format_option_desc_mcp,
                        "default": "md",
                    },
                },
            },
        ),
    ]


async def run_search_command(args: list[str]) -> dict[str, Any]:
    """Run the adoc search command using Click's test runner.

    :param args: Command arguments to pass to 'adoc search'
    :return Dictionary containing the command output and status
    """
    runner = CliRunner()

    loop = asyncio.get_event_loop()
    result = await loop.run_in_executor(
        None,
        lambda: runner.invoke(search, args, catch_exceptions=False)
    )

    return {
        "success": result.exit_code == 0,
        "output": result.output,
        "exit_code": result.exit_code,
    }


@app.call_tool()
async def call_tool(name: str, arguments: Any) -> list[TextContent]:
    """Handle tool calls for ADI documentation search."""

    if name == "search":
        query = arguments.get("query", "")
        if not query:
            return [TextContent(
                type="text",
                text=error_query_required,
            )]

        args = []

        repo = arguments.get("repo")
        if repo and repo != "all":
            args.extend(["--repo", repo])

        limit = arguments.get("limit", 10)
        args.extend(["--limit", str(limit)])

        query_terms = query.split()
        args.extend(query_terms)

        try:
            result = await run_search_command(args)

            if result["success"]:
                return [TextContent(
                    type="text",
                    text=result["output"],
                )]
            else:
                return [TextContent(
                    type="text",
                    text=f"Search failed:\n{result['output']}",
                )]
        except Exception as e:
            return [TextContent(
                type="text",
                text=f"Error executing search: {str(e)}",
            )]

    elif name == "search_fetch":
        index = arguments.get("index")
        url = arguments.get("url")
        format_type = arguments.get("format", "md")

        if index is None and url is None:
            return [TextContent(
                type="text",
                text=error_index_or_url_required,
            )]

        args = ["--format", format_type]

        if url:
            args.extend(["--fetch", url])
        else:
            args.extend(["--fetch", str(index)])

        try:
            result = await run_search_command(args)

            if result["success"]:
                return [TextContent(
                    type="text",
                    text=result["output"],
                )]
            else:
                return [TextContent(
                    type="text",
                    text=f"Fetch failed:\n{result['output']}",
                )]
        except Exception as e:
            return [TextContent(
                type="text",
                text=f"Error executing fetch: {str(e)}",
            )]

    else:
        return [TextContent(
            type="text",
            text=f"Error: Unknown tool '{name}'",
        )]


async def main():
    """Run the MCP server using stdio transport."""
    asyncio.get_event_loop()
    shutdown_event = asyncio.Event()

    def signal_handler(signum, frame):
        """Handle SIGTERM by triggering graceful shutdown."""
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
