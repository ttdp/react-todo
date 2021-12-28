import React, { useState, useContext } from "react";
import { KEY_RETURN } from 'keycode-js';
import TodoContext from "./TodoContext";

export default function InputBox() {

    const [text, setText] = useState("")
    const value = useContext(TodoContext)

    function handleKeyUp(e) {
        if (e.keyCode === KEY_RETURN) {
            let item = text.trim()
            setText("")
            value.addTodo(item)
        }
    }

    return (
        <input type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyUp={e => handleKeyUp(e)}
            className="form-control add-todo"
            placeholder="Add New">
        </input>
    )
}