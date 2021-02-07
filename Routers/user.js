const userControler = require("../Controler/user");
const router = require("express").Router();
//methodes here
router.post("/add-user", userControler.addUser);
module.exports = router;
