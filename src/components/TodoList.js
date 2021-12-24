import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import FilteredList from "./FilteredList";
import Info from "./Info";
import { applyFilter } from "../services/filter";

function TodoList(props) {
    const { title, items, addNew, changeStatus, filter, changeFilter, mode, changeMode } = props;
    const count = items.length
    const filteredList = applyFilter(items, filter)

    return (
        <div className="todolist">
            <Header title={title} addNew={addNew} />
            <FilteredList items={filteredList} changeStatus={changeStatus} />
            <Footer count={count} changeFilter={changeFilter} mode={mode} changeMode={changeMode}/>
            <Info mode={mode} />
        </div>
    );
}

export default TodoList;