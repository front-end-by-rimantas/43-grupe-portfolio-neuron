const meniu = document.querySelector("#meniukas");

function sticky_nav() {

    if (window.scrollY < 110) {
        meniukas.classList.remove('head_row_sticky');
        document.body.style.paddingTop = 0;

    } else {
        meniukas.classList.add('head_row_sticky');
        document.body.style.transition = 'padding-top 0.4s ease';
        document.body.style.paddingTop = meniu.offsetHeight + 'px';
    }
}
window.addEventListener('scroll', sticky_nav);


