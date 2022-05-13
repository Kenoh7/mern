import './App.css';
import {Switch, Route} from 'react-router-dom';
import Create from './components/Create';
import Display from './components/Display';
import Edit from './components/Edit'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/new">
          <Create/>
        </Route>
        <Route path="/edit/:id">
          <Edit/>
        </Route>
        <Route path="/">
          <Display/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
