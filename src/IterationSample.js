import React, { useState } from "react";

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: "blizzard" },
        { id: 2, text: "ice" },
        { id: 3, text: "rain" },
        { id: 4, text: "wind" }
    ]);
    const [inputText, setInputText] = useState();
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);

    const onClick = () => {
        const nextNames = names.concat({
            id: nextId, text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText("")
    };

    const onRemove = (id) => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>Add</button>
            <ul>
                {names.map((name) => (<li key={name.id} onDoubleClick={() => onRemove(name.id)} >{name.text}</li>))}
            </ul>
        </>
    )
};

export default IterationSample;