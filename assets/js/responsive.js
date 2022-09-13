/* ---------- RESPONSIVE ---------- */

// Get the hamburger and the nav dropdown list
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navbarRightLink");
const navbarRightLink = document.getElementById("navbarRightLink");

// Toggle dropdown list display on hamburger click
hamburger.addEventListener("click", event => {
    navLinks.classList.toggle("toggled");
})

// navbarRightLink ACTIVE CLASS CHANGE
navbarRightLink.addEventListener("click", event => {

    if (event.target.id == "navbarRightLink") { //FIX DRAG AND DROP
        return;
    }

    var ids = [];
    var children = document.getElementById("navbarRightLink").children; //get container element children.
    for (var i = 0, len = children.length; i < len; i++) {
        ids.push(children[i].id); //get child id.

        if (document.getElementById(children[i].id).classList.contains("active")) {
            document.getElementById(children[i].id).classList.remove("active");
        }
    }
    document.getElementById(event.target.id).classList.add("active");
})



// Remove "toggled" class from nav dropdown list element if we switch back to desktop view if the class is present
const resetNavLinksOnResize = () => {

    if (window.matchMedia("(min-width:768px)").matches && navLinks.classList.contains("toggled")) {
        navLinks.classList.remove("toggled");
    }

}

// Call resetNavLinksOnResize function when window is resized
window.addEventListener('resize', resetNavLinksOnResize);