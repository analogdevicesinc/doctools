from typing import List, Set

import re


class tcl:
    def __init__(self, file: str):
        """
        Tcl systax is line break sensitive -> squash escaped line breaks on
        open to simply parsing later.
        Tabs are the same as spaces -> replace all tabs with space.
        Strip leading whitespace and from common methods like lists.
        """
        data = []
        with open(file, "r") as f:
            line_ = ''
            for line in f:
                if line.endswith('\\\n'):
                    line_ += line[:-2]
                elif any(line.lstrip().startswith(x) for x in [']', '}']) and line_ == '':
                    data[-1] = data[-1] + ' ' + line[:-1]
                else:
                    line_ += line[:-1]
                    data.append(line_)
                    line_ = ''
        data = [' '.join(l.replace("\t", " ").strip().split()) for l in data]
        for m in ["list"]:
            data = [l.replace("[ "+m, "["+m) for l in data]
        self.data = data

    def __iter__(self):
        return iter(self.data)

    @staticmethod
    def get_list_items(line: str) -> List[str]:
        i1 = line.find("[list")
        if i1 != -1:
            i2 = line.index("]")
            i_ = 5
        else:
            i1 = line.index("{")
            i2 = line.index("}")
            i_ = 1

        if i2 < i1:
            return []

        items = line[i1+i_:i2].split()
        for i, item in enumerate(items):
            if item[0] == '"' and item[-1] == '"':
                items[i] = item[1:-1]

        return items

    def line_startswith(self, start: List[str]|str) -> str|None:
        start = [start] if type(start) is str else start
        for line in self.data:
            for s in start:
                if line.startswith(s):
                    return line
        return None

    def in_method_match(self, expr: str, start: str) -> Set|None:
        """
        Try to match group inside a tcl method accross multiple lines.
        """
        v = set()
        for line in self.data:
            if line.startswith(start):
                m = re.findall(expr, line)
                if m is False or m is None:
                    return None
                v.update(m)
        return v
