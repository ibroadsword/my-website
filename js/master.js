// Script to open Dropdown on mobile sidebar
var dropdown = function() {
    var menu = document.getElementById("dropdown-menu");
    if (menu.className.indexOf("w3-show") == -1) {
        menu.className += " w3-show";
    } else { 
        menu.className = menu.className.replace(" w3-show", "");
    }
}

// Script to open and close sidebar
var w3Open = function() {
    document.querySelector("nav").classList.add("w3-animate-left");
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
var w3Close = function() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
    document.querySelector("nav").classList.remove("w3-animate-left");
}

// function spin() {
//     setTimeout(function() {
//         document.querySelector("body").classList.add("w3-spin");
//     }, 23500);
// }
// spin();
