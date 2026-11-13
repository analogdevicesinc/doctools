export function compareVersions(v1: string, v2: string): number {
  const parse = (v: string) => v.split('.').map(p => parseInt(p, 10) || 0)
  const parts1 = parse(v1)
  const parts2 = parse(v2)

  for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
    const p1 = parts1[i] || 0
    const p2 = parts2[i] || 0
    if (p1 > p2) return 1
    if (p1 < p2) return -1
  }
  return 0
}
