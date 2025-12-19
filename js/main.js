const btnUl = document.querySelector(".btn-list");
const btnArray = Array.from(btnUl.getElementsByTagName('li'));
const ratingContainer = document.querySelector('.main-container');
const thankContainer = document.querySelector('.thank-container');
const ratingSpan = document.querySelector('.rating');
let activeBtn;

btnArray.forEach(element => {
    element.addEventListener('click',(e) => {
        btnArray.forEach(element => {
            element.children[0].classList.remove('active');
        })
        element.children[0].classList.add('active');
    })
});

document.querySelector('.btn-submit').addEventListener('click', () => {
    let checkActive = false;
    btnArray.forEach(element => {
        if(element.children[0].classList.contains('active')){
            checkActive = true;
            activeBtn = element.children[0];
        }
    })

    if(!checkActive) {
        alert("Wybierz ocenę!");
    } else {
        ratingContainer.classList.add('hidden');
        thankContainer.classList.remove('hidden');
        ratingSpan.innerHTML = activeBtn.innerHTML;
    }
})