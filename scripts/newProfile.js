
function order() {
    window.location.href = "myorder.html";
}

function address() {
    window.location.href = "addess.html";
}

function wallet() {
    window.location.href = "wallet.html";
}

function logout() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    isLoggedIn = false;
    localStorage.setItem('isLoggedIn', isLoggedIn);
    window.location.href = "index.html";
}

function faq() {
    window.location.href = "https://blinkit.com/faq";
}

// function mobileandWallet(){
//     let mobile = localStorage.getItem('mobile');
//     document.querySelector('#mobile').innerHTML = mobile;

//     let walletAmount = localStorage.getItem('inputForAmt');
//     document.querySelector('.walletAmount').innerHTML = '₹' + walletAmount;
// }

// export{mobileandWallet};