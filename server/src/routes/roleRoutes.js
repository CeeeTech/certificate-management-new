const rolecontroller = require("../controllers/rolecontroller");
const Router = require("express");

const router = Router();

router.post("/addRole", rolecontroller.createRole);
router.get("/getRoles", rolecontroller.getRoles);

module.exports = router;
