import asyncio
from .server import main as async_main

def main():
    asyncio.run(async_main())

__all__ = ["main"]
