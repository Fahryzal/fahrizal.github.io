const backtotop = document.querySelector('.back-to-top');

window.onscroll = function () {
    window.pageYOffset > 300 ? backtotop.style.display = "flex" : backtotop.style.display = "none";
}




