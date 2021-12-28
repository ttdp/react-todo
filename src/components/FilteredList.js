import React from "react";
import TodoItem from "./TodoItem";
import { MSG_NO_ITEMS } from "../assets/text/en_US";

function FilteredList(props) {
    const { list } = props

    if (list.length === 0) {
        return (
            <p className="alert alert-info">{MSG_NO_ITEMS}</p>
        )
    } else {
        return (
            <ul className="list-unstyled">
                {list.map(item => (
                    <TodoItem key={item.id} item={item} />)
                )}
            </ul>
        )
    }
}

export default FilteredList