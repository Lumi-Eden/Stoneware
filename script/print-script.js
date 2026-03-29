// Storing the input as a value for saving of file
const inputs = document.querySelectorAll("input, textarea")
inputs.forEach(input => {
    input.addEventListener("input", () => {
         input.setAttribute("value", input.value)
    })
})

// 1. Helper to safely get data from the URL
function getPrintDataFromURL() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const rawData = urlParams.get('data');
        
        if (!rawData) {
            console.warn("No data found in URL.");
            return null;
        }
        
        // Decode the URI component and parse the JSON
        return JSON.parse(decodeURIComponent(rawData));
    } catch (error) {
        console.error("Error parsing print data:", error);
        return null;
    }
}
function row(label, value) {
    if (!value) return "";
    return `<p><span class="form-label">${label}</span>${value}</p>`;
}


function buildNahrobkyForm(f, index) {
    const title = index === 0 ? "Náhrobek 1" : `Náhrobek ${index + 1}`;
    const name = [f.jmeno, f.prijmeni].filter(Boolean).join(" ");
    const dates = [f.narozeni, f.umrti].filter(Boolean).join(" – ");
    let html = `<div class="form-block"><strong>${title}</strong>`;
    html += row("Jméno:", name);
    html += row("Data:", dates);
    html += row("Text:", f.text);
    html += row("Znak:", f.znak);
    html += row("Foto:", f.foto);
    if (f.lesteni) html += `<p><span class="form-label">Leštěné zezadu:</span>✓</p>`;
    if (f.chodnicky) html += `<p><span class="form-label">Chodníčky:</span>✓</p>`;
    html += `</div>`;
    return html;
}

function buildSklodeskyForm(f, index) {
    const title = index === 0 ? "Sklodeska 1" : `Sklodeska ${index + 1}`;
    const name = [f.jmeno, f.prijmeni].filter(Boolean).join(" ");
    const dates = [f.narozeni, f.umrti].filter(Boolean).join(" – ");
    const rozmer = (f.rozmer || "").toString().trim();
    let html = `<div class="form-block"><strong>${title}</strong>`;
    html += row("Jméno:", name);
    html += row("Data:", dates);
    html += row("Rozměr:", rozmer)
    html += row("Text:", f.text);
    html += row("Znak:", f.znak);
    html += row("Foto:", f.foto);
    html += `</div>`;
    return html;
}

function buildSchodyForm(f, index) {
    const title = index === 0 ? "Schody 1" : `Schody ${index + 1}`;
    let html = `<div class="form-block"><strong>${title}</strong>`;
    
    if (f.rozmerStupnice) html += row("Rozměr stupnice:", f.rozmerStupnice);
    if (f.rozmerPodstupnice) html += row("Rozměr podstupnice:", f.rozmerPodstupnice);
    
    html += `</div>`;
    return html;
}

function buildParapetyForm(f, index) {
    const title = index === 0 ? "Parapet 1" : `Parapet ${index + 1}`;
    let html = `<div class="form-block"><strong>${title}</strong>`;
    
    if (f.rozmer) html += row("Rozměr:", f.rozmer);
    if (f.tloustka) html += row("Tloušťka:", f.tloustka);
    if (f.okapnicka) html += `<p><span class="form-label">Okapnička:</span>✓</p>`;
    
    html += `</div>`;
    return html;
}


function loadPrintData() {
    // CHANGED: Now getting data from URL instead of LocalStorage
    const d = getPrintDataFromURL();
    if (!d) return;
    // --- Náhrobky header (typ + materiál) ---
    if (d.nahrobky) {
        let text = d.nahrobky;
        if (d.nahrobkyMaterial) text += " – " + d.nahrobkyMaterial;
        document.getElementById("nahrobky-imported").textContent = text;
    }
    
    // --- Schody materiál ---
    const schodyImportedEl = document.getElementById("schody-imported");
    if (schodyImportedEl && d.schody) {
        // Gather the materials, remove empty ones, and remove duplicates
        const materials = [d.schody.stupnice, d.schody.podstupnice].filter(Boolean);
        schodyImportedEl.textContent = [...new Set(materials)].join(", ");
    }

    // --- Parapety materiál ---
    const parapetyImportedEl = document.getElementById("parapety-imported");
    if (parapetyImportedEl && d.parapety) {
        parapetyImportedEl.textContent = d.parapety;
    }
    
    // --- Schody form data ---
    const schodyFormsEl = document.getElementById("schody-forms");
    if (schodyFormsEl && d.forms && d.forms.schody && d.forms.schody.length > 0) {
        schodyFormsEl.innerHTML = d.forms.schody
            .map((f, i) => buildSchodyForm(f, i))
            .join("");
    }

    // --- Parapety form data ---
    const parapetyFormsEl = document.getElementById("parapety-forms");
    if (parapetyFormsEl && d.forms && d.forms.parapety && d.forms.parapety.length > 0) {
        parapetyFormsEl.innerHTML = d.forms.parapety
            .map((f, i) => buildParapetyForm(f, i))
            .join("");
    }

    // --- Náhrobky form data ---
    const nahrobkyFormsEl = document.getElementById("nahrobky-forms");
    if (d.forms && d.forms.nahrobky && d.forms.nahrobky.length > 0) {
        nahrobkyFormsEl.innerHTML = d.forms.nahrobky
            .map((f, i) => buildNahrobkyForm(f, i))
            .join("");
    }

    // --- Sklodesky form data ---
    const sklodeskuFormsEl = document.getElementById("sklodesky-forms");
    if (d.forms && d.forms.sklodesky && d.forms.sklodesky.length > 0) {
        sklodeskuFormsEl.innerHTML = d.forms.sklodesky
            .map((f, i) => buildSklodeskyForm(f, i))
            .join("");
    }

    // --- Doplňky ---
    const doplnkyEl = document.getElementById("doplnky-imported");
    if (d.doplnek) {
        const items = Array.isArray(d.doplnek) ? d.doplnek : [d.doplnek];
        const materials = Array.isArray(d.doplnekMaterial)
            ? d.doplnekMaterial
            : (d.doplnekMaterial ? [d.doplnekMaterial] : []);
        doplnkyEl.innerHTML = items.map((item, i) => {
            let line = item;
            if (materials[i]) line += " – " + materials[i];
            return `<div class="doplnek-entry">${line}</div>`;
        }).join("");
    }

    // --- Lampy a Vázy ---
    const lvEl = document.getElementById("lampy-vazy-imported");
    if (d.lampyVazy && d.lampyVazy.length > 0) {
        lvEl.innerHTML = d.lampyVazy.map((item, i) => {
            let line = item;
            if (d.lampyVazyMaterial && d.lampyVazyMaterial[i]) {
                line += " – " + d.lampyVazyMaterial[i];
            } else if (d.barva && d.barva[i]) {
                line += " – " + d.barva[i];
            }
            return `<div class="lv-entry">${line}</div>`;
        }).join("");
    }
    
    // --- Písmo ---
    if (d.pismo) document.getElementById("pismo-imported").textContent = d.pismo;
    if (d.barva && d.barva.length > 0) {
        // Check if barva is an array or string
        const barvaText = Array.isArray(d.barva) ? d.barva.join(", ") : d.barva;
        document.getElementById("barva-imported").textContent = barvaText;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadPrintData()
});