import React, { useState } from "react";

const EventPracticeii = () => {
    // const [username, setUsername] = useState();
    // const [message, setMessage] = useState();
    // const onChangeUsername = e => {setUsername(e.target.value)};
    // const onChangeMessage = e => {setMessage(e.target.value)};
    const [form, setForm] = useState({
        username: "",
        message: "",
    });
    const {username, message} = form;
    
    const onChange = e => {
        const nextForm = {...form, [e.target.name]: e.target.value};
        setForm(nextForm);
    }

    const onClick = () => {
        setForm({
            username: "",
            message: ""
        })
    };

    const onKeyPress = e => {
        if(e.key === "Enter") {
            onClick();
        }
    };
    
    return(
        <div>
            <h1>Event Practice</h1>
            <input 
                type="text" 
                name="username" 
                placeholder="name here" 
                value={username}
                onChange={onChange} 
            />
            <input 
                type="text" 
                name="message" 
                placeholder="type anything" 
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress} 
            />
            <button onClick={onClick}>Confirm</button>
            <div>Hello, {username}. Your message is {message}</div>
        </div>
    )
    
};

export default EventPracticeii;