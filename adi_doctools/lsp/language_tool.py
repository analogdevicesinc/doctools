import logging
import urllib.request
import urllib.parse
import json
import importlib.util

logger = logging.getLogger(__name__)

_tool = None
_init_attempted = False
_current_language = None

LT_API_URL = "https://api.languagetool.org/v2/check"


def is_language_tool_installed() -> bool:
    return importlib.util.find_spec("language_tool_python")


def get_tool(language: str = 'en-US'):
    """Lazy-load LanguageTool instance for local mode."""
    global _tool, _init_attempted, _current_language

    if _tool is not None and _current_language == language:
        return _tool

    if _tool is not None:
        try:
            _tool.close()
        except Exception:
            pass
        _tool = None

    if _init_attempted and _current_language == language:
        return None

    _init_attempted = True
    _current_language = language

    try:
        import language_tool_python
        logger.info(f"Initializing LanguageTool with language '{language}'...")
    except ImportError:
        logger.warning("Language Tool (language_tool_python) not installed")
        return None
    except Exception as e:
        logger.error(f"Failed to initialize LanguageTool: {e}")
        return None

    try:
        _tool = language_tool_python.LanguageTool(language)
        logger.info("LanguageTool initialized successfully")
        return _tool
    except Exception as e:
        logger.error(f"Failed to initialize LanguageTool: {e}")
        return None

def check_text_local(text: str, language: str = 'en-US') -> dict:
    """Check text using local LanguageTool (requires Java)."""
    tool = get_tool(language)

    if tool is None:
        if not is_language_tool_installed():
            return {'error': 'not_installed', 'message': 'Language Tool (language_tool_python) is not installed'}
        return {'error': 'init_failed', 'message': 'LanguageTool failed (is Java installed?)'}

    if not text or not text.strip():
        return {'matches': []}

    try:
        matches = tool.check(text)

        result = []
        for match in matches:
            result.append({
                'offset': match.offset,
                'length': match.error_length,
                'message': match.message,
                'replacements': match.replacements[:5] if match.replacements else [],
                'ruleId': match.rule_id,
                'category': match.category,
            })

        return {'matches': result}

    except Exception as e:
        logger.error(f"LanguageTool check failed: {e}")
        return {'error': 'check_failed', 'message': str(e)}


def check_text_api(text: str, language: str = 'en-US', username: str = '', api_key: str = '') -> dict:
    """Check text using LanguageTool public API."""
    if not text or not text.strip():
        return {'matches': []}

    try:
        params = {
            'text': text,
            'language': language,
        }

        if username and api_key:
            params['username'] = username
            params['apiKey'] = api_key

        data = urllib.parse.urlencode(params).encode('utf-8')

        req = urllib.request.Request(
            LT_API_URL,
            data=data,
            headers={
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Doctools-VSCode/1.0'
            }
        )

        with urllib.request.urlopen(req, timeout=30) as response:
            result = json.loads(response.read().decode('utf-8'))

        matches = []
        for match in result.get('matches', []):
            replacements = [r['value'] for r in match.get('replacements', [])[:5]]
            matches.append({
                'offset': match['offset'],
                'length': match['length'],
                'message': match['message'],
                'replacements': replacements,
                'ruleId': match.get('rule', {}).get('id', 'UNKNOWN'),
                'category': match.get('rule', {}).get('category', {}).get('name', ''),
            })

        return {'matches': matches}

    except urllib.error.HTTPError as e:
        if e.code == 429:
            return {'error': 'rate_limited', 'message': 'API rate limit exceeded. Try again later or switch to local mode.'}
        logger.error(f"LanguageTool API error: {e}")
        return {'error': 'api_error', 'message': f'API error: {e.code}'}
    except urllib.error.URLError as e:
        logger.error(f"LanguageTool API connection error: {e}")
        return {'error': 'connection_error', 'message': 'Could not connect to LanguageTool API'}
    except Exception as e:
        logger.error(f"LanguageTool API check failed: {e}")
        return {'error': 'check_failed', 'message': str(e)}


def check_text(text: str, mode: str = 'api', language: str = 'en-US',
               username: str = '', api_key: str = '') -> dict:
    if mode == 'local':
        return check_text_local(text, language)
    else:
        return check_text_api(text, language, username, api_key)


def get_status() -> dict:
    return {
        'installed': is_language_tool_installed(),
        'initialized': _tool is not None,
        'language': _current_language
    }


def close():
    global _tool
    if _tool is not None:
        try:
            _tool.close()
        except Exception:
            pass
        _tool = None
