import PersonCard from './Component/PersonCard';
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <PersonCard lastName = {'Doe'} firstName ={'Jane'} age={45} hairColor = {'Black'}/>
        <PersonCard lastName = {'Smith'} firstName ={'John'} age={88} hairColor = {'Brown'}/>
        <PersonCard lastName = {'Fillmore'} firstName ={'Millard'} age={50} hairColor = {'Brown'}/>
        <PersonCard lastName = {'Smith'} firstName ={'Maria'} age={62} hairColor = {'Brown'}/>
      </div>
    )
  }
}

export default App;
