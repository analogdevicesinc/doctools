import signal
from os import name as os_name

if os_name != 'nt':
    from os import getpgid, killpg


def aux_killpg(proc):
    if os_name == 'nt':
        proc.send_signal(signal.CTRL_BREAK_EVENT)
    else:
        killpg(getpgid(proc.pid), signal.SIGTERM)
