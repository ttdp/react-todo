import React, { useState, createContext } from "react";
import TodoList from "./TodoList";
import { getAllTodo, addTodo, updateTodo } from "../services/todo";
import { MODE_CREATE } from "../services/mode";

export const TodoContext = createContext()

function App() {
    let title = "Things to do";

    const [todo, setTodo] = useState(getAllTodo())
    const [mode, setMode] = useState(MODE_CREATE)

    function handleAdd(text) {
        console.log(text);
        let updatedTodo = addTodo(todo, { text, completed: false })
        console.log(updatedTodo.length);
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
        <TodoContext.Provider value={todo}>
            <div className="container">
                <div className="row">
                    <TodoList
                        title={title}
                        addTodo={handleAdd}
                        updateTodo={handleUpdate}
                        mode={mode}
                        changeMode={changeMode}
                    />
                </div>
            </div>
        </TodoContext.Provider>
    );
}

export default App;