import React, { Component } from "react";

class Counter extends Component {
    
    state = {
        number: 0,
        fixedNumber: 7,
    }; 
    

    render() {
        const { number, fixedNumber } = this.state;
        return (
            <>
                <h1>{number}</h1>
                <h2>fixed number is: {fixedNumber}</h2>
                <button onClick={
                    () => this.setState({ number: number + 1})
                }>+1</button>
            </>
        )
    }
}

export default Counter;