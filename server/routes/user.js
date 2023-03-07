const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user.js');

router.post('/signup',  userCtrl.signup);
router.post('/', userCtrl.login);
router.get('/', auth, userCtrl.log)

module.exports = router;