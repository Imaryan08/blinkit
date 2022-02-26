
let d = "all.json";
let sortvalue = document.getElementById("sortButton").value;

let bakery = document.querySelectorAll(".productCatList");

for (let i = 0; i < bakery.length; i++) {
  bakery[i].addEventListener("click", () => {
    // let q = document.querySelector('#sortButton').value;
    d = bakery[i].getAttribute("id");
    getproduct(d);
  });
}
 
let getproduct = async (d) => {
  try {
    let P_data = await fetch(
      `https://littlebluepenguin.s3.ap-south-1.amazonaws.com/data/pharmaAndWellness/${d}`
    );
    let data = await P_data.json();
    renderproduct(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
getproduct(d);

let cart = localStorage.getItem("cart");

if (!cart) {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  refreshCartCount(cart);
} else {
  cart = JSON.parse(cart);
  refreshCartCount(cart);
}

function refreshCartCount(cart) {
  let cartCount = document.querySelector(".nav-cart-count");
  cartCount.textContent = cart.length;
}

//low to high  filter

let filter = async (d) => {

  var data = await getproduct(d);

  sortvalue = document.getElementById("sortButton").value;

  if (sortvalue == "asc") {
    data.sort(function (a, b) {
      var Pra = "";
      var Prb = "";
      for (var i = 1; i < a.price.length; i++) {
        Pra += a.price[i];
      }
      for (var i = 1; i < b.price.length; i++) {
        Prb += b.price[i];
      }

      return Number(Pra) - Number(Prb);
    });
  }

  if (sortvalue == "desc") {
    data.sort(function (a, b) {
      var Pra = "";
      var Prb = "";
      for (var i = 1; i < a.price.length; i++) {
        Pra += a.price[i];
      }
      for (var i = 1; i < b.price.length; i++) {
        Prb += b.price[i];
      }

      return Number(Prb) - Number(Pra);
    });
  }
  renderproduct(data);

}

document.querySelector("#sortButton").addEventListener("change", async () => {
  var data = await getproduct(d);

  sortvalue = document.getElementById("sortButton").value;

  console.log(sortvalue)

  if (sortvalue == "asc") {
    data.sort(function (a, b) {
      var Pra = "";
      var Prb = "";
      for (var i = 1; i < a.price.length; i++) {
        Pra += a.price[i];
      }
      for (var i = 1; i < b.price.length; i++) {
        Prb += b.price[i];
      }

      return Number(Pra) - Number(Prb);
    });
  }

  if (sortvalue == "desc") {
    data.sort(function (a, b) {
      var Pra = "";
      var Prb = "";
      for (var i = 1; i < a.price.length; i++) {
        Pra += a.price[i];
      }
      for (var i = 1; i < b.price.length; i++) {
        Prb += b.price[i];
      }

      return Number(Prb) - Number(Pra);
    });
  }
  renderproduct(data);
});




function renderproduct(data) {
  document.getElementById("box").textContent = "";
  data.forEach(function (D) {
    var Div = document.createElement("div");
    Div.setAttribute("class", "col-3 productDetails");
    Div.setAttribute("id", "product_div");

    let div1 = document.createElement("div");
    div1.style.display = "block";
    var Img = document.createElement("img");
    Img.setAttribute("src", D.img);

    let heading = document.createElement("div");
    heading.style.height = "90px";
    var H6 = document.createElement("h6");
    H6.textContent = D.productName;

    var P = document.createElement("p");
    P.textContent = D.quantity;

    var Div2 = document.createElement("div");
    Div2.setAttribute("id", "small_div");
    var Div_21 = document.createElement("div");
    Div_21.setAttribute("class", "price");
    Div_21.setAttribute("id", "very_small");

    var Spam = document.createElement("span");
    Spam.textContent = D.price;

    var Button = document.createElement("button");
    Button.setAttribute("id", "duttom");
    Button.textContent = "Add to Cart";
    Button.onclick = function (event) {
      // add to cart --> items should get added to cart --> cart count should change in navbar;
      addToCart(D);
    };

    Div_21.append(Spam);
    div1.append(Img);
    heading.append(H6);
    Div2.append(Div_21, Button);
    Div.append(div1, heading, P, Div2);
    document.getElementById("box").append(Div);
  });

  function addToCart(prod) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.push(prod);

    localStorage.setItem("cart", JSON.stringify(cart));
    refreshCartCount(cart);
  }
}

//importing navbar
// let navbar = document.querySelector('.nav');

// import nav from '/components/navbar.js';

// navbar.innerHTML = nav();

//importing footer
let foot = document.querySelector(".footer");

import {footer} from "/components/footer.js";

foot.innerHTML = footer();


let links = [
  "grofers Happy Day",
  "grofers Happy Home",
  "grofers Mother's Choice",
  "g Fresh",
  "O'range",
  "Savemore",
  "24 Mantra",
  "Aashirvaad",
  "Act II",
  "Amul",
  "Axe",
  "Bambino",
  "Best Value",
  "Bingo",
  "Bisleri",
  "Boost",
  "Bournvita",
  "Britannia",
  "Brooke Bond",
  "Bru",
  "Cadbury",
  "Cheetos",
  "Cinthol",
  "Closeup",
  "Coca-Cola",
  "Colgate",
  "Dabur",
  "Danone",
  "Del Monte",
  "Dettol",
  "Dhara",
  "Dove",
  "Durex",
  "English Oven",
  "Everest",
  "Fiama Di Wills",
  "Garnier",
  "Gatorade",
  "Gillette",
  "Glucon-D",
  "Grocery",
  "Gowardhan",
  "Hajmola",
  "Haldiram's",
  "Head & Shoulders",
  "Heinz",
  "Himalaya",
  "Horlicks",
  "India Gate",
  "Kellogg's",
  "Kinley",
  "Kissan",
  "Knorr",
  "L'Oreal",
  "Lay's",
  "Lijjat",
  "Limca",
  "Lipton",
  "Maggi",
  "Madhur",
  "McCain",
  "MDH",
  "Minute Maid",
  "Mirinda",
  "Mother Dairy",
  "Mountain Dew",
  "MTR",
  "Nescafe",
  "Nestle",
  "Nivea",
  "Nutella",
  "Oral-B",
  "Oreo",
  "Palmolive",
  "Pantene",
  "Paper Boat",
  "Parachute",
  "Parle",
  "Patanjali",
  "Pears",
  "Pepsi",
  "Pepsodent",
  "Pillsbury",
  "Princeware",
  "Rajdhani",
  "Real",
  "Red Bull",
  "Safal",
  "Saffola",
  "Shakti Bhog",
  "Smith & Jones",
  "Sprite",
  "Stayfree",
  "Sundrop",
  "Sunfeast",
  "Sunsilk",
  "Taj Mahal",
  "Tang",
  "Tata sampann",
  "Tata tea",
  "Tetley",
  "Thums Up",
  "Tropicana",
  "Twinings",
  "Uncle Chipps",
  "Unibic",
  "Vaseline",
  "Veet",
  "Wagh Bakri",
  "Wai Wai",
  "Whisper",
  "Whole Farm"
];

for(let i = 0; i < links.length; i++){
  let a = document.createElement('a');
  a.href = `https://blinkit.com/brand/${links[i]}`;
  a.innerText = ` ${links[i]} `;

  document.querySelector('.brandLinks').append(a);

}
