import React from "react";
import CheckBox from "./CheckBox";

function TodoItem(props) {
    const { item, changeStatus } = props;

    return (
        <li className="ui-state-default">
            <div className="checkbox">
                <label>
                    <CheckBox itemId={item.id} checked={item.completed} changeStatus={changeStatus} />{item.text}
                </label>
            </div>
        </li>
    );
}

export default TodoItem;