import React from 'react'

const style = {display: "inline-block",gap:"10px", backgroundColor: "#d0f6ff", width: "200px", height: "200px"}


const Display = (props) => {
    return (
        <div>
            {
            props.boxes.map((boxes,i) => {
                console.log(boxes)
                return <div style={{ backgroundColor: props.boxes[i], height:'100px', width:'100px',display: "inline-block"}} key={i}></div>
            })
            }
        </div>
    )
}

export default Display