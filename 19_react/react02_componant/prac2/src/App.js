import './App.css';
import './BookComponent';
import BookComponent from './BookComponent';

function App() {
  return (
    <div className="App">
    <img></img>
    <BookComponent title="미드나잇 라이브러리" author="메트 헤이그" price="15,800원" type="문학/외국소설"></BookComponent>
    </div>
  );
}

export default App;
