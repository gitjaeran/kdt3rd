import "./App.css";
import React from "react";

function App() {
  const name = "로이";
  const animal = "강아지";

  const a = 10;
  const b = 5;

  const title = "Hello World";

  return (
    <>
      <h2>연습문제 1</h2>
      <div>이것은 div입니다.</div>
      <h3>이것은 div 안에 있는 h3 태그입니다.</h3>
      <br />

      <h2>연습문제 2 </h2>
      <h2>
        제 반려동물의 이름은 <u>{name}</u> 입니다.
        <br />
        <u>{name}</u>는 <u>{animal}</u>입니다.
      </h2>
      <br />

      <h2>연습문제 3</h2>
      {3 + 5 == 8 ? <h1>정답입니다.</h1> : <h1>오답입니다.</h1>}
      <br />

      <h2>연습문제 4</h2>
      {a > b && <h2>a가 b보다 큽니다.</h2>}
      <br />

      <h2>연습문제 5</h2>

      <div className="test">{title}</div>

      <div className="input">
        아이디 : <input></input>
        <br />
        <br />
        비밀번호 : <input></input>
      </div>
      <br />
      <br />

      <h2>연습문제 6</h2>
      <div className="all">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
    </>
  );
}

export default App;
