import React, { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState();
    const onClickEnter = () => setMessage("Hello!");
    const onClickLeave = () => setMessage("Bye!")

    const [color, setColor] = useState();

    return (
        <div>
            <button onClick={onClickEnter}>Enter</button>
            <button onClick={onClickLeave}>Leave</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{ color: "red" }} onClick={() => setColor("red")}>Red</button>
            <button style={{ color: "blue" }} onClick={() => setColor("blue")}>Blue</button>
            <button style={{ color: "grey" }} onClick={() => setColor("grey")}>Red</button>
        </div>
    );
};

export default Say;