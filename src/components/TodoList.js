import React, { useState, useContext } from "react";
import Title from "./Title";
import Footer from "./Footer";
import Header from "./Header";
import FilteredList from "./FilteredList";
import Info from "./Info";
import { FILTER_ALL } from "../services/filter";
import { applyFilter, applySearch } from "../services/filter";
import TodoContext from "./TodoContext";

export default function TodoList(props) {
    const value = useContext(TodoContext)

    const { mode } = props;
    const [query, setQuery] = useState("")
    const [filter, setFilter] = useState(FILTER_ALL)

    function handleSearch(str) {
        setQuery(str)
    }

    function handleFilter(str) {
        setFilter(str)
    }

    function doFilter() {
        return applySearch(applyFilter(value.list, filter), query)
    }

    return (
        <div className="todolist">
            <Title />
            <Header mode={mode} query={query} changeSearch={handleSearch} />
            <FilteredList list={doFilter()} />
            <Footer mode={mode} count={value.list.length} filter={filter} changeFilter={handleFilter} />
            <Info mode={mode} />
        </div>
    )
}