import './App.css';
import Display from './components/Display';
import List from './components/List';
import Show from './components/Show';
import Update from './components/Update';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Display/>
          <List/>
        </Route>
        <Route path="/:id/edit">
          <Update/>
        </Route>
        <Route path="/:id">
          <Show/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
