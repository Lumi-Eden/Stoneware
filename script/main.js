let selectionLog = document.getElementById("selection-log")

let selectedMainCategory = false
let currentlySelectedCategory = ""
let nextCategory = ""

let selectionNahrobek = null
let selectionNahrobekMaterial = null
let selectionPismo = null

let selectionLampyVazy = []
let selectionLampyVazyMaterial = []
let selectionBarva = []

let selectionDoplnek = null
let selectionDoplnekMaterial = null
let selectionDoplnekLog = null

let selectionLampyVazyLog = null
let selectionLampyVazyBarva = null

// Forms
const nahrobkyFormsBtn = document.getElementById("nahrobky-forms-btn")
const sklodeskyFormsBtn = document.getElementById("sklodesky-forms-btn")

let formOverlay = document.querySelectorAll(".form-overlay")
let formOverlayNahrobky = document.getElementById("form-overlay-nahrobky")
let formOverlaySklodesky = document.getElementById("form-overlay-sklodesky")

let formNahrobky = document.getElementById("form-nahrobky")
let formSklodesky = document.getElementById("form-sklodesky")

let formNahrobkyTitle = document.getElementById("form-nahrobky-title")
let formNahrobkyNumber = 1
let formSklodeskyTitle = document.getElementById("form-sklodesky-title")
let formSklodeskyNumber = 1

let formExit = document.querySelectorAll(".form-exit")
let pridatDalsi = document.querySelectorAll(".pridat-dalsi")

let formTextCheck = document.querySelectorAll(".form-text-check")
let formZnakCheck = document.querySelectorAll(".form-znak-check")
let formFotoCheck = document.querySelectorAll(".form-foto-check")
let formLesteniCheck = document.getElementById("form-lesteni-check")

let formJmeno = document.getElementById("form-jmeno")
let formPrijmeni = document.getElementById("form-prijmeni")
let formNarozeni = document.getElementById("form-narozeni")
let formUmrti = document.getElementById("form-umrti")
let formText = document.getElementById("form-text")
let formZnak = document.getElementById("form-znak")
let formFoto = document.getElementById("form-foto")

// Logging
let selectionNahrobekLog

//
// Categories
let categories = document.querySelector(".categories")
let categoryId

const categoryData = {
    default: {
        images: ["img/polozky/desky/typ-A.png", "img/polozky/lampy-vazy/lampa-zula1.png", "img/polozky/doplnky/srdce.png", "img/polozky/foto/sklodeska.png", "img/polozky/oprava.jpg"],
        p: ["Náhrobky", "Lampy a Vázy", "Doplňky", "Sklodesky", "Oprava"]
    },

    nahrobky: {
        images: ["img/polozky/desky/typ-A.png", "img/polozky/desky/typ-B.png", "img/polozky/desky/typ-C.png", "img/polozky/desky/typ-D.png", "img/polozky/desky/typ-E.png", "img/polozky/desky/typ-F.png"],
        p: ["Typ-A", "Typ-B", "Typ-C", "Typ-D", "Typ-E", "Typ-F"]
    },
    materialy: {
        images: ["img/polozky/zula/antas.png", "img/polozky/zula/aurora.png", "img/polozky/zula/grey.png", "img/polozky/zula/impala-nero.png", "img/polozky/zula/labrador-blue-pearl.png", "img/polozky/zula/orion.png", "img/polozky/zula/paradiso.png", "img/polozky/zula/sardo.png", "img/polozky/zula/tarn.png", "img/polozky/zula/absolute-black.png"],
        p: ["Antas", "Aurora", "Grey", "Impala Nero", "Labrador Blue Pearl", "Orion", "Paradiso", "Sardo", "Tarn", "Absolute Black"]
    },
    pismo: {
        images: ["img/polozky/font/caslon-regular.png", "img/polozky/font/caslon-bold.png", "img/polozky/font/bangkok-regular.png", "img/polozky/font/monotype-corsiva.png", "img/polozky/font/alternate-g.png", "img/polozky/font/balantines-script.png", "img/polozky/font/balantines-bold.png"],
        p: []
    },

    lampyVazy: {
        images: ["img/polozky/lampy-vazy/lampa-zula1.png", "img/polozky/lampy-vazy/vaza-zula.png", "img/polozky/lampy-vazy/lampa-nerez1.png", "img/polozky/lampy-vazy/vaza-nerez1.png"],
        p: ["Žulové Lampy", "Žulové Vázy", "Nerezové Lampy", "Nerezové Vázy"]
    },

    barva: {
        images: ["img/polozky/lampy-vazy/barva/bila.jpg", "img/polozky/lampy-vazy/barva/cerna.jpg"],
        p: ["Bílá", "Černá"]
    },

    doplnky: {
        images: ["img/polozky/doplnky/srdce.png", "img/polozky/doplnky/kniha.png", "img/polozky/doplnky/misa.png", "img/polozky/doplnky/podstavec.png", ""],
        p: ["Srdce", "Knihy", "Mísy", "Podstavce", "Fotoskříňky"]
    }
};

