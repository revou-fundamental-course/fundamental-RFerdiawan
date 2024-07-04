let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > document.getElementsByClassName("slide").length) {
        slideIndex = 1
    }
    if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("slide").length
    }
    showSlidesManually(slideIndex);
}

function showSlidesManually(n) {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n - 1].style.display = "block";
}

function currentSlide(n) {
    showSlidesManually(slideIndex = n);
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('messageForm');
    const currentTimeElement = document.getElementById('currentTime');
    const outputName = document.getElementById('outputName');
    const outputDob = document.getElementById('outputDob');
    const outputGender = document.getElementById('outputGender');
    const outputMessage = document.getElementById('outputMessage');
    const outputDiv = document.getElementById('output');

    function updateCurrentTime() {
        const now = new Date();
        currentTimeElement.textContent = now.toString();
    }

    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.name.value;
        const dob = form.dob.value;
        const gender = form.gender.value;
        const message = form.message.value;

        outputName.textContent = name;
        outputDob.textContent = dob;
        outputGender.textContent = gender;
        outputMessage.textContent = message;

        // Remove the hide class to show the output
        outputDiv.classList.remove('hide');
    });
});