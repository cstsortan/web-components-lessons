import './src/components';

const loginForm = document.querySelector('wc-login-form');
loginForm.addEventListener('wc-login', e => {
    const email = e.detail.email;
    const password = e.detail.password;
    login(email, password);
});

function login(email, password) {
    console.log('Performing Login with these credentials...');
    console.log(email);
    console.log(password);
}