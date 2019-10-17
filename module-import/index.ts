// import { serve } from "https://deno.land/std@v0.19.0/http/server.ts";
// import { hello } from "https://gist.githubusercontent.com/kryz81/3c9804a10166cd0f5101313815ef8cc3/raw/a70326f21672e065b975832d5597f88bd3e87e10/mymod.ts";
// import { myservice } from "https://adesso.de/libs/services";

// import { serve, hello } from "./imports.ts";

import { serve } from "http/server.ts";
import { hello } from "adesso/mymod.ts";

const server = serve("127.0.0.1:8080");

hello();
