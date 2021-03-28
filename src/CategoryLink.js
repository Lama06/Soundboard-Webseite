import { createElement } from "react"
import "./CategoryLink.css"

/**
 * Ein Link, der bei einem Klick eine Kategorie des Soundboardes öffnet
 *
 * @param name der Name der Kategorie, die der Sound öffnet
 */
export function CategoryLink({ name, currentCategory, setCurrentCategory }) {
    function handleClick() {
        if (currentCategory != name) {
            setCurrentCategory(name)
        }
    }

    return createElement(
        "div",
        {
            className:
                "category-link" + (name == currentCategory ? " selected" : ""),
            onClick: handleClick,
        },
        name
    )
}
