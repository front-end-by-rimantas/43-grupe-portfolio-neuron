const meniu = document.querySelector("#meniukas");
const meniupad = document.querySelector("#head_1");

function sticky_nav() {

    if (window.scrollY < 110) {
        head_1.style.paddingBottom = 0;
        meniukas.classList.remove('head_row_sticky');
        

    } else {
        head_1.style.transition = 'padding-top 0.7s ease';
        head_1.style.paddingBottom = meniu.offsetHeight + 'px';
        meniukas.classList.add('head_row_sticky'); 
    }
}
window.addEventListener('scroll', sticky_nav);


