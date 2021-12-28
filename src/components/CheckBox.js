import React, { useContext} from "react";
import TodoContext from "./TodoContext";

function CheckBox(props) {
    const { itemId, checked } = props

    const value = useContext(TodoContext)

    function handleChange(e) {
        value.updateTodo(itemId, checked)
    }

    return (
        <input type="checkbox" checked={checked} onChange={handleChange} />
    )
}

export default CheckBox