//실습 52
import { useState } from 'react';

const Prac1 = () => {
  const [inputWriter, setInputWriter] = useState('');
  const [inputTitle, setInputTitle] = useState('');

  const [comments, setComments] = useState([
    { writer: '민수', title: '안뇽'},
    { writer: '지민', title: '하이하이'},
    { writer: '희수', title: '멋쟁이'},
  ])

  const addComment= () => {
    console.log('btnclick');
    //1.comments state에 원소 주기
    //{writer: xxx, title: xxx}
    let newComment = {writer: inputWriter , title: inputTitle}
    console.log(newComment);

    //2. 원소를 comments state에 추가하기 = state 변경
    //구조분해할당
    // ...comments: 기존 state배열의 모든 원소
    // newComment: 새로 추가될 state 배열의 원소
    //[...comments, newComment]: 변경된 state 배열
    setComments([...comments, newComment])

    //3. input 초기화
    setInputWriter('')
    setInputTitle('')
  }

  return (
    <>
      <form>
        <label htmlFor="writer">작성자: </label>
        <input
          type="text"
          id="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title">제목: </label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={addComment}>작성</button>

        <table border={1} style={{ margin: '30px auto', width: '500px' }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>

          <tbody>
            {comments.map((c, idx) => {
              return(
                <tr key={idx +1}>
                <th>{idx +1}</th>
                <th>{c.title}</th>
                <th>{c.writer}</th>
                </tr>
              )
            })}
          {/* <tr>
            <th>?</th>
            <th>?</th>
            <th>?</th>
            </tr> */}
          </tbody>
        </table>
      </form>
    </>
  );
};

export default Prac1;