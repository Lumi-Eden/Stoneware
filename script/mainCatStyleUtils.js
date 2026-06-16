// Category defs
let categoriesStyling = document.querySelectorAll(".category");


// Styling

addEventListener("DOMContentLoaded", () => {

    // Check in each category
    categoriesStyling.forEach(category => {
        // Get the class within category parent
        let categoryImgStyling = category.querySelector(".category-img");
        let imgStyleBox = category.querySelector(".img-style-box");

        // If src isnt empty
        if (categoryImgStyling && categoryImgStyling.getAttribute("src") != "") {
            category.style.backgroundColor = "#c0c0c01c";
            category.style.boxShadow = "8px 8px #c0c0c09d"

            category.style.padding = "30px 10px 10px 10px";
            imgStyleBox.style.padding = "10px 0";
        }
        
    });

})
