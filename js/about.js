window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (slides.length && dots.length) {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dot";
    setTimeout(showSlides, 7000); // Change image every 7 seconds
  }
}
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.text-center', {delay: 200})
sr.reveal('.gold-text', {origin:'top', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.info', {delay: 400})
sr.reveal('.bottom-details', {delay: 200})
sr.reveal('.row pl-1', {delay: 300})
sr.reveal('.about_model', {delay: 400})

/*SCROLL SKILLS*/
sr.reveal('.skills_subtitle', {interval: 100})
sr.reveal('.skills_name', {distance: '20px', delay: 50, interval: 200})
sr.reveal('.bar', {interval: 200})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio_subtitle', {delay: 300})
sr.reveal('.portfolio_img', {interval: 400})

/*SCROLL CONTACT*/
sr.reveal('.contact_subtitle', {delay: 150})
sr.reveal('.text', {delay: 300})
sr.reveal('.media', {delay: 300})
///sr.reveal('.contact__button', {delay: 600})