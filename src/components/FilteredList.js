import React from "react";
import CheckBox from "./CheckBox";
import { MSG_NO_ITEMS } from "../assets/text/en_US";

export default function FilteredList(props) {
    const { list } = props

    if (list.length === 0) {
        return (
            <p className="alert alert-info">{MSG_NO_ITEMS}</p>
        )
    } else {
        return (
            <ul className="list-unstyled">
                {list.map(item => (
                    <FilteredItem key={item.id} item={item} />)
                )}
            </ul>
        )
    }
}

function FilteredItem(props) {
    const { item } = props;
    const className = 'todo-item ui-state-default ' + (item.completed === true ? 'completed' : 'pending')

    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox itemId={item.id} checked={item.completed} />{item.text}
                </label>
            </div>
        </li>
    );
}