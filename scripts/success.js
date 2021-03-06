const totalAmt = JSON.parse(localStorage.getItem('totalAmt'));
document.querySelector('#item-cost').innerText = totalAmt;

const itemLength = false || 1;
document.querySelector('#item-count').innerText = itemLength;

const address = localStorage.getItem('address');
document.querySelector('#address').innerText = address;

document.querySelector('#btn-home').addEventListener('click', () => {
    window.location = 'index.html';
});

document.querySelector('#btn-status').addEventListener('click', () => {
    window.location = 'myorder.html';
});

const order_placed = JSON.parse(localStorage.getItem('checkoutItems'));
localStorage.setItem('order_placed', JSON.stringify(order_placed));

localStorage.removeItem('cart');
localStorage.removeItem('checkoutItems');