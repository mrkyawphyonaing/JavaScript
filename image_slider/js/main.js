//DOM Selector

const images = Array.from(document.querySelectorAll(".image_container img"));
const previous = document.querySelector(".prev");
const next = document.querySelector(".next");
// console.log(images);

//Event Listener

previous.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

let index = 0;

//Previous Slides
function prevSlide() {
    images[index].classList.remove("active");
    if (index === 0) {
        index = images.length - 1;
        images[index].classList.add("active");
    } else {
        index--;
        images[index].classList.add("active");
    }
}

//Next Slides

function nextSlide() {
    images[index].classList.remove("active");
    if (index === images.length - 1) {
        index = 0;
        images[index].classList.add("active");
    } else {
        index++;
        images[index].classList.add("active")
    }
}

// Auto Slide
// setInterval(nextSlide, 4000);