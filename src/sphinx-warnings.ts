export type WarningSeverity = 'error' | 'warning'

export interface ParsedWarning {
  file: string
  line: number
  message: string
  severity: WarningSeverity
}

const WARNING_PATTERN = /^(.+?):(\d+):\s*(WARNING|ERROR|CRITICAL|SEVERE):\s*(.+)$/
const WARNING_DOCSTRING_PATTERN = /^(.+?):docstring of [^:]+:(\d+):\s*(WARNING|ERROR|CRITICAL|SEVERE):\s*(.+)$/
const WARNING_NO_LINE_PATTERN = /^(.+?):\s*(WARNING|ERROR|CRITICAL|SEVERE):\s*(.+)$/

export function stripAnsi(str: string): string {
  return str.replace(/\x1B\[[0-9;]*[a-zA-Z]/g, '')
            .replace(/\[9\dm/g, '')
            .replace(/\[39;49;00m/g, '')
}

const severity = (level: string): WarningSeverity => level === 'WARNING' ? 'warning' : 'error'

export function parseWarningLine(line: string): ParsedWarning | null {
  const cleaned = stripAnsi(line).trim()

  let match = cleaned.match(WARNING_DOCSTRING_PATTERN) || cleaned.match(WARNING_PATTERN)
  if (match) {
    return {
      file: match[1],
      line: parseInt(match[2], 10),
      message: match[4],
      severity: severity(match[3])
    }
  }

  match = cleaned.match(WARNING_NO_LINE_PATTERN)
  if (match) {
    return {
      file: match[1],
      line: 1,
      message: match[3],
      severity: severity(match[2])
    }
  }

  return null
}
