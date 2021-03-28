import { createElement } from "react"
import "./Button.css"

export function Button(props) {
    return createElement(
        "div",
        {
            className: "button",
            ...props,
        },
        props.children
    )
}
