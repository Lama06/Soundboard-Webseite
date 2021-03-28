import { createElement, useState } from "react"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { SoundContainer } from "./SoundContainer"
import "./Soundboard.css"

export function Soundboard() {
    const [title, setTitle] = useState("Soundboard")
    const [sounds, setSounds] = useState([])
    const [currentCategory, setCurrentCategory] = useState("Sounds")
    const [currentModal, setCurrentModal] = useState(null)

    return createElement(
        "div",
        {
            className: "soundboard",
        },
        createElement(Header, { title }),
        createElement(Sidebar, {
            sounds,
            setSounds,
            setTitle,
            currentCategory,
            setCurrentCategory,
            setCurrentModal,
        }),
        createElement(SoundContainer, {
            sounds,
            currentCategory,
        }),
        currentModal
    )
}
