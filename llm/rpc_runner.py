#!/usr/bin/env python3
"""RPC driver for pi.dev

Usage:
  python3 rpc_runner.py \
      --pi ./node_modules/.bin/pi \
      --provider portkey-bedrock --model medium \
      --session "$session_file" \
      --prompt-file "$prompt_file" \
      [--max-nudges 6] [--max-seconds 1800]
"""

from __future__ import annotations

import argparse
import json
import queue
import re
import subprocess
import sys
import threading
import time
from typing import Any, Optional

EXIT_SUCCESS = 0          # goal reported done=true via report_goal_status
EXIT_GOAL_NOT_REACHED = 1 # ran out of nudges/turns without a done=true report
EXIT_FATAL_ERROR = 2      # pi error
EXIT_ABORTED = 3          # timeout or external signal

WATCHDOG_NUDGE = """<watchdog_nudge source="rpc_runner.py" not_user_request="true">
Automated watchdog: you went idle without reporting goal status.
Call report_goal_status now: done=true only if the entire original goal
(including any required validation and required output files) is complete.
Otherwise call it with done=false and a concrete nextSteps, then continue
with that next step in this same turn.
</watchdog_nudge>"""

FINALIZE_PROMPT = """<watchdog_nudge source="rpc_runner.py" not_user_request="true">
Automated watchdog: the time budget for this run has been reached.
Stop any further investigation or exploration now. Immediately finalize and
write all required output artifacts (summary, comment, patches, etc.) using
your best current understanding, then call report_goal_status with
done=true right after. If you genuinely cannot finish, still call
report_goal_status with done=false and a concrete nextSteps so the run's
outcome is recorded before it is terminated.
</watchdog_nudge>"""

OVERFLOW_RECOVERY_FAILED = re.compile(r"context overflow recovery failed", re.I)

IDLE_POLL_SECONDS = 2
DEFAULT_FINALIZE_GRACE_SECONDS = 600  # 10 minutes
FINALIZE_MAX_REMINDERS = 3


def crop(text: str, n: int = 200) -> str:
    return text[:n] + "..." if len(text) > n else text


def log(msg: str) -> None:
    print(msg, flush=True)


def pretty_print_event(entry: dict[str, Any]) -> None:
    """Human-readable log line for one RPC event."""
    t = entry.get("type")

    if t == "message_end":
        msg = entry.get("message", {})
        role = msg.get("role")
        if role == "assistant":
            for c in msg.get("content", []):
                if c.get("type") == "text":
                    log(f"\n[assistant] {c.get('text', '')}")
                elif c.get("type") == "toolCall":
                    args = c.get("arguments", {})
                    log(f"\n  > {c.get('name')} {crop(json.dumps(args))}")
            if msg.get("stopReason") == "error":
                log(f"\n[error] {msg.get('errorMessage', '')}")
        elif role == "toolResult":
            content = msg.get("content", [{}])
            text = content[0].get("text", "") if content else ""
            err = " ERROR" if msg.get("isError") else ""
            log(f"    ->{err} {crop(text)}")

    elif t == "compaction_start":
        log(f"\n[compaction] start ({entry.get('reason')})")

    elif t == "compaction_end":
        reason = entry.get("reason")
        aborted = entry.get("aborted")
        will_retry = entry.get("willRetry")
        err = entry.get("errorMessage")
        log(f"[compaction] end ({reason}) aborted={aborted} willRetry={will_retry}" + (f" error={err}" if err else ""))

    elif t == "auto_retry_start":
        log(f"[retry] attempt {entry.get('attempt')}/{entry.get('maxAttempts')} in {entry.get('delayMs')}ms: {crop(entry.get('errorMessage', ''))}")

    elif t == "auto_retry_end":
        log(f"[retry] end success={entry.get('success')} attempt={entry.get('attempt')}")

    elif t == "extension_error":
        log(f"[extension_error] {entry.get('extensionPath')}: {entry.get('error')}")


