const { register, login } = require("../controllers/authController");
const { checkUser } = require("../middlewares/authentication");

const router = require("express").Router();

router.post("/check", checkUser); 
router.post("/register", register);
router.post("/login", login);

module.exports = router;