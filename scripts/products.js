
  var d = "all.json";
   
  async function getproduct(d){
      console.log('d:', d)
      try{
         let P_data = await fetch(`https://littlebluepenguin.s3.ap-south-1.amazonaws.com/data/bakeryAndBiscuits/${d}`);
            let  data = await P_data.json();
            renderproduct(data);
            return data;
      }catch(err){
          console.log(err);
      }
  }
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
      let cartCount = document.getElementById("cart-count");
      cartCount.textContent = " Cart Count : " + cart.length;
    }
            
      async function sortProducts(){
            var data = await getproduct(d);
             

             var sortvalue =document.getElementById("sortButton").value;
              
               if(sortvalue=="asc"){
                   data.sort(function(a,b){
                        var Pra="";
                         var Prb="";
                       for(var i=1; i<a.price.length; i++){
                           Pra += a.price[i];
                       }
                       for(var i=1; i<b.price.length; i++){
                           Prb += b.price[i];
                       }

                       return Number(Pra) - Number(Prb);
                   });
               }

               if(sortvalue=="desc"){
                data.sort(function(a,b){
                     var Pra="";
                      var Prb="";
                    for(var i=1; i<a.price.length; i++){
                        Pra += a.price[i];
                    }
                    for(var i=1; i<b.price.length; i++){
                        Prb += b.price[i];
                    }

                    return Number(Prb) - Number(Pra);
                });
               }
             renderproduct(data);

      } 

      function renderproduct(data){
           document.getElementById("box").textContent="";
             data.forEach(function(D){
                var Div =document.createElement("div");
                Div.setAttribute("class","col-3 productDetails");
                Div.setAttribute("id","product_div");
 
                let div1 = document.createElement("div");
                div1.style.display="block";
                 var Img = document.createElement("img");
                 Img.setAttribute("src",D.img);

                 let heading= document.createElement("div");
                 heading.style.height="90px"
                 var H6 =document.createElement("h6");
                 H6.textContent=D.productName;

                 var P = document.createElement("p");
                 P.textContent=D.quantity;

                 var Div2= document.createElement("div");
                   Div2.setAttribute("id","small_div");
                 var Div_21 = document.createElement("div");
                 Div_21.setAttribute("class","price");
                 Div_21.setAttribute("id","very_small");

                 var Spam = document.createElement("span");
                 Spam.textContent=D.price;

                  var Button = document.createElement("button");
                  Button.setAttribute("id","duttom");
                  Button.textContent="Add to Cart";
                  Button.onclick = function (event) {
                    // add to cart --> items should get added to cart --> cart count should change in navbar;
                    addToCart(D);
                  };

                  Div_21.append(Spam);
                  div1.append(Img)
                  heading.append(H6);
                  Div2.append(Div_21,Button);
                  Div.append(div1,heading,P,Div2);
                  document.getElementById("box").append(Div);

                  

             });
              

             function addToCart(prod) {
                let cart = JSON.parse(localStorage.getItem("cart"));
      
                cart.push(prod);
      
                localStorage.setItem("cart", JSON.stringify(cart));
                refreshCartCount(cart);
              }
      }


let foot = document.querySelector('.footer');

import footer from '/scripts/footer.js';

foot.innerHTML = footer();
     