const addressDiv = document.getElementById('location');

const getLocationAddress = async (coords) => {

    // one of latitude or langitude is empty
    if (!coords.latitude || !coords.longitude) {
        addressDiv.innerText = '#1 5th main 6th cross Delhi';
    } else {
        const reverseGeocodingUrl = `https://api.geoapify.com/v1/geocode/reverse?lat=${coords.latitude}&lon=${coords.longitude}&apiKey=75f31c7e36e24bbfa88e4885d4603f1f`;
        const res = await fetch(reverseGeocodingUrl);
        const data = await res.json();
        console.log(data);
    }
};

const getLocationCoord = async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (e) => {
            getLocationAddress(e.coords)
        });
    } else {
        getLocationAddress({})
    }
};

getLocationCoord();