class PiRpcSession:
    """Wraps pi rpc subprocess with a background stdout reader."""

    def __init__(self, argv: list[str]) -> None:
        self.proc = subprocess.Popen(
            argv,
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=None,
            text=True,
            bufsize=1,
        )
        self._req_id = 0
        self._queue: "queue.Queue[Optional[dict[str, Any]]]" = queue.Queue()
        self._reader = threading.Thread(target=self._read_loop, daemon=True)
        self._reader.start()

    def _read_loop(self) -> None:
        assert self.proc.stdout is not None
        try:
            for line in self.proc.stdout:
                line = line.rstrip("\n").rstrip("\r")
                if not line:
                    continue
                try:
                    self._queue.put(json.loads(line))
                except json.JSONDecodeError:
                    log(f"[raw] {line}")
        finally:
            self._queue.put(None)  # sentinel: stdout closed

    def send(self, command: dict[str, Any]) -> str:
        self._req_id += 1
        req_id = f"req-{self._req_id}"
        command = {"id": req_id, **command}
        assert self.proc.stdin is not None
        self.proc.stdin.write(json.dumps(command) + "\n")
        self.proc.stdin.flush()
        return req_id

    def next_event(self, timeout: Optional[float] = None) -> Optional[dict[str, Any]]:
        """Returns the next event, or None on timeout, or raises EOFError if
        pi's stdout closed (process exited)."""
        try:
            item = self._queue.get(timeout=timeout)
        except queue.Empty:
            return None
        if item is None:
            raise EOFError("pi process stdout closed")
        return item

    def request(self, command: dict[str, Any], timeout: float = 10.0) -> Optional[dict[str, Any]]:
        """Send a command and wait for its matching response, buffering
        (and re-emitting via pretty_print_event) any events that arrive
        first. Used for the get_state idle-confirmation check."""
        req_id = self.send(command)
        deadline = time.monotonic() + timeout
        while True:
            remaining = deadline - time.monotonic()
            if remaining <= 0:
                return None
            event = self.next_event(timeout=remaining)
            if event is None:
                return None
            if event.get("type") == "response" and event.get("id") == req_id:
                return event
            pretty_print_event(event)

    def close(self) -> None:
        try:
            if self.proc.stdin:
                self.proc.stdin.close()
        except Exception:
            pass
        try:
            self.proc.wait(timeout=10)
        except Exception:
            self.proc.kill()


def is_truly_idle(session: PiRpcSession) -> Optional[dict[str, Any]]:
    """Confirms idleness via get_state."""
    response = session.request({"type": "get_state"})
    if not response or not response.get("success"):
        return None
    state = response.get("data") or {}
    if state.get("isStreaming") or state.get("isCompacting"):
        return None
    if state.get("pendingMessageCount", 0) > 0:
        return None
    return state


