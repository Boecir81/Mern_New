import React, { Component } from 'react';

class MenuItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishLikes: this.props.dishLikes
        };

        this.likeItHandler = () => {
            console.log("Your liking it");
            // alert(`You have Liked ${this.props.dishName}`)
            this.setState({ dishLikes: this.state.dishLikes + 1 })
        }
    }




    render() {
        return (
            <div>
                <h3>{this.props.dishName}</h3>
                <p>Price: ${this.props.dishPrice}</p>
                <p>Number of likes: {this.state.dishLikes}</p>
                <p>Description: {this.props.dishDescription}</p>
                <button onClick={this.likeItHandler}>Like Item &#10084;</button>
                <hr />

            </div>
        )
    }
}

export default MenuItem;