//
// Category items
let item1 = document.getElementById("item1")
let item2 = document.getElementById("item2")
let item3 = document.getElementById("item3")
let item4 = document.getElementById("item4")
let item5 = document.getElementById("item5")
let item6 = document.getElementById("item6")
let item7 = document.getElementById("item7")
let item8 = document.getElementById("item8")
let item9 = document.getElementById("item9")

let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let p4 = document.getElementById("p4")
let p5 = document.getElementById("p5")
let p6 = document.getElementById("p6")
let p7 = document.getElementById("p7")
let p8 = document.getElementById("p8")
let p9 = document.getElementById("p9")

//
// Selectors
let selectorNahrobky = document.getElementById("selector-nahrobky")
let selectorLampyVazy = document.getElementById("selector-lampy-vazy")
let selectorDoplnky = document.getElementById("selector-doplnky")
let selectorSklodesky = document.getElementById("selector-sklodesky")


//
// Form buttons
nahrobkyFormsBtn.addEventListener("click", () => {
    formOverlayNahrobky.style.display = "block"
    if (!formNahrobky.hasAttribute('data-form-draggable')) {
        makeFormDraggable(formNahrobky, formOverlayNahrobky)
    }
})

sklodeskyFormsBtn.addEventListener("click", () => {
    formOverlaySklodesky.style.display = "block"
    if (!formSklodesky.hasAttribute('data-form-draggable')) {
        makeFormDraggable(formSklodesky, formOverlaySklodesky)
    }
})

