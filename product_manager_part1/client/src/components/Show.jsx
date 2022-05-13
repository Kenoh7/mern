import React, {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Show = (props) => {
    const [oneproduct, setoneproduct] = useState({})
    const {id} = useParams();
    // console.log(id)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pm/" + id )
            .then(res=>{
                // console.log(res.data.pm);
                setoneproduct(res.data.pm);
            })
            .catch(err => console.log(err))
    }, [id])
  return (
    <div>
        <h2>{oneproduct.title}</h2>
        <p>Price: {oneproduct.price}</p>
        <p>Description: {oneproduct.description}</p>
        <Link to={"/"+oneproduct._id+"/edit"}>Edit</Link>
    </div>
  )
}

export default Show