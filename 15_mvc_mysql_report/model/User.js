// TODO: DB(mysql) 연결
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'kdt',
});


// TODO: 모델 코드
exports.getSignup = (callback) => {
  conn.query(`SELECT * FROM user`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('User.js', rows); // [ {}, {}, {}, {} ]
    callback(rows);
  });
};


exports.postSignup = (data, callback) => {
  const sql = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    callback(rows.insertId);
  })
}


exports.getSignin = (callback) => {
  // after - mysql 연결
  // query(SQL, callback)
  conn.query(`SELECT * FROM user`,
    (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('User.js', rows); // [ {}, {}, {}, {} ]
    callback(rows);
  });
};


exports.postSignin = (userid, callback) => {
  const sql = `SELECT * FROM user WHERE userid='${data.userid}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    callback(rows.insertId);
  })
}