import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "Hello\n";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

const srv = app.listen("127.0.0.1:5000");
console.log("Listening...");
