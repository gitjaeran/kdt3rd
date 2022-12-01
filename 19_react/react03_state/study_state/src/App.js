import './App.css';
import Counter from './Counter';
import SayFunc from './SayFunc';
import CounterFunc from './CounterFunc';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr/>

      <SayFunc />
      <hr/>
      {/* value=CounterFunc의 props */}
      <CounterFunc value="1 더하기" />
    </div>
  );
}

export default App;
