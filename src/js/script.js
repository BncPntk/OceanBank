
const homePage = document.querySelector('#homepage');
const landing = document.querySelector('#landing');
const userProfile = document.querySelector('#user-profile');

// Login Form Elements
const closeBtn = document.querySelector('#closeBtn');

const loginForm = document.querySelector('#loginform');
const signInBtn = document.querySelector('#signin');

const usernameInput = document.querySelector('#username');
const pinInput = document.querySelector('#pin');
const formSignInBtn = document.querySelector('#formSignInBtn');


// Transactions
const transactionsContainer = document.querySelector('#transactionsContainer');

const logoutBtn = document.querySelector('#logoutBtn');

const welcomeName = document.querySelector('#welcomeName');
const balanceSpan = document.querySelector('#balance');
const incomeLabel = document.querySelector('#incomeLabel');
const outcomeLabel = document.querySelector('#outcomeLabel');
// Hide User
// userProfile.classList.toggle('hidden');


// Clear values
incomeLabel.innerHTML = '';
outcomeLabel.innerHTML = '';


// Close Login Form
closeBtn.addEventListener('click', function () {
    loginForm.classList.toggle('hidden');
    landing.classList.toggle('hidden');
})


//  Show Login Form
signInBtn.addEventListener('click', function () {
    loginForm.classList.toggle('hidden');
    landing.classList.toggle('hidden');

})



// Logout
logoutBtn.addEventListener('click', function () {
    userProfile.classList.toggle('hidden');
    loginForm.classList.toggle('hidden');
    landing.classList.toggle('hidden');
    homePage.classList.toggle('hidden');
    document.body.classList.toggle('bg');


})


// Load transactions
const transactionMovements = function (movements) {
    transactionsContainer.innerHTML = '';

    movements.forEach((mov, i) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const htmlStr = `<div class="transaction-html pt-4 pb-3 w-full">
                        <div class="transaction-inner-div">
                            <p class="${type}"><span>${i + 1}</span> ${type}</p>
                        </div>
                        <div class="money-amount">
                            <p class="text-xl"> <span>$</span>${Math.abs(mov)}</p>
                        </div>
                    </div>`;
        transactionsContainer.insertAdjacentHTML('afterbegin', htmlStr);
    })
}



const displayBalance = function (movements) {
    const balance = movements.reduce((acc, curr) => acc + curr, 0);
    balanceSpan.innerHTML = balance

}

const calcBalanceSummary = function (movements) {
    const income = movements.filter(mov => mov > 0).reduce((a, b) => a + b, 0);
    incomeLabel.innerHTML = `$${income}`;

    const outcome = movements.filter(mov => mov < 0).reduce((a, b) => a + b, 0);
    outcomeLabel.innerHTML = `$${Math.abs(outcome)}`;
}



// Login
let currAccount;

formSignInBtn.addEventListener('click', function () {

    currAccount = users.find(acc => acc.username === usernameInput.value);

    if (currAccount?.pin === pinInput.value) {
        usernameInput.value = pinInput.value = '';
        homePage.classList.toggle('hidden');
        userProfile.classList.toggle('hidden');
        document.body.classList.toggle('bg');

        // Display users name
        // let displayedUsername = currAccount.username.split(' ');
        // displayedUsername = displayedUsername.forEach(word => word[0].toUpperCase());


        welcomeName.innerHTML = currAccount.username;

        // Display balance
        displayBalance(currAccount.movements)
        // Display transactions
        transactionMovements(currAccount.movements);
        // Display summary
        calcBalanceSummary(currAccount.movements);
    }
    else {
        console.log('error');
    }



});