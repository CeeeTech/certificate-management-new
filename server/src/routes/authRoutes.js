const Authcontroller = require("../controllers/Authcontroller");
const Router = require("express");

const router = Router();

router.post("/register", Authcontroller.Register); //register route
router.post("/login", Authcontroller.login); //login route

module.exports = router;
