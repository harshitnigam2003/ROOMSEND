
function book()
           {
	
	  window.location='createaccountregistration.html'; 
	}


let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
}

prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));

showSlide(currentSlide);



