// 클래스명 컴포넌트에서 state 다루기
import React from "react";

class Counter extends React.Component {
  state = {
    number: 0,
  };


  render() {
    //state 데이터는 this.state로 접근 가능
    const { number } = this.state;

    return (
      <div>
        <h1>{number}</h1>

        <button onClick={() => this.setState({ number: number + 2 })}>
          +2
        </button>

        <button onClick={() => this.setState({ number: number -1 })}>
          -1
        </button>
      </div>
    );
  }
}

// export 네임은 class 네임과 동일해야함
export default Counter;