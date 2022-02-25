const totalAmt = false || '22';
document.querySelector('#item-cost').innerText = totalAmt;

const itemLength = false || 1;
document.querySelector('#item-count').innerText = itemLength;

const address = 'Home: #314, 1st main, 5th cross, Delhi - 92 ';
document.querySelector('#address').innerText = address;

document.querySelector('#btn-home').addEventListener('click', () => {
    window.location = 'index.html';
});

document.querySelector('#btn-status').addEventListener('click', () => {
    window.location = 'order.html';
});

const order_placed = JSON.parse(localStorage.getItem('checkoutItems'));
localStorage.setItem('order_placed', JSON.stringify(order_placed));

localStorage.removeItem('cart');
localStorage.removeItem('checkoutItems');