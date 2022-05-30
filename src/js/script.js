const signInBtn = document.querySelector('#signin');
const loginForm = document.querySelector('#loginform');
const homePage = document.querySelector('#homepage');
const landing = document.querySelector('#landing');
const closeBtn = document.querySelector('#closeBtn');
const userProfile = document.querySelector('#user-profile');

signInBtn.addEventListener('click', function () {
    loginForm.classList.toggle('hidden');
    landing.classList.toggle('hidden');
})

closeBtn.addEventListener('click', function () {
    loginForm.classList.toggle('hidden');
    landing.classList.toggle('hidden');
})


userProfile.classList.toggle('hidden');