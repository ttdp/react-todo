import React, { useContext } from "react";
import { getModeByKey } from "../services/mode";
import { Context } from "./Provider";

export default function Keyboard({ children }) {

    const value = useContext(Context)

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    })

    function handleKeyDown(event) {
        const mode = value.mode
        const nextMode = getModeByKey(mode, event.keyCode)
        
        if (nextMode !== mode) {
            event.preventDefault()
            value.changeMode(nextMode)
        }
    }

    return (
        <div>{children}</div>
    )
}