import React from "react";
import { applyFilter } from "../services/filter";
import Footer from "./Footer";
import Header from "./Header";
import TodoItem from "./TodoItem";

function TodoList(props) {
    const { title, items, addNew, changeStatus, filter, changeFilter } = props;
    const count = items.length

    const filteredList = applyFilter(items, filter)

    return (
        <div className="todolist">
            <Header title={title} addNew={addNew} />

            <ul className="list-unstyled">
                {filteredList.map(item => <TodoItem key={item.id} item={item} changeStatus={changeStatus} />)}
            </ul>

            <Footer count={count} change={changeFilter}></Footer>
        </div>
    );
}

export default TodoList;