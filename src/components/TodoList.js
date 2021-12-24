import React, { useState } from "react";
import Title from "./Title";
import Footer from "./Footer";
import Header from "./Header";
import FilteredList from "./FilteredList";
import Info from "./Info";
import { FILTER_ALL } from "../services/filter";
import { applyFilter, applySearch } from "../services/filter";

export default function TodoList(props) {
    const { title, items, addNew, updateTodo, mode, changeMode } = props;
    const [count, setCount] = useState(items.length)
    const [query, setQuery] = useState("")
    const [filter, setFilter] = useState(FILTER_ALL)
    const [filteredList, setFilteredList] = useState(applyFilter(items, filter))

    function handleSearch(value) {
        let searched = applySearch(applyFilter(items, filter), value)
        setFilteredList(searched)
        setQuery(value)
        setCount(searched.length)
    }

    function handleFilter(value) {
        let filtered = applySearch(applyFilter(items, value), query)
        setFilteredList(filtered)
        setFilter(value)
        setCount(filtered.length)
    }

    return (
        <div className="todolist">
            <Title title={title} />
            <Header mode={mode} 
                addNew={addNew} 
                query={query} 
                searchQuery={handleSearch} 
            />
            <FilteredList list={filteredList} updateTodo={updateTodo} />
            <Footer count={count}
                mode={mode}
                filter={filter}
                changeFilter={handleFilter}
                changeMode={changeMode}
            />
            <Info mode={mode} />
        </div>
    )
}