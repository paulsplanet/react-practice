import React from "react";

const IterationSample = () => {
    const names = ["blizzard", "ice", "thunder", "rain"];
    return (
        <ul>
            {names.map((name, index) => (<li key={index}>{name}</li>))}
        </ul>
    )
}

export default IterationSample;