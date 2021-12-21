import React, { useState } from "react";
import { FILTER_ALL } from "../services/filter";
import { addToList, getAllTodo } from "../services/todo";
import TodoList from "./TodoList";

function App() {
    let todos = getAllTodo()

    const [items, setItems] = useState(todos)
    const [filter, setFilter] = useState(FILTER_ALL)

    let title = "Things to do";

    function addNew(text) {
        let newTodo = addToList(items, { text, completed: false })
        setItems(newTodo)
    }

    return (
        <div className="container">
            <div className="row">
                <TodoList
                    title={title}
                    items={items}
                    addNew={addNew}
                    filter={filter}
                    changeFilter={e => setFilter(e)}>

                </TodoList>
            </div>
        </div>
    );
}

export default App;