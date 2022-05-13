import './App.css';
import React,{useState} from 'react';
import Display from './components/Display';

function App() {
  const [tabs, settabs] = useState([
    {
      label: "Tab 1",
      content:"Tab 1 content is showing here"
    },
    {
      label: "Tab 2",
      content:"Tab 2 content is showing here"
    },
    {
      label: "Tab 3",
      content:"Tab 3 content is showing here"
    }
  ])
  return (
    <div className="App">
      <Display tabs={tabs} settabs={settabs}/>
    </div>
  );
}

export default App;
