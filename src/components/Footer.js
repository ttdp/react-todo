import React, { useContext } from "react";
import ModeButton from "./ModeButton";
import FilterButton from "./FilterButton";
import { Context } from "../containers/Provider";

function Footer(props) {
    const { count, filter, changeFilter } = props
    const mode = useContext(Context).mode

    return (
        <footer className="clearfix">
            <div className="pull-left buttons">
                <ModeButton mode={mode} />
            </div>
            <div className="pull-left">
                {count} items left
            </div>
            <div className="pull-right">
                <FilterButton filter={filter} changeFilter={changeFilter} />
            </div>
        </footer>
    )
}

export default Footer