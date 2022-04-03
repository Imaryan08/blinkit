const mobile = localStorage.getItem('mobile');
document.querySelector('#mobile').innerHTML = mobile;

let walletAmt = Number(localStorage.getItem("inputForAmt")) || 0;
let walletAmount = document.querySelector("#walletAmount");
walletAmount.innerText = walletAmt;

let submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  walletAmt = Number(localStorage.getItem("inputForAmt")) || 0;
  walletAmount.innerText = walletAmt;
  alert("Your payment added successfully");
  document.querySelector(".addMoneyDiv").style.display = "block";
  document.querySelector(".upiDiv").style.display = "none";
});

document.querySelector(".addAmtBtn").addEventListener("click", (event) => {
  event.preventDefault();
  let inputForAmt = document.querySelector(".inputForAmt").value;
  if (inputForAmt) {
    inputForAmt = +inputForAmt + +walletAmt;

    localStorage.setItem("inputForAmt", inputForAmt);

    document.querySelector(".addMoneyDiv").style.display = "none";
    document.querySelector(".upiDiv").style.display = "block";
  } else {
    alert("Add Amount");
  }
});


function logout() {
  let isLoggedIn = localStorage.getItem('isLoggedIn');
  isLoggedIn = false;
  localStorage.setItem('isLoggedIn', isLoggedIn);
  window.location.href = "index.html";
}