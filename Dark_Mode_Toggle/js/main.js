const toogle = document.querySelector("#toggle-btn");
const icon = document.querySelector("#toggle-icon");

toogle.addEventListener("click", darkModeToggle);

let darkmode = localStorage.getItem("darkmode");

if (darkmode === "enabled") {
    darkmodeOpen();
}

function darkModeToggle() {
    darkmode = localStorage.getItem("darkmode");
    if (darkmode === "enabled") {
        darkmodeClose();
    } else {
        darkmodeOpen();
    }
}

function darkmodeClose() {
    document.body.classList.remove("dark");
    darkmode = false;
    localStorage.setItem("darkmode", "null");
    icon.className = "fa-sharp fa-solid fa-sun";
}

function darkmodeOpen() {
    document.body.classList.add("dark");
    darkmode = true;
    localStorage.setItem("darkmode", "enabled");
    icon.className = "fa-solid fa-moon";
}