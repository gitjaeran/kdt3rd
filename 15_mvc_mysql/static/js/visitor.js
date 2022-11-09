const tbody = document.querySelector('tbody');
const buttonGroup = document.querySelector('#button-group');

// 폼 [등록] 버튼 클릭시
// - 테이블에 데이터 추가
function createVisitor() {
  console.log('click 등록 버튼');

  // 폼 선택
  const form = document.forms['visitor-form'];
  console.dir(form);
  console.log(form.name.value); // name input 값의 value
  console.log(form.comment.value); // comment input 값의 value

//글자 0개, 11개이상 먼저 잡아서 못올리게 하고
//10개이하까지 쓰면 등록되는 if문.
  if(form.name.value.length > 10){
    alert('10글자까지 작성 가능합니다');
    return false;

  } else if(form.name.value.length <= 0 || form.comment.value.length <= 0) {
    alert('글자를 입력해주세요');
    return false;

  } else {
    axios({
    method: 'POST',
    url: '/visitor/write',
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  })
    .then((res) => {
      console.log(res);
      console.log(res.data);
      return res.data;
    })
    .then((data) => {
      console.log(data); // {id: 8, name: 'ㅁㅁ', comment: 'ㅁㅁ'}

      const html = `
      <tr id="tr_${data.id}">
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.comment}</td>
        <td><button type="button" onclick="editVisitor('${data.id}');"">수정</button></td>
        <td><button type="button" onclick="deleteVisitor(this, '${data.id}');">삭제</button></td>
      </tr>`;

      // 테이블에 추가된 정보를 "바로" 보여주기
      // data 객체에 담긴 값을 이용해서 tbody 태그의 자식으로 tr 한줄이 추가되는 코드
      // js: insertAdjacentHTML() -> 특정 요소에 html 코드 추가 가능
      // vs. innerHTML(): 기존 html 코드 지우고 덮어씌움
      // jquery: append()
      tbody.insertAdjacentHTML('beforeend', html); // ver.js
      // $('tbody').append(html); // ver. jquery
      clearInput();
    });
  }
}
//위의 조건문을 더 간단하게 리팩토링!
// if(form.name.value.length > 10){
//     alert('10글자까지 작성 가능합니다');
//     clearInput();
//     return;
// }

// if(form.name.value.length === 0 || form.comment.value.length === 0) {
//   alert('글자를 입력해주세요');
//   clearInput();
//   return false;
// }   --> 더 정확히/친절하게 잡으려면 name, comment if문을 따로 작성하여 이름/방명록 기입에 대한 알림창을 따로 띄워줘야함.

//(form.name.value.length === 0) 과
//(!form.name.value.length) 는 같다!

// axios{(axios를 바깥으로 빼고 if문은 위에서 else 없이 한번에 해결)}



//[수정]
//테이블 내 [수정]버튼 클릭시 
// (1) form input에 각각 이름과 방명록 값 넣기
// (2) [변경], [취소] 버튼 대체
async function editVisitor(id) {
  console.log('edit visitor');
  console.log(id);

  // (1)
  // axios의 응답 결과를 result 변수에 담고자 함 ( -> 동기 처리 필요)
  // (result 변수에 한 명에 대한 정보를 담아야 하기 때문)
  // axios 처리를 기다렸다가 result라는 변수에 담아야 함
  // : async / await 사용해야함
  // await 를 만나 프로미스가 처리될때까지 기다리게함
  let result = await axios({
    method: 'GET',
    url: `/visitor/get?id=${id}`,
  }).then((res) => {
    console.log('1.: ', res.data);
    return res.data;
  });
  console.log('2. 방문자 하나 조회 결과: ', result);
  //result: {id: 2, name: '이찬혁', comment: '으라차차'}

  //폼 input에 '방문자 하나 조회 결과값 각각 대입'
  const form = document.forms['visitor-form'];
  form.name.value = result.name;
  form.comment.value = result.comment;


  // (2)
  const html = `
  <button type="button" onclick="editDo(${id});">변경</button>
  <button type="button" onclick="editCancel();">취소</button>
  `;
  buttonGroup.innerHTML = html;
}

//[변경]버튼 클릭
function editDo(id) {
  const form = document.forms['visitor-form'];

  axios({
    method: 'PATCH',
    url: '/visitor/edit',
    data: {
      id: id,
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log(res.data);
    return res.data;
  }).then((data) => {
    alert(data); //'수정 성공!!'

    //JS ver.
    const children = document.querySelector(`#tr_${id}`).children; //배열 크기 5 (tr이 5개 있으므로)
    console.log(children);
    children[1].textContent = form.name.value;
    children[2].textContent = form.comment.value;


    //[취소]버튼 클릭시와 동일한 동작
    //input버튼 초기화 , [등록]버튼 보이기
    editCancel();
  });
}


  //[취소]버튼 클릭시
  //input 초기화, [등록]버튼 보이기
  function editCancel() {
    console.log('edit cancel');

    //input 초기화
    clearInput();

    //(2) 등록 버튼 보이기(대체)
    const html = `<button type="button" onclick="createVisitor();">등록</button>`;
    buttonGroup.innerHTML = html;
  }


//[삭제]
function deleteVisitor(obj, id) {
  console.log('click 삭제 버튼');
  console.log(obj);
  console.log(id);

  if(confirm('정말 삭제하시겠습니까?')) {

    axios({
    method: 'DELETE',
    url: '/visitor/delete',
    data: {
    id: id,
    },
  })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .then((data) => {
      alert(data); // alert('삭제 성공!!')

      // obj: 삭제버튼 자기자신
      // obj.parentElement.parentElement.remove();
      // closest() 메서드
      obj.closest(`#tr_${id}`).remove(); // 더 간편 ver
    });
  } else {
    return false;
  }
}
//[삭제]리팩토링
//if(!confirm('정말 삭제하시겠습니까?')) {
//return;
//}



// input 초기화
function clearInput() {
  const form = document.forms['visitor-form'];
  form.name.value = '',
  form.comment.value = '';
}
