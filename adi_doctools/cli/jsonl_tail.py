"""
Tail and format JSONL files (Claude Code transcripts).
"""

import json
import sys
import time
import click
from os import getcwd
from pathlib import Path
from typing import Any, Dict, Optional

_tool_use_registry = {}


def _find_latest_session() -> Optional[Path]:
    """Find the latest Claude session for the current directory."""
    # /mnt/data/repos/repo -> -mnt-data-repos-repo
    cwd = getcwd()
    project_dir = cwd.replace('/', '-')

    home = Path.home()
    claude_dir = home / '.claude' / 'projects' / project_dir

    if not claude_dir.exists():
        return None

    jsonl_files = list(claude_dir.glob('*.jsonl'))
    if not jsonl_files:
        return None

    jsonl_files.sort(key=lambda p: p.stat().st_mtime, reverse=True)

    return jsonl_files[0]


def _format_tool_call(tool_name: str, tool_input: Dict[str, Any]) -> str:
    """Format a tool call based on tool type."""
    tool_name = tool_name.lower()

    if tool_name == 'bash':
        command = tool_input.get('command', '')
        description = tool_input.get('description', '')
        if command:
            cmd_str = f"bash: {command}"

            if description:
                cmd_str += f"  # {description}"

            return cmd_str

    elif tool_name == 'read':
        file_path = tool_input.get('file_path', '')
        if file_path:
            return f"read: {file_path}"

    elif tool_name == 'edit':
        file_path = tool_input.get('file_path', '')
        if file_path:
            return f"edit: {file_path}"

    elif tool_name == 'write':
        file_path = tool_input.get('file_path', '')
        if file_path:
            return f"write: {file_path}"

    elif tool_name == 'glob':
        pattern = tool_input.get('pattern', '')
        if pattern:
            return f"glob: {pattern}"

    elif tool_name == 'grep':
        pattern = tool_input.get('pattern', '')
        if pattern:
            return f"grep: {pattern}"

    elif tool_name == 'task':
        subagent_type = tool_input.get('subagent_type', '')
        description = tool_input.get('description', '')
        if description:
            return f"task[{subagent_type}]: {description}"
        elif subagent_type:
            return f"task: {subagent_type}"

    return f"{tool_name}: <tool call>"


def format_entry(entry: Dict[str, Any]) -> Optional[str]:
    """Format a JSONL entry for plain text output."""
    global _tool_use_registry

    entry_type = entry.get('type')

    if entry_type == 'user':
        message = entry.get('message', {})
        content = message.get('content')

        if isinstance(content, list):
            results = []
            for block in content:
                if block.get('type') == 'tool_result':
                    tool_use_id = block.get('tool_use_id')
                    tool_content = block.get('content', '')

                    tool_info = _tool_use_registry.get(tool_use_id, {})
                    tool_name = tool_info.get('name', 'unknown')
                    output_preview = tool_content

                    results.append(f"output:\n{output_preview}")

            return '\n'.join(results) if results else None

        elif isinstance(content, str):
            if content:
                return f"user: {content}"

    elif entry_type == 'assistant':
        message = entry.get('message', {})
        content_blocks = message.get('content', [])

        if not isinstance(content_blocks, list):
            return None

        results = []
        for block in content_blocks:
            block_type = block.get('type')

            if block_type == 'thinking':
                thinking_text = block.get('thinking', '')
                if thinking_text:
                    results.append(f"thinking: {thinking_text}")

            elif block_type == 'text':
                text = block.get('text', '')
                if text:
                    results.append(f"response: {text}")

            elif block_type == 'tool_use':
                tool_id = block.get('id')
                tool_name = block.get('name', '')
                tool_input = block.get('input', {})

                if tool_id:
                    _tool_use_registry[tool_id] = {
                        'name': tool_name,
                        'input': tool_input,
                    }

                formatted = _format_tool_call(tool_name, tool_input)
                if formatted:
                    results.append(formatted)

        return '\n'.join(results) if results else None

    elif entry_type == 'progress':
        parent_tool_id = entry.get('parentToolUseID')
        data = entry.get('data', {})
        progress_type = data.get('type')

        if parent_tool_id:
            if progress_type == 'bash_progress':
                elapsed = data.get('elapsedTimeSeconds', 0)
                output = data.get('output', '')
                data.get('totalLines', 0)

                if output or elapsed > 1:
                    progress_str = f"bash_progress ({elapsed}s)"
                    if output:
                        progress_str += f":\n{output}"
                    return progress_str

    # Skip others
    return None


@click.command()
@click.argument('file', type=click.Path(exists=True), required=False)
@click.option(
    '--follow', '-f',
    is_flag=True,
    help='Follow the file (like tail -f)'
)
def jsonl_tail(file, follow):
    """Tail and format JSONL files (Claude Code transcripts).

    Displays JSONL transcript files in a human-readable format.
    Each line in the JSONL file is a JSON object representing a
    conversation turn, tool use, or other event.

    If FILE is not provided, automatically finds and tails the most
    recent Claude session for the current directory.

    Examples:

        # Tail the latest session for current directory
        adoc jsonl-tail

        # Tail a specific file
        adoc jsonl-tail /path/to/transcript.jsonl

        # Follow the latest session (like tail -f)
        adoc jsonl-tail -f
    """
    if not file:
        file_path = _find_latest_session()
        if not file_path:
            click.echo("Error: No Claude sessions found for current directory", err=True)
            raise click.Abort()

        session_id = file_path.stem
        click.echo(f"Tailing latest session: {session_id}")
        click.echo(f"File: {file_path}")
        if follow:
            click.echo("Press Ctrl+C to stop")
        click.echo("")
    else:
        file_path = Path(file)

        if not file_path.exists():
            click.echo(f"Error: File not found: {file}", err=True)
            raise click.Abort()

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            all_lines = f.readlines()

        start_idx = 0
        for line in all_lines[start_idx:]:
            line = line.strip()
            if not line:
                continue

            try:
                entry = json.loads(line)
                formatted = format_entry(entry)
                if formatted:
                    click.echo(formatted)
            except json.JSONDecodeError as e:
                click.echo(f"Failed to parse JSON: {e}", err=True)

        if follow:
            with open(file_path, 'r', encoding='utf-8') as f:
                f.seek(0, 2)

                while True:
                    line = f.readline()
                    if not line:
                        time.sleep(0.1)
                        continue

                    line = line.strip()
                    if not line:
                        continue

                    try:
                        entry = json.loads(line)
                        formatted = format_entry(entry)
                        if formatted:
                            click.echo(formatted)
                    except json.JSONDecodeError as e:
                        click.echo(f"Error: Failed to parse JSON: {e}", err=True)

    except KeyboardInterrupt:
        sys.exit(0)
    except Exception as e:
        click.echo(f"Error: {e}", err=True)
        raise click.Abort()
