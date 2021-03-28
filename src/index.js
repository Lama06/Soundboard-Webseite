import { createElement } from "react"
import { render } from "react-dom"
import { Soundboard } from "./Soundboard"

function main() {
    const root = document.createElement("div")
    root.classList.add("root")
    document.body.appendChild(root)

    render(createElement(Soundboard), root)
}

main()
