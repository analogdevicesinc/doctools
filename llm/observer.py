import time
import json
import sys

from typing import Iterator

# while IFS= read -r l; do echo "${l}" >> stream.jsonl ; sleep 0.5 ; done<session.jsonl

def crop(text):
    return text[:200] + '...' if len(text) > 200 else text

def pretty_print(entry) -> None:
    t = entry.get("type")

    if t == "session":
        print(f"\n=== session {entry.get('id', '')[:8]} ===")

    elif t == "message" and "message" in entry:
        msg = entry["message"]
        role = msg.get("role")
        if role == "user":
            content = msg.get("content", "")
            if isinstance(content, list) and content:
                if isinstance(content[0], dict):
                    text = content[0].get("text", "")
                else:
                    text = str(content)
            else:
                text = crop(str(content))
            print(f"\n[user] {text}")
        elif role == "assistant":
            for c in msg.get("content", []):
                if c.get("type") == "text":
                    print(f"\n[assistant] {c.get('text', '')}")
                elif c.get("type") == "toolCall":
                    strings = []

                    tool = c.get('name')
                    if c_ := c.get('arguments'):
                        if path := c_.get('path', ''):
                            path = 'path: ' + path
                        command = c_.get('command', '')

                        if newText := c_.get('newText', ''):
                            newText = "\n" + newText

                        strings.extend([path, newText, command])

                    if c_:= c.get('content'):
                        text = c_.get('text', '')

                        strings.extent([text])

                    for i, s in enumerate(strings):
                        strings[i] = crop(s)
                    strings_ =' '.join(filter(None, strings))
                    print(f"\n  > {tool} {strings_}")
            usage = msg.get("usage", {})
        elif role == "toolResult":
            content = msg.get("content", [{}])
            text = crop(content[0].get("text", ""))
            err = " Error" if msg.get("isError") else ""
            print(f"    {err} {text}")

    elif t == "message_start":
        msg = entry.get("message", {})
        role = msg.get("role")
        if role == "user":
            content = msg.get("content", [{}])
            if content and isinstance(content[0], dict):
                text = content[0].get("text", "")
            else:
                text = str(content)
            text = text[:100] + '...' if len(text) > 100 else text
            print(f"\n[user] {text}")
        elif role == "toolResult":
            name = msg.get("toolName", "")
            print(f"\n[{name}] ", end="")

    elif t == "message_end":
        msg = entry.get("message", {})
        role = msg.get("role")
        if role == "assistant":
            usage = msg.get("usage", {})
        elif role == "toolResult":
            content = msg.get("content", [{}])
            if content and isinstance(content[0], dict):
                text = crop(content[0].get("text", ""))
                print(text)

    elif t == "message_update":
        ae = entry.get("assistantMessageEvent", {})
        ae_type = ae.get("type")

        if ae_type == "text_delta":
            print(ae.get("delta", ""), end="")
        elif ae_type == "toolcall_delta":
            print(ae.get("delta", ""), end="")
        elif ae_type == "toolcall_start":
            tc = ae.get("partial", {}).get("content", [{}])[0]
            print(f"\n[{tc.get('name', '')}] ", end="")
        elif ae_type == "toolcall_end":
            print()

    elif t == "tool_execution_start":
        print(f"  {entry.get('toolName')}", end="")

    elif t == "tool_execution_end":
        print(" error" if entry.get("isError") else " done")

    elif t == "agent_end":
        print("\n-- agent end --")

def tail(file, sleep_sec=0.1) -> Iterator[str]:
    line = ''
    while True:
        chunk = file.readline()
        if chunk != "":
            line += chunk
            if line.endswith("\n"):
                yield line
                line = ''
        else:
            time.sleep(sleep_sec)

if __name__ == "__main__":
    with open(sys.argv[1], 'r') as f:
        for line in tail(f):
            try:
                entry = json.loads(line)
            except json.JSONDecodeError as e:
                print(f"raw: {line}", end='')
                continue

            pretty_print(entry)

