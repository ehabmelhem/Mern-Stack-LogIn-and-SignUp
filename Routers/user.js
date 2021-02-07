const userControler = require("../Controler/user");
const router = require("express").Router();
//methodes here
router.get("/work", userControler.work);
module.exports = router;
