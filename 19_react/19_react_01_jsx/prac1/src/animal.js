import React from "react";

function animal() {
  const name = "로이";
  const animal = "강아지";
  return (
    <>
      <h2>
        제 반려동물의 이름은 <u>{name}</u> 입니다.
        <br />
        <u>{name}</u>는 <u>{animal}</u>입니다.
      </h2>
    </>
  );
}

export default animal;
