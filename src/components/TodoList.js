import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import FilteredList from "./FilteredList";
import { applyFilter } from "../services/filter";

function TodoList(props) {
    const { title, items, addNew, changeStatus, filter, changeFilter } = props;
    const count = items.length
    const filteredList = applyFilter(items, filter)

    return (
        <div className="todolist">
            <Header title={title} addNew={addNew} />
            <FilteredList items={filteredList} changeStatus={changeStatus} />
            <Footer count={count} change={changeFilter} />
        </div>
    );
}

export default TodoList;