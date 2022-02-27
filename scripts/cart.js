function createSlideout() {
  const slideout = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('cart'),
      'padding': 360,
      'side': 'right',
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

    // Toggle button
    document.querySelector('#btn-toggle-cart').addEventListener('click', () => {
        slideout.toggle();
    });

    return slideout;
  }
function cartBuilder () {
    


// get from local storage
// remember to keep the keys same, i.e, [image, title, price, quantity]
const cartItems = [];
const checkoutItems = [];
const localCartItems = JSON.parse(localStorage.getItem('cart')) || [];
localCartItems.forEach((e) => {
  const item = {};
  item.image = e.img;
  item.price = e.price.slice(1, e.price.length);
  item.title = e.productName;
  item.quantity = e.quantity;

  cartItems.push(item);
});

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
  }

export { createSlideout, cartBuilder };