// Get id of clicked category
document.querySelectorAll(".category-img").forEach((category) => {
    category.addEventListener("click", e => {
        let categoryId = e.currentTarget.id; // Keep in mind: can check element that triggered event
        console.log("Clicked item: ", categoryId);

        // Subcategory selection block
        if (currentlySelectedCategory != "") {
            console.log("Subcategory selected: ", currentlySelectedCategory)

            // Selection choices for nahrobky
            if (currentlySelectedCategory == "nahrobky") {

                switch (categoryId) {
                    case "item1":
                        selectionNahrobek = "Typ-A"
                        console.log("Náhrobek zvolen: ", selectionNahrobek)
                        break;
                    
                    case "item2":
                        selectionNahrobek = "Typ-B"
                        console.log("Náhrobek zvolen: ", selectionNahrobek)
                        break;
                        
                    case "item3":
                       selectionNahrobek = "Typ-C"
                       console.log("Náhrobek zvolen: ", selectionNahrobek)
                       break;                            
                       
                    case "item4":
                        selectionNahrobek = "Typ-D"
                        console.log("Náhrobek zvolen: ", selectionNahrobek)
                        break;                            
                        
                    case "item5":
                        selectionNahrobek = "Typ-E"
                        console.log("Náhrobek zvolen: ", selectionNahrobek)
                        break;                            
                        
                    case "item6":
                        selectionNahrobek = "Typ-F"
                        console.log("Náhrobek zvolen: ", selectionNahrobek)
                        break;
                }

                selectionNahrobekLog = document.createElement("span")
                selectionNahrobekLog.setAttribute("class", "log-item")

                let selectionNahrobekText = document.createElement("span")
                selectionNahrobekText.setAttribute("class", "log-text")
                selectionNahrobekText.innerText = selectionNahrobek
                selectionNahrobekLog.appendChild(selectionNahrobekText)

                selectionLog.appendChild(selectionNahrobekLog)

                delBtn(selectionNahrobekLog, selectionNahrobek)
                
                nextCategory = "materialy"
            }

            // Selection choices for materialy
            if (currentlySelectedCategory == "materialy") {

                const materialValues = {
                    item1: "Antas",
                    item2: "Aurora",
                    item3: "Grey",
                    item4: "Impala N.",
                    item5: "Labrador-BP.",
                    item6: "Orion",
                    item7: "Paradiso",
                    item8: "Sardo",
                    item9: "Tarn",
                    item10: "Abs. Black"
                }

                const selectedMaterial = materialValues[categoryId]
                if (selectedMaterial) {
                    if (selectedMainCategory === "doplnky") {
                        selectionDoplnekMaterial = selectedMaterial
                        console.log("Materiál pro doplňek zvolen: ", selectionDoplnekMaterial)
                        if (selectionDoplnekLog) appendSelectionText(selectionDoplnekLog, selectedMaterial)

                    } else if (selectedMainCategory === "lampy-vazy") {
                        selectionLampyVazyMaterial.push(selectedMaterial)
                        console.log("Material pro lampu/vázu zvolen: ", selectionLampyVazyMaterial)
                        if (selectionLampyVazyLog) appendSelectionText(selectionLampyVazyLog, selectedMaterial)

                    } else {
                        selectionNahrobekMaterial = selectedMaterial
                        console.log("Materiál pro náhrobek zvolen: ", selectionNahrobekMaterial)
                        if (selectionNahrobekLog) appendSelectionText(selectionNahrobekLog, selectedMaterial)
                    }

                    if (selectedMainCategory === "nahrobky") {
                        nextCategory = "pismo"
                    } else {
                        nextCategory = "main-selection"
                    }
                }
            }

            // Selection choices for Písmo
            if (currentlySelectedCategory == "pismo") {

                const pismoValues = {
                    item1: "Caslon Regular",
                    item2: "Caslon Bold",
                    item3: "Bangkok Regular",
                    item4: "Monotype Corsiva",
                    item5: "Alternate Gothic",
                    item6: "Balantines Serif",
                    item7: "Balantines Bold",
                }

                const selectedPismo = pismoValues[categoryId]
                if (selectedPismo) {
                    selectionPismo = selectedPismo
                    console.log("Písmo pro náhrobek zvoleno: ", selectionPismo)
                    if (selectionNahrobekLog) appendSelectionText(selectionNahrobekLog, selectedPismo)
                }

                formOverlayNahrobky.style.display = "block"
                // Make original form draggable if not already initialized
                if (!formNahrobky.hasAttribute('data-form-draggable')) {
                    makeFormDraggable(formNahrobky, formOverlayNahrobky)
                }
                
                nextCategory = "main-selection"
            }

            // Selection choices for Lampy a Vázy
            if (currentlySelectedCategory == "lampy-vazy") {

                switch (categoryId) {
                    case "item1":
                        selectionLampyVazy.push("Žulová-Lampa")
                        console.log("Lampa/Váza zvolena: ", selectionLampyVazy)
                        break;
                    
                    case "item2":
                        selectionLampyVazy.push("Žulová-Váza")
                        console.log("Lampa/Váza zvolena: ", selectionLampyVazy)
                        break;
                        
                    case "item3":
                       selectionLampyVazy.push("Nerezová-Lampa")
                       console.log("Lampa/Váza zvolena: ", selectionLampyVazy)
                       break;                            
                       
                    case "item4":
                        selectionLampyVazy.push("Nerezová-Váza")
                        console.log("Lampa/Váza zvolena: ", selectionLampyVazy)
                        break; 
                }

                if (selectionLampyVazy.length > 0) {
                    let latest = selectionLampyVazy[selectionLampyVazy.length - 1]

                    if (!selectionLampyVazyLog) {
                        selectionLampyVazyLog = document.createElement("span")
                        selectionLampyVazyLog.setAttribute("class", "log-item")

                        let textNode = document.createElement("span")
                        textNode.setAttribute("class", "log-text")
                        textNode.innerText = latest
                        selectionLampyVazyLog.appendChild(textNode)

                        selectionLog.appendChild(selectionLampyVazyLog)
                        delBtn(selectionLampyVazyLog, latest)
                    } else {
                        appendSelectionText(selectionLampyVazyLog, latest)
                    }
                }

                if (selectionLampyVazy.length > 0 && selectionLampyVazy[selectionLampyVazy.length - 1].includes("Žulová")) {
                    nextCategory = "materialy"
                } else {
                    nextCategory = "barva"
                }
            }

            if (currentlySelectedCategory == "barva") {

                switch (categoryId) {
                    case "item1":
                        selectionBarva.push("Bílá")
                        if (selectionLampyVazyLog) appendSelectionText(selectionLampyVazyLog, "Bílá")
                        console.log("Barva zvolena: ", selectionBarva)
                        break;
                    
                    case "item2":
                        selectionBarva.push("Černá")
                        if (selectionLampyVazyLog) appendSelectionText(selectionLampyVazyLog, "Černá")
                        console.log("Barva zvolena: ", selectionBarva)
                        break;
                }

                nextCategory = "main-selection"
            }


            // Selection choices for Doplňky
            if (currentlySelectedCategory == "doplnky") {
                
                switch (categoryId) {
                    case "item1":
                        selectionDoplnek = "Srdce"
                        console.log("Doplňek zvolen: ", selectionDoplnek)
                        break;
                    
                    case "item2":
                        selectionDoplnek = "Kniha"
                        console.log("Doplňek zvolen: ", selectionDoplnek)
                        break;
                        
                    case "item3":
                       selectionDoplnek = "Misa"
                       console.log("Doplňek zvolen: ", selectionDoplnek)
                       break;                            
                       
                    case "item4":
                        selectionDoplnek = "Podstavec"
                        console.log("Doplňek zvolen: ", selectionDoplnek)
                        break;                            
                        
                    case "item5":
                        selectionDoplnek = "Fotoskříňka"
                        console.log("Doplňek zvolen: ", selectionDoplnek)
                        break; 
                }

                selectionDoplnekLog = document.createElement("span")
                selectionDoplnekLog.setAttribute("class", "log-item")

                let selectionDoplnekText = document.createElement("span")
                selectionDoplnekText.setAttribute("class", "log-text")
                selectionDoplnekText.innerText = selectionDoplnek
                selectionDoplnekLog.appendChild(selectionDoplnekText)

                selectionLog.appendChild(selectionDoplnekLog)

                delBtn(selectionDoplnekLog, selectionDoplnek)

                if (selectionDoplnek != "Fotoskříňka") {
                    selectedMainCategory = "doplnky"
                    nextCategory = "materialy"
                } else {
                    nextCategory = "main-selection"
                }
            }
        }
            
        // Show category Náhrobky
        if (categoryId == "item1" && currentlySelectedCategory != "nahrobky" && !selectedMainCategory && nextCategory != "main-selection") {
            console.log("Category 'Náhrobky' loading...")
            currentlySelectedCategory = "nahrobky"
            selectedMainCategory = "nahrobky"

            updateDisplay("nahrobky")

            categoryId = ""
        }

        // Show category Lampy Vázy
        if (categoryId == "item2" && currentlySelectedCategory != "lampy-vazy" && !selectedMainCategory && nextCategory != "main-selection") {
            console.log("Category 'Lampy Vázy' loading...")
            currentlySelectedCategory = "lampy-vazy"
            selectedMainCategory = "lampy-vazy"

            updateDisplay("lampyVazy")

            categoryId = ""
        }

        // Show category Doplňky
        if (categoryId == "item3" && currentlySelectedCategory != "doplnky" && !selectedMainCategory && nextCategory != "main-selection") {
            console.log("Category 'Doplňky' loading...")
            currentlySelectedCategory = "doplnky"
            selectedMainCategory = "doplnky"

            updateDisplay("doplnky")

            categoryId = ""
        }

        // Show category Materiály
        if (nextCategory == "materialy") {
            console.log("Category 'Materiály' loading...")
            currentlySelectedCategory = "materialy"

            updateDisplay("materialy")

            categoryId = ""
        }

        // Show category Písmo
        if (nextCategory == "pismo" && selectionNahrobekMaterial) {
            console.log("Category 'Písmo' loading...")
            currentlySelectedCategory = "pismo"

            // Hide remnants of prev category
            item8.src = ""; item9.src = ""; item10.src = ""
            p8.textContent = ""; p9.textContent = ""; p10.textContent = ""

            updateDisplay("pismo")

            categoryId = ""
        }

        // Show category Barva
        if (nextCategory == "barva" && selectionLampyVazy) {
            console.log("Category 'Barvy' loading...")
            currentlySelectedCategory = "barva"

            // Hide remnants of prev category
            item3.src = ""; item4.src = "";
            p3.textContent = ""; p4.textContent = "";

            updateDisplay("barva")
        }

        // On click - Sklodesky
        if (categoryId == "item4" && !selectedMainCategory) {
            formOverlaySklodesky.style.display = "block"
            // Make original form draggable if not already initialized
            if (!formSklodesky.hasAttribute('data-form-draggable')) {
                makeFormDraggable(formSklodesky, formOverlaySklodesky)
            }
        }

        // On click - Oprava
        if (categoryId == "item5" && !selectedMainCategory) {
            const opravaPat = `file://${location.pathname.replace(/script[\\\/]main\.js.*/, 'oprava.html')}`;
                if (typeof dataString !== 'undefined' && dataString) {
                    window.open(`oprava.html?data=${dataString}`, "_blank", "width=595");
                } else {
                    window.open("oprava.html", "_blank", "width=595");
                }
        }
        // Proceed back to main selection
        if (nextCategory == "main-selection") {
            restoreMainSelection();
        }
    });

});

