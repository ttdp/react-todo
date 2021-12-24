import React from "react";

export default function SearchBox(props) {

    const { query, search } = props

    function handleSearch(text) {
        search(text)
    }

    return (
        <input type="text" autoFocus
            className="form-control search"
            value={query}
            onChange={e => handleSearch(e.target.value)}
            placeholder="Search">
        </input>
    )
}