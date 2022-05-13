import FunctionalComponent from './components/FunctionalComponent';
import './App.css';


function App() {
  const userForm ={
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confPassword: "",
  }
  return (
    <div className="App">
      <FunctionalComponent userForm = {userForm}/>
    </div>
  );
}

export default App;
