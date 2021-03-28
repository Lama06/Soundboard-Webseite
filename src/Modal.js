import { createElement } from "react"
import "./Modal.css"

export function Modal({ children, setCurrentModal }) {
    function handleClose() {
        setCurrentModal(null)
    }

    return createElement(
        "div",
        {
            className: "modal",
        },
        createElement("div", {
            className: "modal-page-overlay",
            onClick: handleClose,
        }),
        createElement(
            "div",
            {
                className: "modal-content",
            },
            children
        )
    )
}
