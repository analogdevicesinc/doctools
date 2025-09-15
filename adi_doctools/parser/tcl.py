from typing import List, Set, Optional, Union, Tuple

import re
from os import path

from sphinx.util import logging

logger = logging.getLogger(__name__)

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
                    line_ += line.replace('\n', '')
                    data.append(line_)
                    line_ = ''
        data = [' '.join(d.replace("\t", " ").strip().split()) for d in data]
        for m in ["list", "info"]:
            data = [d.replace("[ "+m, "["+m) for d in data]
        self.data = data

    def __iter__(self):
        return iter(self.data)

    @staticmethod
    def get_list_items(
        line: str
    ) -> List[str]:
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

    def line_startswith(
        self,
        start: Union[List[str], str]
    ) -> Optional[str]:
        start = [start] if type(start) is str else start
        for line in self.data:
            for s in start:
                if line.startswith(s):
                    return line
        return None

    def in_method_match(
        self,
        expr: str,
        start: str
    ) -> Optional[Set]:
        """
        Try to match all inside a tcl method.
        """
        v = set()
        for line in self.data:
            if line.startswith(start):
                m = re.findall(expr, line)
                if m is False or m is None:
                    return None
                v.update(m)
        return v

    @staticmethod
    def get_sourced_files(
        file: str,
        include_self: bool = True
    ) -> Tuple[List['tcl'], List[str]]:
        """
        Recursively get a list of sourced files.
        Returns a list of tcl objects
        """
        file = path.abspath(file)
        files = [file] if include_self else []
        tcls = []

        def parse(file_):
            if not path.isfile(file_):
                logger.warning(f"{file_}: File doesn't exist!")
                return
            tcl_ = tcl(file_)
            tcls.append(tcl_)
            skip_list = ["adi_env.tcl", "adi_project_xilinx.tcl", "adi_project_intel.tcl", "adi_board.tcl"]

            for i, line in enumerate(tcl_):
                if line.startswith("source "):
                    item = line.split()[1]
                    if any([item.endswith(i) for i in skip_list]):
                       continue
                    if item.startswith("$ad_hdl_dir/"):
                        item = path.abspath(item[12:])
                    elif tcl_.data[i-1].startswith("if [info exists ad_project_dir"):
                        # Skip the alternative path
                        continue
                    else:
                        item = path.abspath(path.join(path.dirname(file_), item))
                    if item not in files:
                        files.append(item)
                        parse(item)
        parse(file)

        # Convert to relative to file dir
        dir_ = path.dirname(file)
        files = [path.relpath(f, dir_)  for f in files]

        return tcls, files
