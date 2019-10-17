import { createWorkflowMessage } from "./workflow.ts";

const msg = createWorkflowMessage(10);

console.log(`Triggered: ${msg.msg || msg.status}`);