// ------------
// Forms
// ------------

formExit.forEach((exitBtn) => {
    exitBtn.addEventListener("click", () => {
        formOverlayNahrobky.style.display = "none"
        formOverlaySklodesky.style.display = "none"
    })
})


// Add new form
pridatDalsi.forEach((pridatDalsiBtn) => {
    pridatDalsiBtn.addEventListener("click", () => {
        console.log("Adding another form...")

        // --- NAHROBKY ---
        if (formOverlayNahrobky && formOverlayNahrobky.style.display == "block") { // Náhrobky cloning
            let formNahrobkyClone = formNahrobky.cloneNode(true)
            
            // NEW CASCADE LOGIC
            const rect = formNahrobky.getBoundingClientRect()
            const parentRect = formOverlayNahrobky.getBoundingClientRect()

            const offset = 30 * (formNahrobkyNumber > 0 ? formNahrobkyNumber : 1)
            
            formNahrobkyClone.style.left = (rect.left - parentRect.left + formOverlayNahrobky.scrollLeft + offset) + "px"
            formNahrobkyClone.style.top  = (rect.top  - parentRect.top  + formOverlayNahrobky.scrollTop  + offset - 400) + "px"
            // -------------------------

            formOverlayNahrobky.appendChild(formNahrobkyClone)

            // Update the form clone title
            formNahrobkyNumber += 1
            let formNahrobkyTitleClone = formNahrobkyClone.querySelector("#form-nahrobky-title")
            if (formNahrobkyTitleClone) formNahrobkyTitleClone.innerText = "Náhrobek " + formNahrobkyNumber

            // Remove values and selection from copied node
            formNahrobkyClone.querySelectorAll("button").forEach(btn => {
                btn.style.display = "none"
            });

            formNahrobkyClone.querySelectorAll("input, textarea").forEach(el => {
                if (el.type === "checkbox" || el.type === "radio") el.checked = false
                else el.value = ""
            })
            formNahrobkyClone.querySelectorAll("select").forEach(s => s.selectedIndex = 0)
            formNahrobkyClone.querySelectorAll(".log-text").forEach(el => el.innerText = "")

            // Remove duplicate ids and drag attribute
            formNahrobkyClone.querySelectorAll("[id]").forEach(el => {
                if (el.id !== "form-nahrobky-title") el.removeAttribute("id")
            })
            formNahrobkyClone.removeAttribute('data-form-draggable')

            // Setup drag for new form
            makeFormDraggable(formNahrobkyClone, formOverlayNahrobky)
            
            // CLEAR TRANSFORM
            // makeFormDraggable applies a centering transform by default
            // We must clear it so our 30px offset works
            formNahrobkyClone.style.transform = 'none'
            // -----------------------

            console.log("Added new form - Náhrobky")


        // --- SKLODESKY ---
        } else if (formOverlaySklodesky && formOverlaySklodesky.style.display == "block") { // Sklodesky cloning
            let formSklodeskyClone = formSklodesky.cloneNode(true)
            
            // --- NEW CASCADE LOGIC ---
            const rect = formSklodesky.getBoundingClientRect()
            const parentRect = formOverlaySklodesky.getBoundingClientRect()
            
            // We can multiply the offset by the SklodeskyNumber so multiple clicks 
            // create a continuous diagonal staircase effect!
            const offset = 30 * (formSklodeskyNumber > 0 ? formSklodeskyNumber : 1)
            
            formSklodeskyClone.style.left = (rect.left - parentRect.left + formOverlaySklodesky.scrollLeft + offset) + "px"
            formSklodeskyClone.style.top  = (rect.top  - parentRect.top  + formOverlaySklodesky.scrollTop  + offset - 350) + "px"
            // -------------------------

            formOverlaySklodesky.appendChild(formSklodeskyClone)

            // Update the form clone title
            formSklodeskyNumber += 1
            let formSklodeskyTitleClone = formSklodeskyClone.querySelector("#form-sklodesky-title")
            if (formSklodeskyTitleClone) formSklodeskyTitleClone.innerText = "Sklodeska " + formSklodeskyNumber

            // Remove values and selection from copied node
            formSklodeskyClone.querySelectorAll("button").forEach(btn => {
                btn.style.display = "none"
            });
            
            formSklodeskyClone.querySelectorAll("input, textarea").forEach(el => {
                if (el.type === "checkbox" || el.type === "radio") el.checked = false
                else el.value = ""
            })
            formSklodeskyClone.querySelectorAll("select").forEach(s => s.selectedIndex = 0)
            formSklodeskyClone.querySelectorAll(".log-text").forEach(el => el.innerText = "")

            // Remove duplicate ids and drag attribute
            formSklodeskyClone.querySelectorAll("[id]").forEach(el => {
                if (el.id !== "form-sklodesky-title") el.removeAttribute("id")
            })
            formSklodeskyClone.removeAttribute('data-form-draggable')

            // Setup drag for new form
            makeFormDraggable(formSklodeskyClone, formOverlaySklodesky)
            
            // --- CLEAR TRANSFORM ---
            formSklodeskyClone.style.transform = 'none'
            // -----------------------

            console.log("Added new form - Sklodesky")
        }
    })
})

