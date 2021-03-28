import { createElement } from "react"
import { Title } from "./Title"
import "./Header.css"

export function Header({ title }) {
    return createElement(
        "div",
        {
            className: "header",
        },
        createElement(Title, {
            title,
        })
    )
}
