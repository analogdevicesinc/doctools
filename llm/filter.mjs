#!/usr/bin/env node

import * as fs from "fs"

const MAX_OUTPUT = 500
const file = process.argv[2]

if (!file)
  process.exit(1)

function formatTool(name, args) {
	if (name === "bash") {
		const cmd = (args.command || "").replace(/[\n\t]/g, " ").trim().slice(0, 50)
		return `bash: ${cmd}${(args.command || "").length > 50 ? "..." : ""}`
	}
	return args.path ? `${name}: ${args.path}` : name
}

function truncate(text) {
	return text.length > MAX_OUTPUT ? text.slice(0, MAX_OUTPUT) + "...\n" : text + "\n"
}

function processLine(line) {
	try {
		const e = JSON.parse(line)
		const msg = e.type === "message" && e.message
		if (!msg) return

		if (msg.role === "toolResult") {
			process.stdout.write(`> ${formatTool(msg.toolName, {})}\n`)
			for (const c of msg.content || [])
				if (c.type === "text" && c.text) process.stdout.write(truncate(c.text))
		} else if (msg.role === "assistant") {
			for (const c of msg.content || [])
				if (c.type === "text") process.stdout.write(c.text + "\n")
				else if (c.type === "toolCall") process.stdout.write(`> ${formatTool(c.name, c.arguments || {})}\n`)
		} else if (msg.role === "user") {
			for (const c of msg.content || [])
				if (c.type === "text") process.stdout.write(`\n[USER] ${c.text}\n\n`)
		}
	} catch {}
}

let pos = 0, buf = ""

function read() {
	try {
		const stat = fs.statSync(file)
		if (stat.size <= pos) return
		const fd = fs.openSync(file, "r")
		const chunk = Buffer.alloc(stat.size - pos)
		fs.readSync(fd, chunk, 0, chunk.length, pos)
		fs.closeSync(fd)
		pos = stat.size
		buf += chunk.toString()
		const lines = buf.split("\n")
		buf = lines.pop() || ""
		for (const l of lines) if (l.trim()) processLine(l)
	} catch {}
}

fs.watchFile(file, { interval: 100 }, read)
read()
