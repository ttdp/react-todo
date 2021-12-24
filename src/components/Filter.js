import React from "react";
import { getFilterOptions } from "../services/filter";

const options = getFilterOptions()

function Filter(props) {
    const { filter, changeFilter } = props
    const getClass = (key) => (key === filter ? 'selected' : '')

    return (
        <ul className="filters list-unstyled clearfix">
            {Object.keys(options).map(key => (
                <li key={key}>
                    <a onClick={() => changeFilter(key)} className={getClass(key)}>
                        {options[key]}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Filter