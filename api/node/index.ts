import * as Koa from "koa";
import * as Router from "koa-router";

const app = new Koa();
const router = new Router();

router.get("/", ({ response }) => {
  response.body = "Hello!\n";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => console.log("Listening..."));
