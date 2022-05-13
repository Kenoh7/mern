import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import Value from './components/Value';
import Color from './components/Color';

function App() {
  return (
    <div className="App">
      <Link to="/home"></Link>
      <Link to="/:value"></Link>
      <Link to="/:value/:color/:bgcolor"></Link>

      <Switch>
        <Route path={"/home"}>
          <Home/>
        </Route>

        <Route exact path={"/:value"}>
          <Value/>
        </Route>

        <Route exact path={"/:value/:color/:bgcolor"}>
          <Color/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
