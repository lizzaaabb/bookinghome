const menu = document.getElementById("menu-toggle")
const sidebar = document.getElementById("sidebar")


menu.onclick = function(){
    sidebar.classList.toggle("show")

    if (sidebar.classList.contains("show")) {
        // Hide slideshow with animation
        slideshow.classList.add("slide-out");
        slideshow.classList.remove("slide-in");
    } else {
        // Show slideshow with animation
        slideshow.classList.remove("slide-out");
        slideshow.classList.add("slide-in");
    }
    
}
