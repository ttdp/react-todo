import React from "react";
import { MODE_CREATE, MODE_SEARCH, MODE_NONE } from "../services/mode";

function Button(props) {
    const { mode, changeMode } = props
    const isCreateMode = () => mode === MODE_CREATE
    const isSearchMode = () => mode === MODE_SEARCH

    function handleAdd() {
        if (isCreateMode) {
            changeMode(MODE_NONE)
        } else {
            changeMode(MODE_CREATE)
        }
    }

    function handleSearch() {
        if (isSearchMode) {
            changeMode(MODE_NONE)
        } else {
            changeMode(MODE_SEARCH)
        }
    }

    return (
        <div>
            <a title="Add New"
                className={'button add ' + (isCreateMode() ? 'selected' : '')}
                onClick={handleAdd}
            />
            <a title="Search"
                className={'button search ' + (isSearchMode() ? 'selected' : '')}
                onClick={handleSearch}
            />
        </div>
    )
}

export default Button
