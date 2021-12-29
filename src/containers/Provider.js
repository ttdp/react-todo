import React, { createContext, useState } from "react";
import { getAllTodo, addTodo, updateTodo } from "../services/todo";
import { MODE_CREATE } from "../services/mode";

export const Context = createContext()

export const Provider = ({ children }) => {
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

    const value = {
        list: todo, 
        updateList: setTodo, 
        updateTodo: handleUpdate, 
        addTodo: handleAdd, 
        mode: mode,
        changeMode: changeMode
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}