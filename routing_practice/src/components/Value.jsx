import React from 'react'
import { useParams } from 'react-router-dom'

const Value = (props) => {
    const { value } = useParams();
  return (
    <div>
        {
            isNaN(+value)?<h1>This word is: { value } </h1> : <h1>This number is: { value }</h1>
        }
    </div>
  )
}

export default Value