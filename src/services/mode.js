import { KEY_ESCAPE, KEY_SLASH, KEY_N } from "keycode-js";

export const MODE_NONE = 'none'
export const MODE_SEARCH = 'search'
export const MODE_CREATE = 'create'

export function getModeByKey(current, keyPressed) {
    switch (current) {
        case MODE_NONE:
            if (keyPressed === KEY_SLASH) return MODE_SEARCH
            if (keyPressed === KEY_N) return MODE_CREATE
            break
        default:
            if (keyPressed === KEY_ESCAPE) return MODE_NONE
    }
}