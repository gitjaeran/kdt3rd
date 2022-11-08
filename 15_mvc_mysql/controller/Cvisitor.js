const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
  // before
  // console.log(Visitor.getVisitors());
  // res.render('visitor', { data: Visitor.getVisitors() });

  // after
  Visitor.getVisitors((result) => {
    console.log('Cvisitor.js', result); // [ {}, {}, {}, {} ]
    res.render('visitor', { data: result });
  });
};

exports.postVisitor = (req, res) => {
  console.log('postvisitor: ', req.body);
  // postvisitor:  { name: '빅파이', comment: '맛있다' }

  Visitor.postVisitor(req.body, (result) => {
    console.log('Cvisitor.js', result); // Cvisitor.js 10
    res.send({
      id: result, // pk(id) -> 10
      name: req.body.name, // 폼에 입력한 name
      comment: req.body.comment, // 폼에 입력한 comment
    });
  });
};

exports.deleteVisitor = (req, res) => {
  console.log(req.body); // { id: '1' }
  console.log(req.body.id); // 1

  Visitor.deleteVisitor(req.body.id, (result) => {
    console.log('Cvisitor.js: ', result);
    res.send('삭제 성공!!!');
  });
};