const userControler = require("../Controler/user");
const router = require("express").Router();
//methodes here
router.post("/add-user", userControler.addUser);
router.post("/check-user", userControler.checkUser);
module.exports = router;
