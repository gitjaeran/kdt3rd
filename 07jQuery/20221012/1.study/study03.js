console.log(document); //js
console.log($(document)); //jquery

// 1. Load Event
// dom tree가 완성되자마자 안내창을 보여줘야할때
// jquery
$(document).ready(function() {
  console.log('ready - 문서의 dom 트리가 완성되면 실행')
});

$(function () {
  console.log('안녕?');
});

// js
document.addEventListener('DOMContentLoaded', function () {
  console.log('domcontentloaded - 문서의 dom 트리가 완성되면 실행');
})


// 2. Mouse Event
$('.p-msg').click(function () {
  $('.p-msg').css('color', 'red');
});


console.log($('.num')); // length: 4
$('.num').click(function() {
  // $('.num').css('color', 'blue');
  // $(this): 자기자신을 의미
  $(this).css('color', 'blue');
  console.log($(this)); // 클릭이 발생한 그 요소를 의미
});

// js
// const nums = document.querySelectorAll('.num');
// for (let i = 0; i < nums.length; i++) {
//     nums[i].addEventListener('click', function () {
//         // console.log(nums[i]);
//         // nums[i].style.color = 'blue';
//         this.style.color = 'blue';
//         console.log(this);
//     });
// }


//mouseover(): 요소에 마우스 올렸을 때
$('.numbers').mouseover(function () {
  $(this).css('background-color', 'skyblue');
  $(this).append('<div>.mouseover() called!!!</div>')
});


//hover(): 마우스 올렸을 때, 떼었을 때
//dnema 영화 포스터에 마우스 올리면 줄 효과??
$('.div-hover').hover(
  function () {
    $(this).addClass('hover');
  },
  function () {
    $(this).removeClass('hover');
}
)


//scroll(): 스크롤할 때
console.log(window); // js
console.log($(window)); // jquery

$(window).scroll(function () {
    console.log('scroll!!!!!!!!');
})


// 3. Key Event
$('.input-key').keydown(function (e) {
  console.log(e);
  
  if (e.code == 'ArrowUp') {
      console.log('up')
  } else if (e.code == 'ArrowDown') {
      console.log('down')
  } else {
      console.log('others');
  }
})


// 4. Form Event
$('#todo-form').submit(function (e) {
  e.preventDefault(); // 기본 동작 막기
  // console.log('submit!')


  const todo = $('input[name="todo"]')
  $('.todos').append(`<li>${todo}</li>`)
  $('input[name="todo"]').val('');
});
