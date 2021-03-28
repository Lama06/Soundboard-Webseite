import { createElement } from "react"
import "./Title.css"

export function Title({ title }) {
    return createElement(
        "h1",
        {
            className: "title",
        },
        title
    )
}
