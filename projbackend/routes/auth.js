const express = require('express')
const { check } = require('express-validator');
const router = express.Router()
const {signout,signup} = require("../controllers/auth")

router.post('/signup',[
    check("firstName")
    .isLength({min:5})
    .withMessage('must be at least 5 chars long'),
    check("email").isEmail()
    .withMessage("Must be valid email"),
    check("password").isLength({min:3})
    .withMessage("Password be at least 3 char long")
],signup)
router.get('/signout',signout)

module.exports = router;