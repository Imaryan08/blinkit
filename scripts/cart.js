  const slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('cart'),
    'padding': 360,
    'side': 'right',
  });

  // Toggle button
  document.querySelector('#btn-toggle-cart').addEventListener('click', () => {
      slideout.toggle();
  });

function close(eve) {
  eve.preventDefault();
  slideout.close();
}

slideout
  .on('beforeopen', function() {
    this.panel.classList.add('panel-open');
  })
  .on('open', function() {
    this.panel.addEventListener('click', close);
  })
  .on('beforeclose', function() {
    this.panel.classList.remove('panel-open');
    this.panel.removeEventListener('click', close);
  });

  document.querySelector('#btn-checkout').addEventListener('click', () => {
    window.location = 'checkout.html';
  });