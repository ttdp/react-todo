import React from "react";
import ModeButton from "./ModeButton";
import Filter from "./Filter";

function Footer(props) {
    const { count, filter, changeFilter, mode, changeMode } = props

    return (
        <footer className="clearfix">
            <div className="pull-left buttons">
                <ModeButton mode={mode} changeMode={changeMode} />
            </div>
            <div className="pull-left">
                {count} items left
            </div>
            <div className="pull-right">
                <Filter filter={filter} changeFilter={changeFilter} />
            </div>
        </footer>
    )
}

export default Footer