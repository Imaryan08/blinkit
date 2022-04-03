function mobileandWallet(){
    let mobile = localStorage.getItem('mobile');
    document.querySelector('#mobile').innerHTML = mobile;

    let walletAmount = localStorage.getItem('inputForAmt');
    document.querySelector('.walletAmount').innerHTML = '₹' + walletAmount;
}

export{mobileandWallet};