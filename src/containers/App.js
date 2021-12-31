import React, { useState } from "react";
import TodoList from "../components/TodoList";
import Keyboard from "./Keyboard";
import { Provider } from "./Provider";

function App() {
    return (
        <Provider>
            <Keyboard>
                <div className="container">
                    <div className="row">
                        <TodoList />
                    </div>
                </div>
            </Keyboard>
        </Provider>
    );
}

export default App;