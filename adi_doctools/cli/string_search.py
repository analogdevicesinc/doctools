repo_option_desc = (
    "Optional: Specific repository to search. "
    "Options: 'documentation', 'hdl', 'no-OS', or 'all' (default)"
)

format_desc_converted_markdown = " (converted to markdown)"
format_desc_source_rest_markdown = " (source reST or markdown)"

format_option_desc_mcp = (
    "Output format: "
    "'md' (converted to markdown, default), "
    "'html' (raw html), "
    "'src' (source .rst/.md file)"
)

format_help_cli = "Output format for --fetch: html, src (source .rst/.md), md (converted markdown, default)"

format_available = "Available: md (default), html, src"

tool_desc_search = (
    "Search Analog Devices documentation repositories. "
    "Use this to find datasheets, HDL projects, no-OS drivers, "
    "or technical documentation for ADI components. "
    "ADI devices typically start with ad* (e.g., ad4000), "
    "max* (e.g., max78000fthr), or lt* (e.g., lt3045). "
    "Returns search results with URLs and summaries."
)

tool_desc_fetch = (
    "Fetch full content from a specific search result by index, "
    "or directly from a URL. Must run 'search' first to get indices. "
    "Returns the full documentation page content in the requested format."
)

query_param_desc = "Search query for ADI documentation (e.g., 'ad4000', 'axi dma')"

error_query_required = "Error: Search query is required"
error_index_or_url_required = "Error: Either 'index' or 'url' must be provided"
error_format_src_not_applicable = "Error: --format src is not applicable for URL fetch."
error_format_src_requires_index_1 = "The 'src' format fetches source files (.rst/.md) from repositories,"
error_format_src_requires_index_2 = "which requires using an index from previous search results."
