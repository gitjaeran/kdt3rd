// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// 기본주소: localhost:PORT/user

// GET / => localhost:PORT/user
router.get('/', controller.main);


// GET /signup => localhost:PORT/user/signup
router.get('/signup', controller.getSignup);
router.post('/signup', controller.postSignup);

// GET /signin => localhost:PORT/user/signin
router.get('/signin', controller.getSignin);
router.post('/signin', controller.postSignin);

// GET /profile => localhost:PORT/user/profile
router.post('/profile', controller.postProfile);
router.post('/profile/edit', controller.editProfile);
router.post('/profile/delete', controller.deleteProfile);


module.exports = router;