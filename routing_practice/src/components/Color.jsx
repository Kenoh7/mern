import React from 'react'
import { useParams } from 'react-router-dom'

const Color = (props) => {
    const {value, color, bgcolor} = useParams();
  return (
    <div>
        {
            isNaN(+value)?<h1 style={{ color: color, backgroundColor: bgcolor }}>This word is: { value } </h1> : <h1>This number is: { value }</h1>
        }
    </div>
  )
}

export default Color