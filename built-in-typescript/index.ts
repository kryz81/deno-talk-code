import { createWorkflowMessage } from "./workflow.ts";

const msg = createWorkflowMessage(10);

console.log(`Triggered: ${msg.msg || msg.status}`);

function foo(a: number) {
  if (a > 1) {
    return a + a;
  }
}

const b = 10;
