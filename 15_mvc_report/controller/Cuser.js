const User = require('../model/User');
console.log(User);

exports.main = (req, res) => {
  res.render('index', {title: '실습'});
  
}; //app.js - GET


exports.practice30 = (req, res) => {

  if (User.getUserInfo().realId === req.body.userId && User.getUserInfo().realPw === req.body.userPw) {
    res.send({ userInfo: req.body, isSuccess: true });
  } else {
    res.send({ isSuccess: false });
  }
}

