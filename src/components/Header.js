import React from "react";
import InputBox from "./InputBox";
import SearchBox from "./SearchBox";
import { MODE_CREATE, MODE_SEARCH } from "../services/mode";

export default function Header(props) {
    const { mode, query, changeSearch } = props;

    switch (mode) {
        case MODE_CREATE:
            return <InputBox />
        case MODE_SEARCH:
            return <SearchBox query={query} changeSearch={changeSearch} />
        default:
            return null
    }
}