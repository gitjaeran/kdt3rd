import logo from "./logo.svg";
import "./App.css";
import React from "react";
import imgA from "./grass.png";

function App() {
  const name = "Sean";
  let name2 = "로이";
  let animal = "강아지";

  let flag = true;
  let txt = "";
  let result;

  let title = "Hello World";

  let a = 15;
  let b = 10;

  let sum = 3 + 5;
  if (sum === 8) {
    result = true;
  } else {
    result = false;
  }

  const styles = {
    h2: {
      backgroundColor: "blue",
      fontSize: "40px",
      color: "white",
    },
    p: {
      backgroundColor: "red",
      fontSize: "40px",
      color: "white",
    },
    c: {
      underline: { textDecorationLine: "underline" },
    },
  };

  const colors = {
    r: {
      backgroundColor: "red",
    },
    o: {
      backgroundColor: "orange",
    },
  };

  return (
    <>
      // JSX 문법 // 1. 컴포넌트에 여러 요소 있으면 반드시 부모 요소 하나로
      감싸야 함!
      <div className="App">
        {/* 2. {} 감싸면 자바스크립트 표현식 사용가능 */}
        {/* 3. style 속성
      -dom 요소에 스타일 적용시 문자열 x-> "객체 " 사용
      - 스타일 이름중 하이픈(-) 포함시 camelCase작성해야*/}
        <h2 style={styles}>안뇽 {name}</h2>
        <h2
          styles={{
            backgroundColor: "blue",
            fontSize: "40px",
            color: "white",
          }}
        >
          안뇽 {name}
        </h2>
        <h2>{name === "Sean" ? "반가워" : "누구..?"}</h2>
        <p>{txt}</p>
        <p>{flag ? <h3>true임</h3> : <h3>false임</h3>}</p>
        <p>{flag && <h3>true 일때만 보이는 메세지</h3>}</p>
        {/* {4. className사용}
      - class 속성이 아닌 className 속성을 ㅅ사용 */}
        <h3 className="hello" onClick={() => alert("안녕안녕")}>
          hello~~~~~~~~~~~~
        </h3>
        {/* 5. 종료 태그가 없는 태그의 사용
      - 기존 html 태그에서 종료태그가 없더라도 종료태그를 작성해야 함
      - or self-closing
      - 잘못된 예 ) <input>, <br>
      - 올바른 예) <input></input>, <br /> */}
        {/* 6. 주석
      - //: jsx외부 주석
      - jsx 내부 주석 */}
      </div>
      <div>
        이것은 div입니다.
        <h3>div안에 있는 h3태그 입니다</h3>
      </div>
      <div>
        제 반려 동물의 이름은 <a style={styles.c}>{name2}</a>입니다.
        <a style={styles.c}>{name2}</a>는 <a style={styles.c}>{animal}</a>
        입니다.
      </div>
      <a>3+5 == 8</a>
      <p>{result ? <h3>정답입니다.</h3> : <h3>오답입니다</h3>}</p>
      <p>{a > b && <h3>a가 b보다 큽니다</h3>}</p>
      <div className="outer">
        <div className="test">{title}</div>
        <div>
          아이디: <input className="input" type="text" />
        </div>
        <br />
        <div>
          비밀번호: <input className="input" type="text" />
        </div>
        <br />
        <br />
      </div>
      <div className="color">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
      <div className="bug">
        <div className="div1 position-absolute"></div>
        <div className="div2 position-absolute"></div>
        <div className="div3 position-absolute"></div>
        <div className="div4 position-absolute"></div>
        <div className="div5 position-absolute"></div>
        <div className="div6 position-absolute"></div>
        <div className="div7 position-absolute"></div>
        <img className="div8 position-absolute" src={imgA} alt="grass" />
      </div>
    </>
  );
}

export default App;
