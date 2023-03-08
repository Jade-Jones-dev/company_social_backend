const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user.js');

router.post('/signup',  userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/', userCtrl.log)

module.exports = router;