let splashscreenContainer = document.getElementById("splashscreen-container");
let splashscreenLogo = document.getElementById("splashscreen-logo");

function hideSplashScreen() {
    setTimeout(() => {
        if (splashscreenLogo) splashscreenLogo.classList.remove("loading-animation-on");
        if (splashscreenContainer) splashscreenContainer.classList.add("loaded-animation-on");
    }, 1000);
}

if (document.readyState === 'complete') {
    // if loaded, hide splashscreen
    hideSplashScreen();
} else {
    // otherwise wait for state change
    document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') {
            hideSplashScreen();
        }
    });
}