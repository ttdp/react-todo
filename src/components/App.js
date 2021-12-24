import React, { useState } from "react";
import TodoList from "./TodoList";
import { addToList, getAllTodo, updateStatus } from "../services/todo";
import { MODE_CREATE } from "../services/mode";

function App() {
    let title = "Things to do";
    let todos = getAllTodo()

    const [items, setItems] = useState(todos)
    const [mode, setMode] = useState(MODE_CREATE)

    function addNew(text) {
        let updatedTodo = addToList(items, { text, completed: false })
        setItems(updatedTodo)
    }

    function updateTodo(itemId, completed) {
        let updatedTodo = updateStatus(items, itemId, completed)
        setItems([...updatedTodo])
    }

    function changeMode(mode) {
        setMode(mode)
    }

    return (
        <div className="container">
            <div className="row">
                <TodoList
                    title={title}
                    items={items}
                    addNew={addNew}
                    updateTodo={updateTodo}
                    mode={mode}
                    changeMode={changeMode}
                />
            </div>
        </div>
    );
}

export default App;