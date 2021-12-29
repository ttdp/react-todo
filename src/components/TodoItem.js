import React from "react";
import CheckBox from "./CheckBox";

function TodoItem(props) {
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

export default TodoItem;