import React, { useContext} from "react";
import { Context } from "../containers/Provider";

function CheckBox(props) {
    const { itemId, checked } = props

    const value = useContext(Context)

    function handleChange(e) {
        value.updateTodo(itemId, checked)
    }

    return (
        <input type="checkbox" checked={checked} onChange={handleChange} />
    )
}

export default CheckBox