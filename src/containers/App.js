import React, { useState } from "react";
import TodoList from "../components/TodoList";
import { Provider } from "./Provider";

function App() {
    return (
        <Provider>
            <div className="container">
                <div className="row">
                    <TodoList />
                </div>
            </div>
        </Provider>
    );
}

export default App;