// ------------
// Functions
// ------------ 

// Make individual forms draggable by their handle
function makeFormDraggable(form, overlay) {
    const handle = form.querySelector('.handle')
    if (!handle || form.hasAttribute('data-form-draggable')) return

    let isDragging = false
    let lastX = 0
    let lastY = 0

    form.style.position = 'absolute'
    if (!form.style.left) form.style.left = '50%'
    if (!form.style.top) form.style.top = '50%'
    form.style.transform = 'translate(-60%, -160%)'

    handle.style.cursor = 'grab'
    handle.style.userSelect = 'none'

    const onMouseDown = (e) => {
        if (e.target.closest('.form-exit')) return
        isDragging = true

        if (form.style.transform !== 'none') {
            const formRect = form.getBoundingClientRect()
            
            // 1. Anchor to the TRUE positioning parent, fallback to overlay
            const parent = form.offsetParent || overlay
            const parentRect = parent.getBoundingClientRect()
            
            // 2. Grab current margins
            const computedStyle = window.getComputedStyle(form)
            const marginTop = parseFloat(computedStyle.marginTop) || 0
            const marginLeft = parseFloat(computedStyle.marginLeft) || 0

            // 3. Set exact pixels: 
            // Bounding box difference - Parent Borders + Parent Scroll - Form Margins
            form.style.left = (formRect.left - parentRect.left - parent.clientLeft + parent.scrollLeft - marginLeft) + 'px'
            form.style.top  = (formRect.top  - parentRect.top  - parent.clientTop  + parent.scrollTop  - marginTop)  + 'px'
            
            form.style.transform = 'none'
        }
        
        lastX = e.clientX
        lastY = e.clientY
        handle.style.cursor = 'grabbing'
        e.preventDefault()
    }

    const onMouseMove = (e) => {
        if (!isDragging) return

        form.style.left = (parseFloat(form.style.left) + e.clientX - lastX) + 'px'
        form.style.top  = (parseFloat(form.style.top)  + e.clientY - lastY) + 'px'

        lastX = e.clientX
        lastY = e.clientY
    }

    const onMouseUp = () => {
        if (isDragging) {
            isDragging = false
            handle.style.cursor = 'grab'
        }
    }

    handle.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)

    form.setAttribute('data-form-draggable', 'true')
}


