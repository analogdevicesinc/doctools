// ~/.pi/agent/extensions/bash-timeout.ts

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { isToolCallEventType } from "@earendil-works/pi-coding-agent";

const DEFAULT_TIMEOUT = 600;

export default function (pi: ExtensionAPI) {
  pi.on("tool_call", (event) => {
    if (!isToolCallEventType("bash", event)) return;

    const input = event.input as { timeout?: unknown };
    if (typeof input.timeout === "number" && Number.isFinite(input.timeout)) return;

    input.timeout = DEFAULT_TIMEOUT;
  });
}
