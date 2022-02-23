const data = [];

document.querySelectorAll('.product__wrapper').forEach((e) => {

    const datum = {};

    datum.productName = e.getElementsByClassName('plp-product__name--box')[0].innerText;
    datum.img = e.getElementsByClassName('img-loader__img img-loader__img--shown')[0].src;
    datum.quantity = e.getElementsByClassName('plp-product__quantity--box')[0].innerText;
    datum.price = e.getElementsByClassName('plp-product__price--new')[0].innerText;

    data.push(datum);

});


console.log(data);
