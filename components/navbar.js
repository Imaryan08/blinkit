function navbar() {
    return `
        <div class="nav__left">
            <div id="logo">
                <a href="/">
                    <img src="https://blinkit.com/images/header/blinkit_logo-3898547.png" alt="blinkit (formerly Grofers)" />
                </a>
            </div>
            <div class="location-info">
                <div class="h3">delivered in 22 min</div>
                <div id="location">#314 1st main 5th block Delhi - 92</div>
            </div>
        </div>
        <div id="nav-search">
            <input type="text" id="searchbar" />
        </div>
        <div class="nav__right">
            <div class="nav__profile">profile</div>
            <div id="btn-toggle-cart">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <span class="nav-cart-count">2</span>Items
            </div>
            <div class="nav__app-link">
                <i class="fa fa-mobile" aria-hidden="true"></i>
                get the app
            </div>
        </div>
  `
}

function cart() {
  return `
  
        <div class="cart-page">
            <h1 class="cart__title">my cart</h1>
            <div class="flex-text">
                <div>Shipment 1 of 1</div>
                <div class="">item(s)</div>
            </div>
            <div class="cart-container">
                <div class="">
                <h2 class="">delivery in 12 minutes</h2>
                <h4 class="">from Super Store - Bengaluru Kalyan Nagar ES21</h4>
                </div>
                <hr />
                <div id="cart-items">
                </div>
            </div>
        </div>
        <div class="checkout">
            <div id="btn-checkout">proceed to checkout</div>
        </div>
  `
}

export { navbar, cart };