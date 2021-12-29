import React, { useContext } from "react";
import InputBox from "./InputBox";
import SearchBox from "./SearchBox";
import { MODE_CREATE, MODE_SEARCH } from "../services/mode";
import { Context } from "../containers/Provider";

export default function Header(props) {
    const { query, changeSearch } = props;
    const mode = useContext(Context).mode

    switch (mode) {
        case MODE_CREATE:
            return <InputBox />
        case MODE_SEARCH:
            return <SearchBox query={query} changeSearch={changeSearch} />
        default:
            return null
    }
}