from os import environ
import sys
import re

pattern = re.compile(r'\$(\w+)|\$\{([^}]+)\}')

def fmt_args(text: str) -> str:
    def repl(match):
        var = match.group(1) or match.group(2)
        return environ.get(var, "")
    return pattern.sub(repl, text)

    content = fmt_args(content_)

if __name__ == "__main__":
    with open(sys.argv[1], 'r') as f:
        content = f.read()
    print(fmt_args(content))
