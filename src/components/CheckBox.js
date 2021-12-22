import React from "react";

function CheckBox(props) {
    const { itemId, checked, changeStatus } = props

    function handleChange(e) {
        changeStatus(itemId, checked)
    }

    return (
        <input type="checkbox" checked={checked} onChange={handleChange} />
    )
}

export default CheckBox