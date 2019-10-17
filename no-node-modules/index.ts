import uuid from "https://deno.land/std/uuid/mod.ts";
export {
  hello
} from "https://gist.githubusercontent.com/kryz81/3c9804a10166cd0f5101313815ef8cc3/raw/a70326f21672e065b975832d5597f88bd3e87e10/mymod.ts";
import { createWorkflowMessage } from "./workflow.ts";

const id = uuid();

const msg = createWorkflowMessage(id, "My message");

console.log(msg);
