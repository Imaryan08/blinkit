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