// Storing the input as a value for saving of file
const inputs = document.querySelectorAll("input, textarea")
inputs.forEach(input => {
    input.addEventListener("input", () => {
         input.setAttribute("value", input.value)
    })
})

// Oprava
const opravaCheckbox = document.getElementById("oprava-checkbox")
const opravaLabel = document.getElementById("oprava-label")
const opravaInput = document.getElementById("oprava-input")

opravaCheckbox.addEventListener("change", () => {
    if (opravaCheckbox.checked == 1) {
        opravaInput.style.opacity = 1
        opravaInput.style.pointerEvents = "all"
    } else {
        opravaInput.style.opacity = 0.5
        opravaInput.style.pointerEvents = "none"
    }
})

// Oprava
const rovnaniCheckbox = document.getElementById("rovnani-checkbox")
const rovnaniLabel = document.getElementById("rovnani-label")
const rovnaniInput = document.getElementById("rovnani-input")

rovnaniCheckbox.addEventListener("change", () => {
    if (rovnaniCheckbox.checked == 1) {
        rovnaniInput.style.opacity = 1
        rovnaniInput.style.pointerEvents = "all"
    } else {
        rovnaniInput.style.opacity = 0.5
        rovnaniInput.style.pointerEvents = "none"
    }
})

// Oprava
const likvidaceCheckbox = document.getElementById("likvidace-checkbox")
const likvidaceLabel = document.getElementById("likvidace-label")
const likvidaceInput = document.getElementById("likvidace-input")

likvidaceCheckbox.addEventListener("change", () => {
    if (likvidaceCheckbox.checked == 1) {
        likvidaceInput.style.opacity = 1
        likvidaceInput.style.pointerEvents = "all"
    } else {
        likvidaceInput.style.opacity = 0.5
        likvidaceInput.style.pointerEvents = "none"
    }
})

// Obnova pisma
const obnovaPismaCheckbox = document.getElementById("obnova-pisma")
const barvaLabel = document.getElementById("barva-label")
const barvaInput = document.getElementById("barva-input")

obnovaPismaCheckbox.addEventListener("change", () => {
    if (obnovaPismaCheckbox.checked == 1) {
        barvaLabel.style.opacity = 1
        barvaLabel.style.pointerEvents = "all"

        barvaInput.style.opacity = 1
        barvaInput.style.pointerEvents = "all"
    } else {
        barvaLabel.style.opacity = 0.5
        barvaLabel.style.pointerEvents = "none"

        barvaInput.style.opacity = 0.5
        barvaInput.style.pointerEvents = "none"
    }
})