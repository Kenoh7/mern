import './App.css';
import {Switch, Route} from 'react-router-dom';
import Display from './components/Display';
import Home from './components/Home';
import DisplayPlanet from './components/DisplayPlanet';
import Error from './components/Error';


function App() {
  return (
    <div className="App">
      {/* <Link to={"/"}>Home</Link>
      <Link to={"/people/:id"}>Display</Link>
      <Link to={"/planets/:id"}>DisplayPlanet</Link>
      <Link to={"/error"}>Error</Link> */}
      <Home/>
      <Switch>
        <Route path={"/people/:id"}>
          <Display/>
        </Route>
        <Route path={"/planets/:id"}>
          <DisplayPlanet/>
        </Route>
        <Route path={"/error"}>
          <Error/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
