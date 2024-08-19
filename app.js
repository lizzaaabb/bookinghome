const menu = document.getElementById("menu-toggle")
const sidebar = document.getElementById("sidebar")
const slides = document.querySelectorAll(".sliderimg")
let slideIndex = 0;
let intervalId = null;


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

const galleryImages = [
    'pics/inter1.jpg',
    'pics/inter2.jpg',
    'pics/inter3.jpg',
    'pics/inter4.jpg',
    'pics/inter5.jpg'
];

galleryImages.forEach((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
});


initializeSlider();


function initializeSlider(){
    slides[slideIndex].classList.add("displaySlide")
    //intervalId = setInterval(nextSlide, 5000)

}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    })
    slides[slideIndex].classList.add("displaySlide")

}
function prevSlide(){
    clearInterval(intervalId)
    slideIndex --;
    showSlide(slideIndex)

}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);

}