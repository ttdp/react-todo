import React, { useState, useContext } from "react";
import Title from "./Title";
import Footer from "./Footer";
import Header from "./Header";
import FilteredList from "./FilteredList";
import Info from "./Info";
import { FILTER_ALL } from "../services/filter";
import { applyFilter, applySearch } from "../services/filter";
import { TodoContext } from "./App";

export default function TodoList(props) {
    const { title, addTodo, updateTodo, mode, changeMode } = props;
    const todo = useContext(TodoContext)

    const [count, setCount] = useState(todo.length)
    const [query, setQuery] = useState("")
    const [filter, setFilter] = useState(FILTER_ALL)
    const [filteredList, setFilteredList] = useState(applyFilter(todo, filter))

    function handleSearch(value) {
        setQuery(value)
        let searched = applySearch(applyFilter(todo, filter), value)
        setFilteredList(searched)
        setCount(searched.length)
    }

    function handleFilter(value) {
        setFilter(value)
        let filtered = applySearch(applyFilter(todo, value), query)
        setFilteredList(filtered)
        setCount(filtered.length)
    }

    return (
        <div className="todolist">
            <Title title={title} />
            <Header mode={mode} query={query} addTodo={addTodo} changeSearch={handleSearch} />
            <FilteredList list={filteredList} updateTodo={updateTodo} />
            <Footer mode={mode} count={count} filter={filter} changeFilter={handleFilter} changeMode={changeMode} />
            <Info mode={mode} />
        </div>
    )
}