def run(argv: list[str], prompt: str, max_nudges: int, max_seconds: float, finalize_grace_seconds: float = DEFAULT_FINALIZE_GRACE_SECONDS) -> int:
    session = PiRpcSession(argv)
    session.send({"type": "prompt", "message": prompt})

    deadline = time.monotonic() + max_seconds
    nudges_sent = 0
    last_goal_status: Optional[dict[str, Any]] = None
    fatal_error: Optional[str] = None
    maybe_idle = False
    finalizing = False
    finalize_deadline = 0.0
    finalize_reminders_sent = 0

    def send_finalize_prompt(reason: str) -> None:
        nonlocal finalizing, finalize_deadline, maybe_idle
        finalizing = True
        finalize_deadline = time.monotonic() + finalize_grace_seconds
        maybe_idle = False
        log(f"[runner] {reason}, asking the agent to finalize now "
            f"(grace period: {finalize_grace_seconds}s)")
        session.send({"type": "prompt", "message": FINALIZE_PROMPT, "streamingBehavior": "followUp"})

    def check_idle_and_react() -> Optional[int]:
        nonlocal nudges_sent, maybe_idle, finalize_reminders_sent
        if fatal_error is not None:
            if is_truly_idle(session) is None:
                return None
            log(f"[runner] fatal error: {fatal_error}")
            return EXIT_FATAL_ERROR

        if is_truly_idle(session) is None:
            return None

        if last_goal_status is not None and last_goal_status.get("done") is True:
            log("[runner] goal reported complete, finishing")
            session.send({"type": "abort"})
            return EXIT_SUCCESS

        if finalizing:
            if finalize_reminders_sent >= FINALIZE_MAX_REMINDERS:
                return None
            finalize_reminders_sent += 1
            log(f"[runner] still idle during finalize grace period, "
                f"reminder {finalize_reminders_sent}/{FINALIZE_MAX_REMINDERS}")
            maybe_idle = False
            session.send({"type": "prompt", "message": FINALIZE_PROMPT, "streamingBehavior": "followUp"})
            return None

        if nudges_sent >= max_nudges:
            log(f"[runner] max nudges ({max_nudges}) reached without done=true, stopping")
            return EXIT_GOAL_NOT_REACHED

        nudges_sent += 1
        log(f"[runner] idle without goal completion, sending watchdog nudge {nudges_sent}/{max_nudges}")
        maybe_idle = False
        session.send({"type": "prompt", "message": WATCHDOG_NUDGE, "streamingBehavior": "followUp"})
        return None

    try:
        while True:
            remaining_wall = deadline - time.monotonic()
            if remaining_wall <= 0 and not finalizing:
                send_finalize_prompt(f"wall-clock budget of {max_seconds}s exceeded")
                continue

            if finalizing:
                remaining_grace = finalize_deadline - time.monotonic()
                if remaining_grace <= 0:
                    log(f"[runner] finalize grace period of {finalize_grace_seconds}s exceeded, aborting")
                    session.send({"type": "abort"})
                    if last_goal_status is not None and last_goal_status.get("done") is True:
                        return EXIT_SUCCESS
                    return EXIT_ABORTED
                wait_timeout = min(IDLE_POLL_SECONDS, remaining_grace) if maybe_idle else remaining_grace
            else:
                wait_timeout = min(IDLE_POLL_SECONDS, remaining_wall) if maybe_idle else remaining_wall

            entry = session.next_event(timeout=wait_timeout)

            if entry is None:
                if not maybe_idle:
                    continue
                result = check_idle_and_react()
                if result is not None:
                    return result
                continue

            pretty_print_event(entry)
            t = entry.get("type")

            if t == "response" and entry.get("command") == "prompt":
                if entry.get("success") is False:
                    fatal_error = entry.get("error") or "prompt command failed"
                    break

            elif t == "tool_execution_end" and entry.get("toolName") == "report_goal_status":
                result_payload = entry.get("result") or {}
                details = result_payload.get("details") if isinstance(result_payload, dict) else None
                if isinstance(details, dict) and "done" in details:
                    last_goal_status = details
                    log(f"[runner] goal status reported: done={details.get('done')} summary={crop(str(details.get('summary', '')))}")

            elif t == "compaction_end":
                if entry.get("aborted") is False and entry.get("willRetry") is False:
                    err = entry.get("errorMessage")
                    if err and OVERFLOW_RECOVERY_FAILED.search(err):
                        fatal_error = err

                    maybe_idle = True
                    result = check_idle_and_react()
                    if result is not None:
                        return result

            elif t == "agent_end":
                maybe_idle = True
                result = check_idle_and_react()
                if result is not None:
                    return result

    except EOFError:
        log("[runner] pi process exited")
    finally:
        session.close()

    if fatal_error:
        log(f"[runner] fatal error: {fatal_error}")
        return EXIT_FATAL_ERROR

    if last_goal_status is not None and last_goal_status.get("done") is True:
        return EXIT_SUCCESS

    return EXIT_GOAL_NOT_REACHED


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--pi", default="pi", help="Path to the pi executable")
    parser.add_argument("--provider", help="Provider name, forwarded to pi --provider")
    parser.add_argument("--model", help="Model pattern, forwarded to pi --model")
    parser.add_argument("--session", help="Session file path, forwarded to pi --session")
    parser.add_argument("--no-session", action="store_true", help="Forward --no-session instead of --session")
    parser.add_argument("--prompt-file", required=True, help="Pre-formatted prompt text file to send as the initial prompt")
    parser.add_argument("--max-nudges", type=int, default=6, help="Max watchdog continuation nudges before giving up")
    parser.add_argument("--max-seconds", type=float, default=1800, help="Wall-clock budget for the whole run")
    parser.add_argument("--finalize-grace-seconds", type=float, default=DEFAULT_FINALIZE_GRACE_SECONDS,
                         help="Extra time given to the agent to finalize and report_goal_status after --max-seconds is reached")
    parser.add_argument("extra", nargs=argparse.REMAINDER, help="Extra args forwarded to `pi --mode rpc` after --")
    args = parser.parse_args()

    with open(args.prompt_file, "r") as f:
        prompt = f.read()

    argv = [args.pi, "--mode", "rpc"]
    if args.provider:
        argv += ["--provider", args.provider]
    if args.model:
        argv += ["--model", args.model]
    if args.no_session:
        argv += ["--no-session"]
    elif args.session:
        argv += ["--session", args.session]

    extra = args.extra
    if extra and extra[0] == "--":
        extra = extra[1:]
    argv += extra

    log(f"[runner] launching: {' '.join(argv)}")

    try:
        return run(argv, prompt, args.max_nudges, args.max_seconds, args.finalize_grace_seconds)
    except KeyboardInterrupt:
        return EXIT_ABORTED


if __name__ == "__main__":
    sys.exit(main())
