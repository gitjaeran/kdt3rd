// TODO: 컨트롤러 코드
const User = require('../model/User');

exports.main = (req, res) => {
  res.render('index');
};

exports.getSignup = (req, res) => {
  User.getSignup((result) => {
    res.render('signup', {data: result });
  })
}

exports.postSignup = (req, res) => {
  User.postSignup((result) => {
    res.render('signup', {data: result });
  })
}

exports.getSignin = (req, res) => {
  User.getSignin((result) => {
    res.render('signin', {data: result });
  })
}

exports.postSignin = (req, res) => {
  User.postSignin((result) => {
    res.render('signin', {data: result });
  })
}

exports.postProfile = (req, res) => {
  User.postProfile((result) => {
    res.render('profile', {data: result });
  })
}

exports.editProfile = (req, res) => {
  User.editProfile((result) => {
    res.render('profile', {data: result });
  })
}

exports.deleteProfile = (req, res) => {
  User.deleteProfile((result) => {
    res.render('profile', {data: result });
  })
}