var index = 0;
var slides = document.querySelectorAll('.slides img');
var dots = document.querySelectorAll('.dot');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

function showSlides(n) {
  if (n > slides.length - 1) {
    index = 0;
  }
  if (n < 0) {
    index = slides.length - 1;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (var i = 0; i < dots.length; i++) {
  dots[i].classList.remove("active");
}
slides[index].style.display = "block";
dots[index].classList.add("active");
}

function plusSlides(n) {
showSlides(index += n);
}

function currentSlide(n) {
showSlides(index = n - 1);
}

prev.addEventListener("click", function() {
plusSlides(-1);
});

next.addEventListener("click", function() {
plusSlides(1);
});

showSlides(index);

