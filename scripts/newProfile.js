wallet();
mobile();
function order() {
    window.location.href = "order.html";
}

function address() {
    window.location.href = "address.html";
}

function wallet() {
    // window.location.href = "wallet.html";
    let walletAmount = localStorage.getItem('inputForAmt');
    console.log('walletAmount:', walletAmount)
    document.querySelector('.walletAmount').innerHTML = '₹' + walletAmount;
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

function mobile(){
    let mobile = localStorage.getItem('mobile');
    document.querySelector('#mobile').innerHTML = mobile;
}