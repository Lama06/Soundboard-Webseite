import { createElement } from "react"
import { Sound } from "./Sound"
import { getSoundsFromCategory } from "./Util"
import "./SoundContainer.css"

/**
 * Enthält alle Sounds der aktuellen Kategorie
 */
export function SoundContainer({ sounds, currentCategory }) {
    return createElement(
        "div",
        {
            className: "sound-container",
        },
        getSoundsFromCategory(sounds, currentCategory).map((sound) =>
            createElement(Sound, {
                key: sound.id,
                sound,
            })
        )
    )
}
