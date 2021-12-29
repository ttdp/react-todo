import React, { useState, useContext } from "react";
import Title from "./Title";
import Footer from "./Footer";
import Header from "./Header";
import FilteredList from "./FilteredList";
import Info from "./Info";
import { FILTER_ALL } from "../services/filter";
import { applyFilter, applySearch } from "../services/filter";
import { Context } from "../containers/Provider";

export default function TodoList(props) {
    const value = useContext(Context)

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
            <Header query={query} changeSearch={handleSearch} />
            <FilteredList list={doFilter()} />
            <Footer count={value.list.length} filter={filter} changeFilter={handleFilter} />
            <Info />
        </div>
    )
}