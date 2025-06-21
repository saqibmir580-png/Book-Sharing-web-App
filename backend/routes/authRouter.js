const express=require('express')
const { register, login, getme } = require("../controllers/authController");
const protect = require('../middlewares/auth');
const router = express.Router();

router.post('/register',register)
router.post('/login',protect,login)
router.get('/me',protect,getme)

module.exports = router;
