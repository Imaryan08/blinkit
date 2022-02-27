function navbar() {
    return `
        <div class="nav__left">
            <div id="logo">
                <a href="/index.html">
                    <img src="https://blinkit.com/images/header/blinkit_logo-3898547.png" alt="blinkit (formerly Grofers)" />
                </a>
            </div>
            <div class="location-info">
                <div class="h3">delivered in 22 min</div>
                <div id="location">detect location</div>
            </div>
        </div>
        <div id="nav-search">
            <input type="text" id="searchbar" />
        </div>
        <div class="nav__right">
            <div class="nav__profile">profile</div>
            <div id="btn-toggle-cart">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <span class="nav-cart-count">0</span>Items
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


function setLocation() {

    const defaultLocation = '#314 1st main 5th block Delhi - 92';
    let localLocation = localStorage.getItem('address');
    if (localLocation !== null) {
        document.querySelector('#location').innerText = localLocation;
        return;
    }

const button = document.querySelector('#location');
    button.addEventListener('click', () =>{
        if(navigator)
            navigator.geolocation.getCurrentPosition( (position) => {
                console.log(position);
                let longitude = position.coords.longitude;
                let latitude = position.coords.latitude;

                getLocation(longitude,latitude);
                localStorage.setItem('address', localLocation);
            })
        else    
            console.log('geolocation is not supported');
            button.innerText = defaultLocation;
            localStorage.setItem('address', localLocation);
    })


    let getLocation = async(longitude, latitude) => {

        button.innerText = "Detecting your location...";
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=b71feba224f94a209d1bdd18ee8bba3a`)
        .then(response => response.json()).then(response =>{
        
        let allDetails = response.results[0].components;
            console.table(allDetails);
        
        let {county, country, state_district} = allDetails;
        localLocation = `${county}, ${state_district}, ${country}`;
        button.innerText = localLocation;

        localStorage.setItem('address', localLocation);
        })
        .catch(()=>{
        button.innerText = defaultLocation;

        localStorage.setItem('address', localLocation);
    });
    }


}

export { navbar, cart, setLocation };