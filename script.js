const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", navbarOpen());

function navbarOpen() {
    document.querySelector(".hero-navbar").classList.toggle("show");
}