import React, { Component } from "react";

class EventPractice extends Component {
    state = {
        message: "",
        username: "",
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleClick = () => {
        this.setState({
            username: "",
            message: ""
        })
    };

    handleKeyPress = (e) => {
        if(e.key === "Enter"){
            this.handleClick();
        }
    }

    render() {
        return(
            <div>
                <h1>Event Practice</h1>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="name here" 
                    value={this.state.username}
                    onChange={this.handleChange} 
                />
                <input 
                    type="text" 
                    name="message" 
                    placeholder="type anything" 
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress} 
                />
                <button onClick={this.handleClick}>Confirm</button>
                <div>Hello, {this.state.username}. Your message is {this.state.message}</div>
            </div>
        )
    }
};

export default EventPractice;