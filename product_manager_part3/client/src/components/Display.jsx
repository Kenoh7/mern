import React, {useState}from 'react'
import axios from 'axios';



const Display = (props) => {
    const [title, settitle] = useState("");
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");

    const submitForm = e =>{
        // console.log(title,price,description)
        axios.post('http://localhost:8000/api/pm/new', {
            title: title,
            price: price,
            description: description
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }

  return (
    <div>
        <h1>Product Manager</h1>
        {/* <p>{JSON.stringify(title)}: {JSON.stringify(price)}:{JSON.stringify(description)}</p> */}
        <form className="form"onSubmit={submitForm}>
            <div className="row">
                <label>Title:</label>
                <input type="text" onChange={(e)=>settitle(e.target.value)} value={title}/>
            </div>
            <div className="row">
                <label>Price:</label>
                <input type="number" onChange={(e)=>setprice(e.target.value)} value={price}/>
            </div>
            <div className="row">
                <label>Description:</label>
                <input type="text" onChange={(e)=>setdescription(e.target.value)} value={description}/>
            </div>
            <input className="btn" type="submit" value="Create"/>
        </form>
    </div>
)
}

export default Display