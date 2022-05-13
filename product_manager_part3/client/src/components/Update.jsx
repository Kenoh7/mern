import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

const Update = (props) => {
    const history = useHistory();
    const {id} = useParams();
    const [title, settitle] = useState("");
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/pm/'+ id)
        .then(res =>{
            // console.log(res.data.title)
            settitle(res.data.pm.title);
            setprice(res.data.pm.price);
            setdescription(res.data.pm.description);
        })
        .catch(err =>{
            console.log(err)
        })
    }, [id]);
    const updateForm = e =>{
        e.preventDefault();
        console.log(title,price,description)
        axios.put('http://localhost:8000/api/pm/'+ id, {
            title: title,
            price: price,
            description: description
        })
            .then(res=>{
                console.log(res.data);
                history.push("/")
            })
            .catch(err=>{
                console.log(err)
            })
    }
  return (
    <div>
        <h1>Update a Product</h1>
        <form className="form" onSubmit={updateForm}>
            <div className="row">
                <label>Title:</label>
                <input type="text" name="title" onChange={(e)=>settitle(e.target.value)} value={title}/>
            </div>
            <div className="row">
                <label>Price:</label>
                <input type="number" name="price" onChange={(e)=>setprice(e.target.value)} value={price}/>
            </div>
            <div className="row">
                <label>Description:</label>
                <input type="text" name="description" onChange={(e)=>setdescription(e.target.value)} value={description}/>
            </div>
            <input className="btn" type="submit" value="Create"/>
        </form>
    </div>
  )
}

export default Update