from os import name as os_name
import signal

if os_name != 'nt':
    from os import killpg, getpgid


def aux_killpg(proc):
    if os_name == 'nt':
        proc.send_signal(signal.CTRL_BREAK_EVENT)
    else:
        killpg(getpgid(proc.pid), signal.SIGTERM)
