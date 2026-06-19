// Category defs
let categoriesStyling = document.querySelectorAll(".category");

// Apply styling to category if it has content
function applyCategoryStyle(category) {
    let categoryImgStyling = category.querySelector(".category-img");
    let paragraphElement = category.querySelector("p");
    let imgStyleBox = category.querySelector(".img-style-box");

    // Check if image has src and paragraph has content
    const hasImage = categoryImgStyling && categoryImgStyling.getAttribute("src") && categoryImgStyling.getAttribute("src") !== "";
    const hasText = paragraphElement && paragraphElement.textContent && paragraphElement.textContent.trim() !== "";

    if (hasImage && hasText) {
        category.style.backgroundColor = "#c0c0c01c";
        category.style.boxShadow = "8px 8px #c0c0c09d";
        category.style.padding = "30px 10px 10px 10px";
        imgStyleBox.style.padding = "10px 0";
    } else {
        // Remove styling if empty
        category.style.backgroundColor = "";
        category.style.boxShadow = "";
        category.style.padding = "";
        imgStyleBox.style.padding = "";
    }
}

// Styling

addEventListener("DOMContentLoaded", () => {
    categoriesStyling.forEach(category => {
        applyCategoryStyle(category);
    });

    // Watch for changes using MutationObserver
    categoriesStyling.forEach(category => {
        const observer = new MutationObserver(() => {
            applyCategoryStyle(category);
        });

        observer.observe(category, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: true,
            attributeFilter: ["src"]
        });
    });
})
