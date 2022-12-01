import './App.css';
import Button from './button';
import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent';

function App() {
  return <div className="App">
    {/* 불러오는건 둘다 똑같음 */}
    <ClassComponent></ClassComponent>
    <ClassComponent name="KDT3rd" student={30}/>
    <hr />


    {/* props인 name=""를 넣고 FuncComponent.js에서 사용가능 */}
    {/* props는 계속 추가 가능 */}
    <FuncComponent name="KDT3기" student={25}/>
    <hr />


    <Button link="https://www.google.com">구글</Button>
    <Button link="https://www.daum.net">다음</Button>
    <Button></Button>
    <hr />
  </div>
}

export default App;
