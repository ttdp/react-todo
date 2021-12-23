import React from "react";
import TodoItem from "./TodoItem";

function FilteredList(props) {
    const { items, changeStatus } = props

    if (items.length === 0) {
        return (
            <p className="alert alert-info">There are no items.</p>
        )
    } else {
        return (
            <ul className="list-unstyled">
                {items.map(item => (
                    <TodoItem key={item.id} item={item} changeStatus={changeStatus} />)
                )}
            </ul>
        )
    }
}

export default FilteredList