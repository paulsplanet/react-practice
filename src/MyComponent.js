import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
    static defaultProps ={
        name: "Paul",
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    }   
    
    render () {
       
        const { name, children, favoriteNumber } = this.props;
        return (
            <>
                <h2>My new Component! Hello, {name}</h2>
                <div>
                    Children is {children} <br />
                    Favorite Number is {favoriteNumber}
                </div>
            </>
        );
    }
}

export default MyComponent;