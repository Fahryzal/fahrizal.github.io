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

// responsif navbar
const shui = document.querySelector('.shui');
const humburger = document.querySelector('.humburger');

humburger.addEventListener('click', function () {
    if (shui.hasAttribute('id')) {
        shui.removeAttribute('id');
    } else {
        shui.setAttribute('id', 'active');
    }
});
document.addEventListener('click', function (e) {
    if (!humburger.contains(e.target) && !shui.contains(e.target)) {
        shui.removeAttribute('id');
    }
});




