import { createElement, useState } from "react"
import { Button } from "./Button"
import { Modal } from "./Modal"
import { loadSoundboard } from "./Util"

export function LoadSoundboardModal({ setCurrentModal, setTitle, setSounds }) {
    const [url, setUrl] = useState("./soundboard.json")

    async function handleSubmit() {
        try {
            await loadSoundboard(setTitle, setSounds, url)
            setCurrentModal(null)
        } catch (err) {
            alert("Fehler beim Laden des Soundboardes")
        }
    }

    return createElement(
        Modal,
        { setCurrentModal },
        createElement(
            "h1",
            {
                className: "modal-heading",
            },
            "Soundboard laden"
        ),
        createElement(
            "div",
            {
                className: "modal-box",
            },
            "Gib die URL des Soundboardes an, das geladen werden soll:"
        ),
        createElement(
            "div",
            {
                className: "modal-box",
            },
            createElement("input", {
                type: "text",
                value: url,
                onInput: (event) => setUrl(event.target.value),
            })
        ),
        createElement(
            "div",
            {
                className: "modal-box",
            },
            createElement(
                Button,
                {
                    onClick: handleSubmit,
                },
                "Soundboard laden"
            )
        ),
        createElement(
            "div",
            {
                className: "modal-box",
            },
            createElement(
                Button,
                {
                    onClick: () => setCurrentModal(null),
                },
                "Abbrechen"
            )
        )
    )
}
