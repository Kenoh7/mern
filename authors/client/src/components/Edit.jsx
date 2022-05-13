import React, {useState, useEffect} from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import axios from 'axios'

const Edit = (props) => {
    const history = useHistory();
    const {id} = useParams();
    const [author, setauthor] = useState("");
    const [errors,setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/'+ id)
        .then(res =>{
            // console.log(res.data.author.name)
            setauthor(res.data.author.name);
        })
        .catch(err =>{
            console.log(err)
        })
    }, [id]);
    
    const updateForm = e =>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/'+ id, {
            name: author,
        })
            .then(res=>{
                console.log(res.data);
                history.push("/")
            })
            .catch(err=>{
                console.log(err)
                const {errors} = err.response.data.error;
                const messages = Object.keys(errors).map( error => errors[error].message)
                console.log(messages);
                setErrors(messages);
            })
    }
  return (
    <div>
        <h1>Favorite Authors</h1>
        <p>Edit this author</p>
        <form className="form" onSubmit={updateForm}>
            <div>
                <label>Title:</label>
                <input type="text" name="author" onChange={(e)=>setauthor(e.target.value)} value={author}/>
            </div>
            <button className="button"><Link to="/">Cancel</Link></button>
            <button className="button" type="submit">Submit</button>
        </form>
        <>
            {errors.map((err, idx) => <p style= {{color: "red"}} key={idx}>{err}</p>)}
        </>
    </div>
  )
}

export default Edit