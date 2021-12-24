import React, { useState } from "react";
import TodoList from "./TodoList";
import { FILTER_ALL } from "../services/filter";
import { addToList, getAllTodo, updateStatus } from "../services/todo";
import { MODE_CREATE } from "../services/mode";

function App() {
    let title = "Things to do";
    let todos = getAllTodo()
    let query = ""

    const [items, setItems] = useState(todos)
    const [filter, setFilter] = useState(FILTER_ALL)
    const [mode, setMode] = useState(MODE_CREATE)

    function addNew(text) {
        let updatedTodo = addToList(items, { text, completed: false })
        setItems(updatedTodo)
    }

    function changeStatus(itemId, completed) {
        let updatedTodo = updateStatus(items, itemId, completed)
        setItems([...updatedTodo])
    }

    function changeMode(mode) {
        setMode(mode)
    }

    function search(text) {
        console.log(text);
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
                    changeFilter={e => setFilter(e)}
                    mode={mode}
                    changeMode={changeMode}
                    query={query}
                    search={search}
                />
            </div>
        </div>
    );
}

export default App;