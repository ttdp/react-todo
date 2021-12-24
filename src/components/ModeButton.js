import React from "react";
import { MODE_CREATE, MODE_SEARCH, MODE_NONE } from "../services/mode";

export default function ModeButton(props) {
    const { mode, changeMode } = props

    function handleAdd() {
        if (mode === MODE_CREATE) {
            changeMode(MODE_NONE)
        } else {
            changeMode(MODE_CREATE)
        }
    }

    function handleSearch() {
        if (mode === MODE_SEARCH) {
            changeMode(MODE_NONE)
        } else {
            changeMode(MODE_SEARCH)
        }
    }

    return (
        <div>
            <a title="Add New"
                className={'button add ' + (mode === MODE_CREATE ? 'selected' : '')}
                onClick={handleAdd}
            />
            <a title="Search"
                className={'button search ' + (mode === MODE_SEARCH ? 'selected' : '')}
                onClick={handleSearch}
            />
        </div>
    )
}