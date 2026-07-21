// ~/.pi/agent/extensions/goal-completion.ts
//
// Registers `report_goal_status`, used by an RPC driver to know whether the
// agent considers its assigned goal complete.

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";

export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "report_goal_status",
    label: "Report Goal Status",
    description:
      "Report whether the user's stated goal for this session is now fully complete. " +
      "Call this when you finished your task or should stop, concluding the session." +
      "Do not call it prematurely: only report done=true when every requested task, " +
      "validation, and required output (summary, comment, patches, etc.) is finished.",
    promptSnippet: "Report whether the assigned goal is fully complete or what remains",
    promptGuidelines: [
      "Call report_goal_status(done=true, summary=...) only when the entire requested " +
        "goal is complete, including any required validation and required output files.",
      "Call report_goal_status(done=false, summary=..., nextSteps=...) when you are " +
        "stopping for any other reason (context limits, needing more turns, an open " +
        "question) so the driver knows concrete next steps.",
    ],
    parameters: Type.Object({
      done: Type.Boolean({
        description: "True only if the entire requested goal is fully complete.",
      }),
      summary: Type.String({
        description: "One or two sentences on what was accomplished so far.",
      }),
      nextSteps: Type.Optional(
        Type.String({
          description: "If done=false, the concrete next steps to take when work resumes.",
        }),
      ),
    }),
    async execute(_toolCallId, params) {
      return {
        content: [
          {
            type: "text",
            text: params.done
              ? `Goal reported complete: ${params.summary}`
              : `Goal reported incomplete: ${params.summary}${params.nextSteps ? ` Next: ${params.nextSteps}` : ""}`,
          },
        ],
        details: {
          done: params.done,
          summary: params.summary,
          nextSteps: params.nextSteps,
        },
        terminate: params.done === true,
      };
    },
  });
}