function updateDisplay(cat) {
    categoryData[cat].images.forEach((src, index) => {
        document.getElementById(`item${index + 1}`).src = src;
        document.getElementById(`p${index + 1}`).textContent = categoryData[cat].p[index];
    })
}

function appendSelectionText(logItem, text) {
    if (!logItem) return
    let textNode = logItem.querySelector(".log-text")
    if (!textNode) return
    textNode.innerText += ", " + text
}

function restoreMainSelection() {
    selectedMainCategory = null
    currentlySelectedCategory = ""
    nextCategory = ""
    // Restore main selection
    updateDisplay("default")
    
    // Hide remnants of past categories
    item5.src=""; item6.src=""; item7.src=""; item8.src=""; item9.src=""; item10.src="";
    p5.textContent=""; p6.textContent=""; p7.textContent=""; p8.textContent=""; p9.textContent=""; p10.textContent="";
    
    categoryId = ""
}

function clearSelection() {
    console.log("Clearing selection...")
    selectionDoplnek = null
    selectionDoplnekMaterial = null
    selectionDoplnekLog = null
    selectionLampyVazy = []
    selectionLampyVazyMaterial = []
    selectionLampyVazyLog = null
    selectionLampyVazyBarva = null
    selectionNahrobek = null
    selectionNahrobekMaterial = null
    selectionPismo = null
    selectionNahrobekLog = null

    const allForms = document.querySelectorAll("#form-overlay-nahrobky form, #form-overlay-sklodesky form");

    allForms.forEach(form => {
        form.reset(); // This clears text inputs and unchecks checkboxes
    });

    console.log("Forms and selection cleared!")

    restoreMainSelection();
}

