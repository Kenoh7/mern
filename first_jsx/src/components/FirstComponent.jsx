import React, { Component } from "react"

class FirstComponent extends Component {
    render () {
        console.log(this.props.list);

        return (    
        <p>{
        this.props.list.map((list)=> {
            return <li>{list}</li>
        })
        }
        </p>
        )
    }
}

export default FirstComponent