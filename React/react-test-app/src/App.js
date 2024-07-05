import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("")

  console.log("dom is rendered.")
  return (
    <div className="App">
      <input value={text} onChange={(value)=> {setText(value.nativeEvent.data)}}></input>
    </div>
  );
}

export default App;
