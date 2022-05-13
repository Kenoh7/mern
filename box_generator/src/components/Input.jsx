import React, { useState } from 'react'

const Input = (props) => {
    const [inputBox, setinputBox] = useState("");

    const submitBox = (e) => {
        e.preventDefault();
        props.addBox(inputBox);
    }

    return (
        <div>
            <p>Color</p>
            <form onSubmit={submitBox}>
                <input type="text" onChange ={(e) => setinputBox(e.target.value)}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Input