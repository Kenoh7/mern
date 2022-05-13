import './App.css';
import FirstComponent from './components/FirstComponent';

const list = ["Learn react", "Climb Mt Everest", "Run a marathon", "Feed the dogs"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello Dojo!</h1>
        <h2>Things I need to do:</h2>
        <p>
          <FirstComponent list = { list} />
        </p>
      </header>
    </div>
  );
}

export default App;
