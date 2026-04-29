import logging
import logging.config

NC = "\033[0m"
RESET = '\033[0m'
BLUE = "\033[94m"
GREEN = "\033[92m"
YELLOW = '\033[93m'
ORANGE = "\033[38;5;208m"
RED = "\033[91m"
FAIL = '\033[91m'
DIM = '\033[2m'

LEVEL_COLORS = {
    logging.INFO: BLUE,
    logging.WARNING: ORANGE,
    logging.ERROR: RED,
    logging.CRITICAL: RED,
}


class ColorFormatter(logging.Formatter):
    def format(self, record):
        level_color = LEVEL_COLORS.get(record.levelno, "")
        record.levelname = f"{level_color}{record.levelname}:{NC}"
        return super().format(record)


APP_LOGGER_NAME = '__main__'


class AppOnlyFilter(logging.Filter):
    """Only pass log records originating from our own module."""
    def filter(self, record):
        return record.name == APP_LOGGER_NAME


LOGGING_CONFIG = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "colored": {
            "()": ColorFormatter,
            "format": "%(levelname)s %(message)s"
        },
    },
    "handlers": {
        "default": {
            "level": "DEBUG",
            "formatter": "colored",
            "class": "logging.StreamHandler",
            "filters": ["app_only"],
        },
    },
    "filters": {
        "app_only": {
            "()": AppOnlyFilter,
        }
    },
    "root": {
        "handlers": ["default"],
        "level": "INFO",
    },
    "loggers": {
        "my_package": {
            "level": "DEBUG",
            "propagate": True
        },
        "docling": {
            "level": "ERROR",
            "propagate": True
        },
        "docling_core": {
            "level": "ERROR",
            "propagate": True
        },
        "docling_parse": {
            "level": "ERROR",
            "propagate": True
        },
        "deepsearch_glm": {
            "level": "ERROR",
            "propagate": True
        }
    }
}

def set_logging():
    logging.config.dictConfig(LOGGING_CONFIG)
