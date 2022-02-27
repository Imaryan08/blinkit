document.querySelectorAll('.payment-options__tabs > li').forEach((e) => {
    e.addEventListener('click', () => {
        document.querySelector('.payment-options__tabs--selected').classList.remove('payment-options__tabs--selected');
        e.classList.add('payment-options__tabs--selected');
    });
});


document.querySelector('#payment-option-wallet').addEventListener('click', () => {
    document.querySelector('.payment-option-display__shown').classList.remove('payment-option-display__shown');
    document.querySelector('#payment-wallets').classList.add('payment-option-display__shown');
});


document.querySelector('#payment-option-upi').addEventListener('click', () => {
    document.querySelector('.payment-option-display__shown').classList.remove('payment-option-display__shown');
    document.querySelector('#payment-upi').classList.add('payment-option-display__shown');
});


document.querySelector('#payment-option-card').addEventListener('click', () => {
    document.querySelector('.payment-option-display__shown').classList.remove('payment-option-display__shown');
    document.querySelector('#payment-card').classList.add('payment-option-display__shown');
});


document.querySelector('#payment-option-cash').addEventListener('click', () => {
    document.querySelector('.payment-option-display__shown').classList.remove('payment-option-display__shown');
    document.querySelector('#payment-placeholder').classList.add('payment-option-display__shown');
});


document.querySelector('#payment-option-net-banking').addEventListener('click', () => {
    document.querySelector('.payment-option-display__shown').classList.remove('payment-option-display__shown');
    document.querySelector('#payment-placeholder').classList.add('payment-option-display__shown');
});

document.querySelector('#btn-pay-now').addEventListener('click', () => {
    window.location = 'success.html';
});



/*******/
let totalAmt = 0;
const display = document.querySelector('.checkout-right-display');
const checkoutItems = JSON.parse(localStorage.getItem('checkoutItems'));

document.querySelector('.checkout-cart__item-count').innerText = `${checkoutItems.length} Items`

checkoutItems.forEach((item) => {
    console.log(item);
    if (item.count === 0) {
        return
    }

    const main = document.createElement('div');
    main.classList.add('checkout-cart__item');

    const img = document.createElement('img');
    img.src = item.image;
    main.append(img);

    const div = document.createElement('div');
    const h5 = document.createElement('h5');
    const h6 = document.createElement('h6');

    h6.innerText = item.title;

    const amt = Number(item.price) * Number(item.count);
    h5.innerText = amt;
    totalAmt += amt;

    div.append(h6, h5);
    main.append(div);
    display.append(main);
});



document.querySelectorAll('.total-amt').forEach((e) => {
    e.innerText = totalAmt;
});

const address = false || 'Home: #314, 1st main, 5th cross, Delhi - 92';
document.querySelector('#cust-address').innerText = address;

const phone = false || '8475968123';
document.querySelector('#cust-phone').innerText = phone;

localStorage.setItem('totalAmt', totalAmt);