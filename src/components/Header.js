import React from "react";
import { MODE_CREATE, MODE_SEARCH } from "../services/mode";
import InputBox from "./InputBox";
import SearchBox from "./SearchBox";

export default function Header(props) {
    const { mode, addNew, query, search } = props;

    switch (mode) {
        case MODE_CREATE:
            return <InputBox addNew={addNew} />
        case MODE_SEARCH:
            return <SearchBox query={query} search={search} />
        default:
            return null
    }
}