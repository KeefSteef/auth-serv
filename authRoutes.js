const Router = require("express");
const controller = require("./authController");
const router = new Router();

router.post("/registration", controller.registration);
router.post("/login ", controller.login);
router.get("/users", controller.getUsers);

module.exports = router;
