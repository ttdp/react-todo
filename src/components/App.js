import React, { useState } from "react";
import TodoList from "./TodoList";
import { FILTER_ALL } from "../services/filter";
import { addToList, getAllTodo, updateStatus } from "../services/todo";

function App() {
    let todos = getAllTodo()

    const [items, setItems] = useState(todos)
    const [filter, setFilter] = useState(FILTER_ALL)

    let title = "Things to do";

    function addNew(text) {
        let updatedTodo = addToList(items, { text, completed: false })
        setItems(updatedTodo)
    }

    function changeStatus(itemId, completed) {
        let updatedTodo = updateStatus(items, itemId, completed)
        setItems([...updatedTodo])
    }

    return (
        <div className="container">
            <div className="row">
                <TodoList
                    title={title}
                    items={items}
                    addNew={addNew}
                    filter={filter}
                    changeStatus={changeStatus}
                    changeFilter={e => setFilter(e)}>
                </TodoList>
            </div>
        </div>
    );
}

export default App;