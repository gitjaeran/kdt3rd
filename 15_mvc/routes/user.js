const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

//기본 경로 localhost:POST/user

//GET / => localhost:POST/user/
router.get('/', controller.user);

module.exports = router;