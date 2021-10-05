const router = require("koa-router")();

router.prefix("/users"); // 前缀

router.get("/", function (ctx, next) {
  // 考虑到前缀，访问的 url 是/users/
  ctx.body = "this is a users response!";
});

router.get("/bar", function (ctx, next) {
  ctx.body = "this is a users/bar response";
});

module.exports = router;
