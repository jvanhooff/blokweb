// JavaScript Document
console.log("hi");

var openButton = document.querySelector("header  a"); 

openButton.addEventListener("click", openMenu)

function openMenu() { 
var deHeader = document.querySelector("nav");

deNav.classList.Add("toonMenu");

}


// stap 1 - zoek sluiten button op
var sluitButton = document.querySelector("header  button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.addEventListener("click", sluitMenu);

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}


