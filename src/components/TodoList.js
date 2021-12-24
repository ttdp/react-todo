import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import FilteredList from "./FilteredList";
import Info from "./Info";
import { applyFilter } from "../services/filter";
import Title from "./Title";

function TodoList(props) {
    const { title, items, addNew, changeStatus, filter, changeFilter, mode, changeMode, query, search } = props;
    const count = items.length
    const filteredList = applyFilter(items, filter)

    return (
        <div className="todolist">
            <Title title={title} />
            <Header mode={mode} addNew={addNew} query={query} search={search} />
            <FilteredList items={filteredList} changeStatus={changeStatus} />
            <Footer count={count} filter={filter} changeFilter={changeFilter} mode={mode} changeMode={changeMode} />
            <Info mode={mode} />
        </div>
    );
}

export default TodoList;