import React, { useContext } from "react";
import { MODE_CREATE, MODE_SEARCH, MODE_NONE } from "../services/mode";
import { Context } from "../containers/Provider";

export default function ModeButton(props) {
    const { mode } = props
    const value = useContext(Context)

    function handleAdd() {
        if (mode === MODE_CREATE) {
            value.changeMode(MODE_NONE)
        } else {
            value.changeMode(MODE_CREATE)
        }
    }

    function handleSearch() {
        if (mode === MODE_SEARCH) {
            value.changeMode(MODE_NONE)
        } else {
            value.changeMode(MODE_SEARCH)
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