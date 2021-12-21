import React, { useState } from "react";
import { FILTER_ALL } from "../services/filter";
import TodoList from "./TodoList";

function App() {
    let todos = [
        {
            id: 1,
            text: "Learn Javascript",
            completed: false
        },
        {
            id: 2,
            text: "Learn React",
            completed: false
        },
        {
            id: 3,
            text: "Build a React App",
            completed: false
        },
        {
            id: 4,
            text: "Here we go",
            completed: true
        }
    ];

    const [items, setItems] = useState(todos)
    const [filter, setFilter] = useState(FILTER_ALL)

    let title = "Things to do";

    function addNew(text) {
        let nextId = items.length + 1
        let todo = { id: nextId, text: text, completed: false }
        setItems(todos.concat(todo))
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