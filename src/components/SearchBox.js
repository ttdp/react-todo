import React, { useState } from "react";

export default function SearchBox(props) {
    const { changeSearch } = props
    const [query, setQuery] = useState(props.query)

    function handleSearch(value) {
        setQuery(value)
        changeSearch(value)
    }

    return (
        <input type="text" autoFocus
            className="form-control search"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search">
        </input>
    )
}