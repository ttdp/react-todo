import React, { useState } from "react";
import TodoList from "./TodoList";
import { getAllTodo, addTodo, updateTodo } from "../services/todo";
import { MODE_CREATE } from "../services/mode";

function App() {
    let title = "Things to do";

    const [items, setItems] = useState(getAllTodo())
    const [mode, setMode] = useState(MODE_CREATE)

    function handleAdd(text) {
        let updatedTodo = addTodo(items, { text, completed: false })
        setItems(updatedTodo)
    }

    function handleUpdate(itemId, completed) {
        let updatedTodo = updateTodo(items, itemId, completed)
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
                    addTodo={handleAdd}
                    updateTodo={handleUpdate}
                    mode={mode}
                    changeMode={changeMode}
                />
            </div>
        </div>
    );
}

export default App;