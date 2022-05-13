import React, { useState } from 'react'

const Display = (props) => {
    console.log(props)
    const [clickIndex, setclickIndex] = useState(0);
    // const onClick = (e,ctabs) => {
    //     console.log({ctabs}, "content is showing here");
    // }
    return (
        <div>
            <div>
                {
                    props.tabs.map((tabs, i) => {
                        return <button style={{width:"100px", height:"40px", display: "inline-block", padding:"10px"}} onClick={ (e) => setclickIndex(i)} key={i} >{tabs.label}</button>
                    })
                }
            </div>
            <div style={{padding:"100px", border:"solid black 1pt"}}>
                {props.tabs[clickIndex].content}
            </div>
        </div>
    )
}

export default Display