function mobileandWallet(){
    let mobile = localStorage.getItem('mobile') || 9643579827;
    document.querySelector('#mobile').innerHTML = mobile;

    let walletAmount = localStorage.getItem('inputForAmt') || 100;
    document.querySelector('.walletAmount').innerHTML = '₹' + walletAmount;
}

export{mobileandWallet};