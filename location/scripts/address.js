let Continue = document.querySelector('#add_address');
let addres = JSON.parse(localStorage.getItem('address')) || [];
//console.log(' Continue:',  Continue)
  Continue.addEventListener("click", () => {
      console.log('clicked')
    
      let add = document.querySelector('#add').value;
      let name = document.querySelector('#name').value;

      let fnumber = document.querySelector('#fnumber').value;

      let street = document.querySelector('#street').value;

    let obj = {add: add, name: name, fnumber: fnumber, street: street};
    addres.push(addres);

    localStorage.setItem('address',JSON.stringify(obj));
  })

  let address_Data = JSON.parse(localStorage.getItem('address')) ;
  console.log('address_Data:', address_Data)

  var adrs = [];
adrs.push( address_Data);
let main = document.getElementById("adrs");

appendAdress(adrs, main);

function appendAdress(adrs, main) {
    adrs.forEach(element => {
        let div = document.createElement("div");
        div.setAttribute("class", "Add");

        var del = document.createElement('div');
    del.setAttribute('id','del');
    del.innerText = 'Delete';

        let h3 = document.createElement("h3");
        h3.innerText = `Name: ${element.name}`;
      
        let p5 = document.createElement("p5");
        p5.innerText = `Area/locality: ${element.add}`;
        let p8 = document.createElement("p8");
        p8.innerText = ` House NO. : ${element.fnumber}`;
        let p9 = document.createElement("p9");
        p9.innerText = ` Street: ${element.street}`;

        //delete address  button

    del.addEventListener('click',function(){
        document.querySelector(".Add").style.display="none";
      adrs.splice(Add);
      localStorage.setItem('address',JSON.stringify(adrs));
     window.location.reload();
     
    });
    
        div.append(del,h3,p5,p8,p9);
       
        main.append(div);


        
    });
  }
