import React from "react";
import Filter from "./Filter";

function Footer(props) {
    const { count, filter, change } = props

    return (
        <div className="todo-footer clearfix">
            <div className="pull-left">
                <strong>
                    <span className="count-todos">{count}</span>
                </strong>
                {' items left'}
            </div>
            <div className="pull-right">
                <Filter filter={filter} change={change}></Filter>
            </div>
        </div>
    )
}

export default Footer