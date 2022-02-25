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


String.prototype.format = function () {
  // store arguments in an array
  var args = arguments;
  // use replace to iterate over the string
  // select the match and check if related argument is present
  // if yes, replace the match with the argument
  return this.replace(/{([0-9]+)}/g, function (match, index) {
    // check if the argument is present
    return typeof args[index] == 'undefined' ? match : args[index];
  });
};


// get from local storage
// remember to keep the keys same, i.e, [image, title, price, quantity]
const cartItems = [
  {
    image: 'http://cdn.grofers.com/app/images/products/normal/pro_216127.jpg?ts=1590380297',
    title: 'Unibic Choco Ripple Cookies - Buy 1 Get 1 Free',
    price: '40',
    quantity: '2 x 100g',
  },
  {
    image: 'http://cdn.grofers.com/app/images/products/normal/pro_216127.jpg?ts=1590380297',
    title: 'Unibic Choco Ripple Cookies - Buy 1 Get 1 Free',
    price: '40',
    quantity: '2 x 100g',
  }
];

const checkoutItems = JSON.parse(localStorage.getItem('cart')) || [];

const cartdiv = document.querySelector('#cart-items');

cartItems.forEach((item, index) => {

  const main = document.createElement('div');
  main.classList.add('cart-item');

  const img = document.createElement('img');
  img.setAttribute('src', item.image);
  main.append(img);

  const container = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.innerText = item.title;

  const h2 = document.createElement('h2');
  h2.innerText = item.price;

  const qty = document.createElement('h5');
  qty.innerText = item.quantity;

  const btnPlus = document.createElement('button');
  btnPlus.innerHTML = '+';


  const p = document.createElement('p');
  p.innerText = '1';

  const btnMinus = document.createElement('button');
  btnMinus.innerHTML = '-';

  container.append(h3, h2, qty, btnPlus, p, btnMinus);
  main.append(container);

  btnPlus.addEventListener('click', () => {
    p.innerText = Number(p.innerText) + 1;
    
    let cost = Number(h2.innerText);
    cost +=  Number(item.price);
    h2.innerText = cost;

    checkoutItems[index].count += 1;

    localStorage.setItem('checkoutItems', JSON.stringify(checkoutItems));
  });


  btnMinus.addEventListener('click', () => {
    const n = Number(p.innerText) - 1;
    if (n === 0) {
      main.style.display = 'none';
      checkoutItems[index].count -= 1;
      localStorage.setItem('checkoutItems', JSON.stringify(checkoutItems));
    } else {
      p.innerText = n;
      let cost = Number(h2.innerText);
      cost -=  Number(item.price);
      h2.innerText = cost;

      checkoutItems[index].count -= 1;

      localStorage.setItem('checkoutItems', JSON.stringify(checkoutItems));
    }
  });

  item.count = 1;
  checkoutItems.push(item);
  localStorage.setItem('checkoutItems', JSON.stringify(checkoutItems));

  cartdiv.append(main);
})