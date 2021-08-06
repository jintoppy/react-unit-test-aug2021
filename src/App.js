import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [val, setVal] = useState('');

  const onBtnClick = () => {
    setVal('hi');
  };

  return (
    <div className="App">
      <h2>Hello</h2>
      <h3>{val}</h3>
      <button onClick={onBtnClick}>Click me</button>
    </div>
  );
}

export default App;
