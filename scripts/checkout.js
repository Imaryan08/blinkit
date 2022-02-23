document.querySelectorAll('.payment-options__tabs > li').forEach((e) => {
    e.addEventListener('click', () => {
        document.querySelector('.payment-options__tabs--selected').classList.remove('payment-options__tabs--selected');
        e.classList.add('payment-options__tabs--selected');
    });
});