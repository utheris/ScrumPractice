// SLIDER JS
let prevPic = document.querySelector('#prevPicture');
let nextPic = document.querySelector('#nextPicture');
let list = document.querySelectorAll('.slider-list');
let index = 0;
list[index].classList.add('visible');

nextPic.addEventListener("click", function (e) {
    list[index].classList.remove("visible");
    index++;
    if (index >= list.length) {
        index = 0;
    }
    list[index].classList.add("visible")
});

prevPic.addEventListener("click", function (e) {
    list[index].classList.remove("visible");
    index--;
    if (index < 0) {
        index = list.length - 1;
    }
    list[index].classList.add("visible")
});