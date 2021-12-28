import React, { useState } from "react";
import TodoList from "../components/TodoList";
import { getAllTodo, addTodo, updateTodo } from "../services/todo";
import { MODE_CREATE } from "../services/mode";
import TodoContext from "../components/TodoContext";

function App() {
    const [todo, setTodo] = useState(getAllTodo())
    const [mode, setMode] = useState(MODE_CREATE)

    function handleAdd(text) {
        let updatedTodo = addTodo(todo, { text, completed: false })
        setTodo([...updatedTodo])
    }

    function handleUpdate(itemId, completed) {
        let updatedTodo = updateTodo(todo, itemId, completed)
        setTodo([...updatedTodo])
    }

    function changeMode(mode) {
        setMode(mode)
    }

    return (
        <TodoContext.Provider value={{ list: todo, updateList: setTodo, updateTodo: handleUpdate, addTodo: handleAdd, changeMode: changeMode }}>
            <div className="container">
                <div className="row">
                    <TodoList mode={mode} />
                </div>
            </div>
        </TodoContext.Provider>
    );
}

export default App;