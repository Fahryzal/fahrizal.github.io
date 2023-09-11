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

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(".shui a[href*=" + sectionId + "]");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
};
window.addEventListener("scroll", scrollActive);



