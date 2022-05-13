import './App.css';
import Display from './components/Display';
import React, {useState} from 'react';
import Input from './components/Input';

function App() {  
  const [boxes, setboxes] = useState([])

  const addBox = (newbox) => {
    setboxes([...boxes, newbox])
  }

  return (
    <div className="App">
        <div className="top">
          <Display boxes={boxes}/>
          <Input addBox = {addBox}/>
        </div>
    </div>
  );
}

export default App;
