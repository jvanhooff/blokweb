
// // stap 1: zoek de menu-button op en sla die op in een variabele
// var openButton = document.querySelector("header > button");

// // stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
// openButton.addEventListener("click", openMenu);

// // stap 3: voeg in de functie een class toe aan de nav
// function openMenu() {  
//   // zoek de nav op
//   var deNav = document.querySelector("nav");
//   // voeg class toe aan nav
//   deNav.classList.add("toonMenu");
// }




// /************************************/
// /* menu sluiten met de sluit button */
// /************************************/

// /* JOUW CODE HIER - stap 5 */

// // stap 1 - zoek sluiten button op
// var sluitButton = document.querySelector("nav button");

// // stap 2 - laat die button luisteren naar kliks
// sluitButton.addEventListener("click", sluitMenu);

// // stap 3 - in de functie verwijder de class van de nav
// function sluitMenu() {
//   var deNav = document.querySelector("nav");
//   deNav.classList.remove("toonMenu");
// }




// /**********************************/
// /* bonus: menu sluiten met escape */
// /**********************************/
// window.addEventListener("keydown", handleKeydown);

// function handleKeydown(event) {
//   if (event.key == "Escape") {
//     var deNav = document.querySelector("nav");
//     deNav.classList.remove("toonMenu");
//   }
// }


// eerste uitklapmenu
var deEersteButton = document.querySelector("footer section:nth-of-type(1) span");

deEersteButton.addEventListener("click", toggleEersteMenu);

function toggleEersteMenu() {
	var hetEersteMenu = document.querySelector("footer section:nth-of-type(1) ul");
	hetEersteMenu.classList.toggle("open");
}

// tweede uitklapmenu
var deTweedeButton = document.querySelector("footer section:nth-of-type(2) span");

deTweedeButton.addEventListener("click", toggleTweedeMenu);

function toggleTweedeMenu() {
	var hetTweedeMenu = document.querySelector("footer section:nth-of-type(2) ul");
	hetTweedeMenu.classList.toggle("open");
}

// derde uitklapmenu
var deDerdeButton = document.querySelector("footer section:nth-of-type(3) span");

deDerdeButton.addEventListener("click", toggleDerdeMenu);

function toggleDerdeMenu() {
	var hetDerdeMenu = document.querySelector("footer section:nth-of-type(3) ul");
	hetDerdeMenu.classList.toggle("open");
}