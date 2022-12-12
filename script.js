const navBtn = document.getElementById('nav-btn');
const signupBtn = document.getElementById('signup-btn');
const modalContainer = document.getElementById('modal-container');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');

navBtn.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
})

signupBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block';
})

modalClose.addEventListener('click', () => {
    modalContainer.style.display = 'none';
}
)
