import React, { useState } from "react";
import { KEY_RETURN } from 'keycode-js';

export default function InputBox(props) {

    const { addTodo } = props
    const [text, setText] = useState("")

    function handleKeyUp(e) {
        if (e.keyCode === KEY_RETURN) {
            let item = text.trim()
            setText("")
            addTodo(item)
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