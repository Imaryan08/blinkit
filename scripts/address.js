const mobile = localStorage.getItem("mobile");
document.querySelector("#mobile").innerHTML = mobile;
var modal = document.getElementById("container");
var btn = document.getElementById("add-adress");

var main_div = document.getElementById("main_div");

btn.onclick = function () {
  modal.style.display = "block";
  document.body.style.background = "rgba(33, 32, 32, 0.3)";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    main_div.style.opacity = "1";
  }
};



let defAdd = [{
  nam: "Rampukar Yadav",
  stree: "Shalimar Bagh, Sector-12",
  fla: "Plot No.- 256",
  localit: "Staff Quarter, Type - IV",
  addressType: "Home",
}];




let addArr = JSON.parse(localStorage.getItem("addArr")) || defAdd;
console.log("addArr:", addArr);

var nam = addArr[0].nam;
var stree = addArr[0].stree;
var fla = addArr[0].fla;
var localit = addArr[0].localit;
let addressType = addArr[0].addressType;

document.querySelector("#submitBtn").addEventListener("click", submitForm);

function submitForm(event) {
  event.preventDefault();
  var locality = document.querySelector("#locality").value;
  var name = document.querySelector("#name").value;
  var flat = document.querySelector("#flat").value;
  var street = document.querySelector("#street").value;

  var addType = document.querySelector("#radio");
  //   alert(addType.elements["address-type"].value);

  addressType = addType.elements["address-type"].value;

  nam = name;
  stree = street;
  fla = flat;
  localit = locality;
  addressType = addressType;

  formvalue(nam, stree, fla, localit, addressType);
  modal.style.display = "none";
  main_div.style.opacity = "1";

  document.body.style.background = "rgba(256, 256, 256, 1)";

  let addObj = {
    nam: name,
    stree: street,
    fla: flat,
    localit: locality,
    addressType: addressType,
  };

  let addArr = [];
  addArr.push(addObj);
  localStorage.setItem("addArr", JSON.stringify(addArr));
}

document.getElementById("NAME").textContent = nam;
document.getElementById("STREET").textContent = stree;
document.getElementById("FLAT").textContent = fla;
document.getElementById("LOCALITY").textContent = localit;
document.getElementById("HOME").textContent = addressType;

function formvalue(nam, stree, fla, localit) {
  document.getElementById("NAME").textContent = nam;
  document.getElementById("STREET").textContent = stree;
  document.getElementById("FLAT").textContent = fla;
  document.getElementById("LOCALITY").textContent = localit;
  document.getElementById("HOME").textContent = addressType;
}

document.querySelector("#closeModal").addEventListener("click", () => {
  document.querySelector("#container").style.display = "none";
  main_div.style.opacity = "1";
  document.body.style.background = "rgba(256, 256, 256, 1)";
});


function logout() {
  let isLoggedIn = localStorage.getItem('isLoggedIn');
  isLoggedIn = false;
  localStorage.setItem('isLoggedIn', isLoggedIn);
  window.location.href = "index.html";
}