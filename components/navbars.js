function navbar() {


  
    return `
    
<div class="sai"></div>

    <div  onclick="window.location.href='address.html'"> <p> My Address </p></div>
    <div onclick="window.location.href='order.html'"> <p > My Orders </p></div>
    <div>  <p onclick="window.location.href='wallet.html'">My Wallet </p></div>
    <div>  <p onclick="window.location.href='/'">log out </p></div>
  `
};

export default navbar;