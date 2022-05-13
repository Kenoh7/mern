import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'

const List = (props) => {
    const history = useHistory();
    const[product, setproduct] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/pm")
        .then(res => {
            // console.log(res.data.pm);
            setproduct(res.data.pm);
            history.push("/");
        })
        .catch(err=> console.log(err))
    },[])
    const deletebtn = (deleteID) => {
        axios.delete("http://localhost:8000/api/pm/delete/" + deleteID)
        .then(res => {
            console.log(res.data);
            setproduct(product.filter((product)=> product._id !== deleteID ))
        })
        .catch(err => console.log(err))
}

  return (
    <div>
        <hr />
        <h1>All Products:</h1>
        {
            // JSON.stringify(product)
            product.map((product,idx) => {
                return (
                <div>
                    <div key={product._id}>
                        <Link to={"/" + product._id}>{product.title}</Link>
                        <button onClick={() => deletebtn(product._id)}>Delete</button>
                    </div>
                </div>
                )
            })
        }
    </div>
  )
}

export default List