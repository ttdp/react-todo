import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import TodoItem from "./TodoItem";

function TodoList(props) {
    const { title, items, addNew } = props;
    const count = items.length

    return (
        <div className="todolist">
            <Header title={title} addNew={addNew} />

            <ul className="list-unstyled">
                {items.map(item => <TodoItem key={item.id} data={item} />)}
            </ul>

            <Footer count={count}></Footer>
        </div>
    );
}

export default TodoList;