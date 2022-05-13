import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'

const Create = (props) => {
    const [author, setauthor] = useState("");
    const [errors,setErrors] = useState([])
    const history = useHistory();

    const submitForm = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/author/new', {
            name: author
        })
            .then(res => {
                console.log(res.data);
                console.log("SUCCESSFUL IN CLIENT");
                history.push("/")
            })
            .catch(err => {
                console.log("ERROR IN CLIENT")
                console.log(err.response.data)

                const {errors} = err.response.data.error;
                const messages = Object.keys(errors).map( error => errors[error].message)
                console.log(messages);
                setErrors(messages);
            })
    }
  return (
    <div>
        <h1>Favorite Authors</h1>
        <Link to="/">Home</Link>
        <p>Add a new author:</p>
        <form className="form" onSubmit={submitForm}>
            <label>Name:</label>
            <input className="box"type="text" onChange={(e)=>setauthor(e.target.value)} value={author}/>
            <div>
                <button className="button"><Link to="/">Cancel</Link></button>
                <button  className="button" type="submit">Submit</button>
            </div>
        </form>
        <>
            {errors.map((err, idx) => <p style= {{color: "red"}} key={idx}>{err}</p>)}
        </>

    </div>
  )
}

export default Create