import { createElement, useState } from "react"
import "./Sound.css"

/**
 * Ein Sound des Soundboardes
 */
export function Sound({ sound }) {
    const [audio] = useState(new Audio(sound.url))
    const [playing, setPlaying] = useState(false)

    audio.addEventListener("play", () => {
        setPlaying(true)
    })

    audio.addEventListener("pause", () => {
        setPlaying(false)
    })

    function handleClick() {
        if (playing) {
            audio.pause()
        } else {
            audio.currentTime = 0
            audio.play()
        }
    }

    return createElement(
        "div",
        {
            className: "sound " + (playing ? "playing" : "paused"),
            onClick: handleClick,
        },
        sound.name
    )
}
