// Read from browser memory
const user = localStorage.getItem('currentUser');
if(user) {
    document.querySelector('.welcome-text h1 span').innerText = user;
    document.querySelector('.avatar-circle').innerText = user.substring(0, 2).toUpperCase();
}