function searchFilter(e) {
    let searchTerm = e.target.value.toLowerCase()
    let allCategories = document.querySelectorAll(".category")

    allCategories.forEach((category) => {
        let categoryText = category.querySelector("p").innerText.toLowerCase()

        if (categoryText.includes(searchTerm)) {
            category.style.display = "block"
        } else {
            category.style.display = "none"
        }
    })
}

function delBtn(item, selection) {
    let delBtn = document.createElement("span")
    delBtn.setAttribute("class", "del-btn")
    delBtn.innerText = "-"
    item.appendChild(delBtn)
    let i = 0

    delBtn.addEventListener("click", () => {
        // Check which selection type matches and clear accordingly
        if (selection === selectionNahrobek) {
            selectionNahrobek = null
            console.log("selection Náhrobek cleared")
        } else if (selection === selectionDoplnek) {
            selectionDoplnek = null
            console.log("selection Doplňek cleared")
        } else if (selection === selectionDoplnekMaterial) {
            selectionDoplnekMaterial = null
            console.log("selection Doplňek Material cleared")
        } else if (selection === selectionNahrobekMaterial) {
            selectionNahrobekMaterial = null
            console.log("selection Náhrobek Material cleared")
        } else if (selection === selectionPismo) {
            selectionPismo = null
            console.log("selection Písmo cleared")
        } else if (selectionLampyVazy.includes(selection)) {
            selectionLampyVazy.splice(selectionLampyVazy.indexOf(selection), 1)
            console.log("selection Lampy Vázy cleared")
        } else if (selectionLampyVazyMaterial.includes(selection)) {
            selectionLampyVazyMaterial.splice(selectionLampyVazyMaterial.indexOf(selection), 1)
            console.log("selection Lampy Vázy Material cleared")
        } else if (selection === selectionBarva) {
            selectionBarva = []
            console.log("selection Barva cleared")
        }
        
        delBtn.remove();
        item.remove()
    })
}

