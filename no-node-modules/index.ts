import { createWorkflowMessage } from "./workflow.ts";

import uuid from "https://deno.land/std/uuid/mod.ts";

const id = uuid();

const msg = createWorkflowMessage(id, "My message");

console.log(msg);
