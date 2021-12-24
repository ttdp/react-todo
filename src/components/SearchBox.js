import React, { useState } from "react";

export default function SearchBox(props) {
    const { query, searchQuery } = props
    const [str, setStr] = useState(query)

    function handleSearch(str) {
        setStr(str)
        searchQuery(str)
    }

    return (
        <input type="text" autoFocus
            className="form-control search"
            value={str}
            onChange={e => handleSearch(e.target.value)}
            placeholder="Search">
        </input>
    )
}