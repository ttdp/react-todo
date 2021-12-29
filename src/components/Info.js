import React, { useContext } from "react";
import { MODE_NONE } from "../services/mode";
import { INFO_SHORTCUT_KEYS, INFO_CANCEL_SHORTCUT_KEY } from "../assets/text/en_US";
import { Context } from "../containers/Provider";

export default function Info() {
    const mode = useContext(Context).mode
    const message = mode === MODE_NONE ? INFO_SHORTCUT_KEYS : INFO_CANCEL_SHORTCUT_KEY
    return <p className="info">{message}</p>
}