import React, { useState } from "react";
import { KEY_RETURN } from 'keycode-js';

function InputBox(props) {

    const { addNew } = props
    const [text, setText] = useState("")

    function handleKeyUp(e) {
        if (e.keyCode === KEY_RETURN) {
            let todo = text.trim()
            setText("")

            addNew(todo)
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

export default InputBox