import React,{useState}from 'react';
import { useHistory } from 'react-router-dom';

const Home = (props) => {
    const [selectid, setselectid] = useState(1);
    const [select, setselect] = useState('people');
    const history = useHistory();
    
    const clickbtn = (e) => {
        e.preventDefault();
        // console.log("clicked")
        history.push(`/${select}/${selectid}`);
    }

  return (
    <div>
        <form className="padding" onSubmit={clickbtn}>
            <label>Search for: </label>
            <select onChange={ e => setselect(e.target.value)} value={select}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <label> &nbsp; ID: </label>
            <input className="id" onChange={ e => setselectid(e.target.value)} type="text" value={selectid}/>
            <button className="btn">Search</button>
        </form>
    </div>
  )
}

export default Home