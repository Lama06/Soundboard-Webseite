import { createElement } from "react"
import { Button } from "./Button"
import { CategoryLinkContainer } from "./CategoryLinkContainer"
import { LoadSoundboardModal } from "./LoadSoundboardModal"
import "./Sidebar.css"
import { openUrl } from "./Util"

export function Sidebar({
    sounds,
    currentCategory,
    setCurrentCategory,
    setCurrentModal,
    setSounds,
    setTitle,
}) {
    return createElement(
        "div",
        {
            className: "sidebar",
        },
        createElement(
            "div",
            {
                className: "buttons",
            },
            createElement(
                Button,
                {
                    onClick: () =>
                        setCurrentModal(
                            createElement(LoadSoundboardModal, {
                                setCurrentModal,
                                setSounds,
                                setTitle,
                            })
                        ),
                },
                "Soundboard laden"
            ),
            createElement(
                Button,
                {
                    onClick: () =>
                        openUrl("https://github.com/Lama06/Soundboard Creator"),
                },
                "Soundboard erstellen"
            ),
            createElement(
                Button,
                {
                    onClick: () =>
                        openUrl("https://github.com/Lama06/Soundboard Website"),
                },
                "Github"
            )
        ),
        createElement(CategoryLinkContainer, {
            sounds,
            currentCategory,
            setCurrentCategory,
        })
    )
}
