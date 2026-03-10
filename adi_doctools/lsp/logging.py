import json
import logging
import logging.config
import sys

LSP_ERROR = 1
LSP_WARNING = 2
LSP_INFO = 3
LSP_LOG = 4

LEVEL_TO_LSP = {
    logging.CRITICAL: LSP_ERROR,
    logging.ERROR: LSP_ERROR,
    logging.WARNING: LSP_WARNING,
    logging.INFO: LSP_INFO,
    logging.DEBUG: LSP_LOG,
}


def notify(method: str, params: dict = None):
    notification = {"jsonrpc": "2.0", "method": method}
    if params is not None:
        notification["params"] = params
    print(json.dumps(notification), file=sys.stdout, flush=True)


class JsonRpcHandler(logging.Handler):
    """Sends log messages as JSON-RPC window/logMessage notifications to stdout."""

    def emit(self, record):
        try:
            msg_type = LEVEL_TO_LSP.get(record.levelno, LSP_LOG)
            message = self.format(record)
            notify("window/logMessage", {"type": msg_type, "message": message})
        except Exception:
            self.handleError(record)


class JsonFormatter(logging.Formatter):
    def format(self, record):
        log_obj = {
            "level": record.levelname,
            "message": record.getMessage(),
            "logger": record.name,
        }
        if record.exc_info:
            log_obj["exception"] = self.formatException(record.exc_info)
        return json.dumps(log_obj)


LOGGING_CONFIG = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "json": {
            "()": JsonFormatter,
        },
        "simple": {
            "format": "%(message)s",
        },
    },
    "handlers": {
        "stderr": {
            "level": "DEBUG",
            "formatter": "json",
            "class": "logging.StreamHandler",
            "stream": "ext://sys.stderr",
        },
        "jsonrpc": {
            "()": JsonRpcHandler,
            "level": "INFO",
            "formatter": "simple",
        },
    },
    "root": {
        "handlers": ["jsonrpc"],
        "level": "INFO",
    },
}


def set_logging():
    logging.config.dictConfig(LOGGING_CONFIG)
