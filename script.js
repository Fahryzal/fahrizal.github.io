const backtotop = document.querySelector('.back-to-top');

window.onscroll = function () {
    window.pageYOffset > 300 ? backtotop.style.display = "flex" : backtotop.style.display = "none";
}


const circle = document.querySelector('.circle');

circle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    circle.classList.toggle('circle');
    circle.classList.toggle('circle2');
})