function enableFormInput(checkbox) {
    // Find the row containing this checkbox, then find the text input in that row
    const row = checkbox.closest('.row')
    const input = row.querySelector('input[type="text"]')
    
    console.log("Getting check state...")
    if (checkbox.checked) {
        input.style.pointerEvents = "all"
        input.style.opacity = 1
        console.log("Form input enabled")
    } else {
        input.style.pointerEvents = "none"
        input.style.opacity = 0.5
        console.log("Form input disabled")
    }
}

// -------------
// PRINT
// -------------

const printRedirect = document.getElementById("print-btn")

printRedirect.addEventListener("click", () => {
    // Collect all selection data
    const printData = {
        nahrobky: selectionNahrobek,
        nahrobkyMaterial: selectionNahrobekMaterial,
        pismo: selectionPismo,
        lampyVazy: selectionLampyVazy,
        lampyVazyMaterial: selectionLampyVazyMaterial,
        barva: selectionBarva,
        doplnek: selectionDoplnek,
        doplnekMaterial: selectionDoplnekMaterial,
        forms: {
            nahrobky: [],
            sklodesky: []
        }
    }

    // Collect all nahrobky forms
    const nahrobkyForms = document.querySelectorAll("#form-overlay-nahrobky form")
    nahrobkyForms.forEach((form) => {
        const rows = form.querySelectorAll(".row")
        const formData = {
            jmeno:    rows[0]?.querySelector("input")?.value || "",
            prijmeni: rows[1]?.querySelector("input")?.value || "",
            narozeni: rows[2]?.querySelector("input")?.value || "",
            umrti:    rows[3]?.querySelector("input")?.value || "",
            text:     form.querySelector(".form-text")?.value || "",
            znak:     form.querySelector(".form-znak")?.value || "",
            foto:     form.querySelector(".form-foto")?.value || "",
            lesteni:  rows[7]?.querySelector("input[type='checkbox']")?.checked || false,
            chodnicky: rows[8]?.querySelector("input[type='checkbox']")?.checked || false
        }
        printData.forms.nahrobky.push(formData)
    })

    // Collect all sklodesky forms
    const sklodeskuForms = document.querySelectorAll("#form-overlay-sklodesky form")
    sklodeskuForms.forEach((form) => {
        const rows = form.querySelectorAll(".row")
        // Robustly find the 'rozmer' input: prefer an input with id containing 'rozmer',
        // otherwise search rows for a label that includes the word 'Rozměr'.
        let rozmerVal = "";
        const byId = form.querySelector("input[id*='rozmer']")
        if (byId) {
            rozmerVal = byId.value || "";
        } else {
            for (const r of rows) {
                const lab = r.querySelector('label')
                if (lab && /rozm/i.test(lab.textContent)) {
                    const inp = r.querySelector('input')
                    if (inp) { rozmerVal = inp.value || ""; break }
                }
            }
        }

        const formData = {
            jmeno:    rows[0]?.querySelector("input")?.value || "",
            prijmeni: rows[1]?.querySelector("input")?.value || "",
            narozeni: rows[2]?.querySelector("input")?.value || "",
            umrti:    rows[3]?.querySelector("input")?.value || "",
            rozmer:   rozmerVal,
            text:     form.querySelector(".form-text")?.value || "",
            znak:     form.querySelector(".form-znak")?.value || "",
            foto:     form.querySelector(".form-foto")?.value || ""
        }
        printData.forms.sklodesky.push(formData)
    })

    // --- IMPORTANT ://file workaround ----
    const dataString = encodeURIComponent(JSON.stringify(printData));
    window.open(`../TKamenictvi/print.html?data=${dataString}`, "_blank", "width=595");
})

