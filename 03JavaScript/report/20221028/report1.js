/*
function call(name, cb) {
  setTimeout(function() {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function() {
    console.log('back');
    cb('back');
  }, 1000);
}

function call(cb) {
  setTimeout(function() {
    cb('callback hell');
  }, 1000);
}

call('kim', function (name) {
  console.log(name + '반가워');
  back(function (txt) {
    console.log(txt + '을 실행했구나');
    hell(function (message) {
      console.log('여기는' + message);
    })
  })
})
*/


// function call(name) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       console.log(name);
//       resolve(name);
//     }, 1000);
//   })
// }

// function back(cb) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       console.log('back');
//       resolve('back');
//     }, 1000);
//   })
// }

// function hell(cb) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       resolve('callback hell');
//     }, 1000);
//   })
// }

// call('kim', function (name) {
//   console.log(name + '반가워');
//   back(function (txt) {
//     console.log(txt + '을 실행했구나');
//     hell(function (message) {
//       console.log('여기는' + message);
//     })
//   })
// })


// call('kim')
//   .then(function(name) {
//     console.log(name + '반가워');
//     return back('back');
//   })
//   .then(function(txt) {
//     console.log(txt + '을 실행했구나');
//     return hell('callback hell')
//   })
//   .then(function(message) {
//     console.log('여기는' + message);
//   })



//실습2
// setTimeout(function () {
//   document.body.style.backgroundColor = 'red';
//   setTimeout(function () {
//     document.body.style.backgroundColor = 'orange';
//     setTimeout(function () {
//       document.body.style.backgroundColor = 'yellow';
//       setTimeout(function () {
//         document.body.style.backgroundColor = 'green';
//         setTimeout(function(){
//           document.body.style.backgroundColor = 'blue';
//         }, 1000)
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000);


// function changeColor(newBgColor) {
//   return new Promise(function (resolve, reject) {
//       setTimeout(function() {
//         document.body.style.backgroundColor = newBgColor;
//         resolve();
//     }, 1000);
//   });
// }

// changeColor('red')
//   .then(function() {
//     return changeColor('orange');
//   })
//   .then(function() {
//     return changeColor('yellow');
//   })
//   .then(function() {
//     return changeColor('green');
//   })
//   .then(function() {
//     return changeColor('blue');
//   })
  
  

function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      console.log(name);
      resolve(name);
    }, 1000);
  })
}

function back(cb) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      console.log('back');
      resolve('back');
    }, 1000);
  })
}

function hell(cb) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      resolve('callback hell');
    }, 1000);
  })
}

call('kim', function (name) {
  console.log(name + '반가워');
  back(function (txt) {
    console.log(txt + '을 실행했구나');
    hell(function (message) {
      console.log('여기는' + message);
    })
  })
})


call('kim')
  .then(function(name) {
    console.log(name + '반가워');
    return back('back');
  })
  .then(function(txt) {
    console.log(txt + '을 실행했구나');
    return hell('callback hell')
  })
  .then(function(message) {
    console.log('여기는' + message);
  })


  async function exec() {
    let user = await login('kim');
    console.log(user + '님 환영합니다');
    let videos = await getVideo(user);
    console.log(videos);
    let title = await getDetail(videos[0]);
    console.log(title);
  }

  exec();