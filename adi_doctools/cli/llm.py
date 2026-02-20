import signal
import json
import sys
import time
import logging
import threading
from os import getcwd, environ, killpg, getpgid, path
from pathlib import Path
from typing import Any, Dict, Optional

from .aux_git import get_git_top_level
from .argument_parser import get_arguments_llm

logger = logging.getLogger(__name__)

tool_use_registry = {}


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
    global tool_use_registry

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

                    tool_info = tool_use_registry.get(tool_use_id, {})
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
                    tool_use_registry[tool_id] = {
                        'name': tool_name,
                        'input': tool_input,
                    }

                formatted = _format_tool_call(tool_name, tool_input)
                if formatted:
                    results.append(formatted)

        if results:
            return '\n'.join(results)
        else:
            return None

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

    return None


def llm():
    """
    Tail and format JSONL files, CI/CD friendly, usage:

      # Tail a prompt
      adoc llm --prompt "What's up?"

      # Tail a prompt from a file
      adoc llm /path/to/prompt.md

      # Tail a session (must end with .jsonl)
      adoc llm /path/to/<uuid>.jsonl
    """
    args = get_arguments_llm()

    file = args.file
    prompt = args.prompt
    no_follow = args.no_follow
    if file and not path.isfile(file):
        logger.error(f"FILE {file} does not exist")
        sys.exit(1)
    if prompt and file:
        logger.error("--prompt and FILE cannot be used together")
        sys.exit(1)
    if prompt and no_follow:
        logger.error("--prompt and --no-follow cannot be used together")
        sys.exit(1)

    prompt_file = None
    if file and not file.endswith('.jsonl'):
            prompt_file = file
            file = None

    def handle_sigint(signum, frame):
        stop_event.set()

    stop_event = threading.Event()
    signal.signal(signal.SIGINT, handle_sigint)

    cwd_ = getcwd()
    if gitcwd_ := get_git_top_level(cwd_):
        cwd_ = gitcwd_

    def run_claude():
        env = environ.copy()
        cmd_args=['claude', '--session-id', session_id, '--add-dir', cwd_, '--permission-mode', 'bypassPermissions', '--disallowed-tools', 'WebSearch']
        if prompt_file:
            logger.info(f"prompt file: {prompt_file}")
            stdin_=subprocess.PIPE
        else:
            cmd_args.extend(['-p', args.prompt])
            stdin_=None

        logger.info(f"args: {' '.join(cmd_args)}")

        proc = subprocess.Popen(cmd_args, cwd=cwd_, env=env,
                                stdin=stdin_,
                                stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,)
        if prompt_file:
            with open(prompt_file, "rb") as f:
                for line in f:
                    proc.stdin.write(line)
                    proc.stdin.flush()
            proc.stdin.close()

        kill=True
        while not stop_event.is_set():
            rc = proc.poll()
            if rc is not None:
                logger.info(f"Claude exited with code {rc}")
                kill=False
                stop_event.set()
                return

            stop_event.wait(0.5)

        if kill:
            killpg(getpgid(proc.pid), signal.SIGTERM)

    if prompt or prompt_file:
        import subprocess
        import uuid

        session_id = str(uuid.uuid4())

        thread = threading.Thread(target=run_claude)
        thread.start()

    if prompt or prompt_file:
        project_dir = cwd_.replace('/', '-').replace('_', '-')

        home = Path.home()
        file_path = home / '.claude' / 'projects' / project_dir / f"{session_id}.jsonl"
        logger.info(f"session: {file_path}")

        retries_=10
        while not path.exists(file_path) and retries_:
            retries_ -= 1
            time.sleep(1)

        if not retries_:
            stop_event.set()
            sys.exit(0)
    else:
        file_path = Path(file)

    session_id = file_path.stem

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
                    print(formatted)
            except json.JSONDecodeError as e:
                logger.error(str(e))

        if not no_follow:
            with open(file_path, 'r', encoding='utf-8') as f:
                f.seek(0, 2)

                while not stop_event.is_set():
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
                            print(formatted)
                    except json.JSONDecodeError as e:
                        logger.error(str(e))

    except KeyboardInterrupt:
        pass
    except Exception as e:
        logger.error(str(e))
        sys.exit(1)

    sys.exit(0)
