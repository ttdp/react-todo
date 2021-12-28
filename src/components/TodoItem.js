import React from "react";
import CheckBox from "./CheckBox";

function TodoItem(props) {
    const { item } = props;

    return (
        <li className="ui-state-default">
            <div className="checkbox">
                <label>
                    <CheckBox itemId={item.id} checked={item.completed} />{item.text}
                </label>
            </div>
        </li>
    );
}

export default TodoItem;