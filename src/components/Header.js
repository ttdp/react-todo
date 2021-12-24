import React from "react";
import InputBox from "./InputBox";
import SearchBox from "./SearchBox";
import { MODE_CREATE, MODE_SEARCH } from "../services/mode";

export default function Header(props) {
    const { mode, addNew, query, searchQuery } = props;

    switch (mode) {
        case MODE_CREATE:
            return <InputBox addNew={addNew} />
        case MODE_SEARCH:
            return <SearchBox query={query} searchQuery={searchQuery} />
        default:
            return null
    }
}