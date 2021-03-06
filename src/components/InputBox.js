import React, { useState, useContext } from "react";
import { KEY_RETURN } from 'keycode-js';
import { Context } from "../containers/Provider";

export default function InputBox() {

    const [text, setText] = useState("")
    const value = useContext(Context)

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