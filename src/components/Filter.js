import React from "react";
import { getFilterOptions } from "../services/filter";

const options = getFilterOptions()

function Filter(props) {
    const { filter, change } = props
    const getClass = (key) => (key === filter ? 'selected' : '')

    return (
        <ul className="filters list-unstyled clearfix">
            {Object.keys(options).map(key => (
                <li key={key}>
                    <button onClick={() => change(key)} className={getClass(key)}>
                        {options[key]}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Filter