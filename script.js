// Theme local storage

const toggle = document.getElementById("theme-toggle");

const storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
}

// Theme toggle

toggle.onclick = function() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
};



// Navigation menu button

function openNav() {
    document.getElementById("menu-mobile").style.width = "20rem";
  }
  
  function closeNav() {
    document.getElementById("menu-mobile").style.width = "0";
  }