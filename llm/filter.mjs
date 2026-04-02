#!/usr/bin/env node

import * as readline from "readline"

const MAX_OUTPUT = 500

function formatToolCall(name, args) {
	switch (name) {
		case "read":
		case "write":
		case "edit":
			return `${name}: ${args.path || ""}`
		case "bash": {
			const cmd = (args.command || "").replace(/[\n\t]/g, " ").trim().slice(0, 50)
			return `bash: ${cmd}${(args.command || "").length > 50 ? "..." : ""}`
		}
		default:
			return `${name}`
	}
}

async function write(text) {
	if (!process.stdout.write(text)) {
		await new Promise((resolve) => process.stdout.once("drain", resolve))
	}
}

const rl = readline.createInterface({ input: process.stdin })

for await (const line of rl) {
	try {
		const event = JSON.parse(line)

		switch (event.type) {
			case "tool_execution_start":
				await write(`> ${formatToolCall(event.toolName, event.args)}\n`)
				break

			case "tool_execution_end":
				if (event.result?.content) {
					for (const item of event.result.content) {
						if (item.type === "text" && item.text) {
							const text = item.text.length > MAX_OUTPUT
								? item.text.slice(0, MAX_OUTPUT) + "...\n"
								: item.text
							await write(text)
						}
					}
				}
				break

			case "message_update": {
				const evt = event.assistantMessageEvent
				if (evt?.type === "text_delta") {
					await write(evt.delta)
				} else if (evt?.type === "thinking_delta") {
					await write(evt.delta)
				}
				break
			}
		}
	} catch { }
}
