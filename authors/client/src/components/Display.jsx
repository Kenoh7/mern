import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Display = (props) => {
    const [author, setauthor] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/author/")
        .then(res => {
            // console.log(res.data.author);
            setauthor(res.data.author);
        })
        .catch(err=> console.log(err))
    },[])
    const deletebtn = (deleteID) => {
        axios.delete("http://localhost:8000/api/author/delete/" + deleteID)
        .then(res => {
            console.log(res.data);
            setauthor(author.filter((author)=> author._id !== deleteID ))
        })
        .catch(err => console.log(err))
}
  return (
    <div className="display">
        <h1>Favorite Authors</h1>
        <Link to="/new">Add an Author</Link>
        <p>We have quotes by:</p>
        <div>
            <div>
                <table>
                    <thead>
                        <tr className="trow">
                            <th>Author</th>
                            <th>Actions Available</th>
                        </tr>
                    </thead>
                {
                    author.map((author,idx) => {
                        return (
                    <tbody key={author._id}>
                        <tr>
                            <td>{author.name}</td>
                            <td>
                                <button className="edit"><Link to={"/edit/" + author._id}>edit</Link></button>
                                <button className="delete"onClick={() => deletebtn(author._id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                        )
                    })
                }
                </table>
            </div>
        </div>
    </div>
  )
}

export default Display