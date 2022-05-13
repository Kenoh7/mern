import React, { Component } from "react"

class PersonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Age: this.props.age
        }
    }

    increaseAge = () => {
        console.log("clicked");
        this.setState({
            Age: this.state.Age + 1
        })
    }

    render (){
        return(
            <div>
                <h2>{this.props.lastName}, {this.props.firstName}</h2>
                <p>Age: {this.state.Age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={ () => this.increaseAge() }> Birthday Button for {this.props.firstName} {this.props.lastName} </button>
            </div>

        )
    }
}

export default PersonCard;