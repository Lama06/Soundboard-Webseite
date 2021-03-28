import { createElement } from "react"
import { CategoryLink } from "./CategoryLink"
import { getCategoryNames } from "./Util"

/**
 * Ein Container, der für jede Kategorie des Soundboardes einen CategoryLink enthält
 */
export function CategoryLinkContainer({
    sounds,
    currentCategory,
    setCurrentCategory,
}) {
    return createElement(
        "div",
        {
            className: "category-link-container",
        },
        getCategoryNames(sounds).map((name) =>
            createElement(CategoryLink, {
                key: name,
                name,
                currentCategory,
                setCurrentCategory,
            })
        )
    )
}
