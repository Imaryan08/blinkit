
function product(fruits_vegetable,display){
    fruits_vegetable.forEach(element => {
        let div =document.createElement("div");
        div.style.borderRadius="4px"
        div.style.display="flex";
        div.style.flexDirection= "column";
        div.setAttribute("id","image")
        div.addEventListener("mouseover",()=>{
            clearInterval(play);
        })
        div.addEventListener("mouseout",()=>{
            return play= setInterval(autoplay,20);
        })

        let div1=  document.createElement("div");
        div1.style.display= "block";
        div1.style.textAlign="center";
        div1.style.border="0.8px solid #ebe0e0"
        div1.style.position="relative";

        let image= document.createElement("img");
        image.src= element.Image;
        image.style.width= "85%"
        let div5= document.createElement("div");
        div5.style.marginTop="-30px"
        let span=  document.createElement("span");
        span.textContent="+";
        span.setAttribute("id","plus")
        span.addEventListener("click",()=>{
            span.style.display="none";
            div4.setAttribute("id","cartBtn");
            div2.style.marginTop="40px"
        })

        let div4= document.createElement("div");
        div4.setAttribute("class","cartBtn");

        let span1=  document.createElement("span");
        span1.textContent="-";
        span1.style.fontSize="26px";
        span1.style.paddingRight="10px"
        span1.style.fontWeight="510"
        span1.style.paddingTop="-7px";
        span1.style.borderRadius="3px"
        span1.style.paddingLeft="7px"
        span1.style.cursor="pointer";
        span1.style.border="1px solid black"
        span1.style.background="whitesmoke"
        span1.addEventListener("click",()=>{
           if(span2.textContent==1)
           {
               div4.style.display="none";
               span.setAttribute("id","plus");
               
           }
           else{
               span2.textContent--;
           }
        });


        let span2= document.createElement("span");
        span2.textContent="1";
        span2.style.fontSize="21px";
        span2.style.paddingTop="4px";
        span2.style.fontWeight="580"


        let span3=  document.createElement("span");
        span3.textContent="+";
        span3.style.fontSize="21px";
        span3.style.paddingRight="8px"
        span3.style.paddingLeft="6px"
        span3.style.borderRadius="3px";
        span3.style.cursor="pointer";
        span3.style.border="1px solid black";
        span3.style.background="whitesmoke"
        span3.addEventListener("click",()=>{
            span2.textContent++;
        })
        

        let div2= document.createElement("div");
        div2.style.justifyContent="center";
        div2.style.textAlign="center";
        div2.style.marginTop="10px"
        div2.style.height="240px"

        let para= document.createElement("p");
        para.textContent= element.name;
        para.style.fontSize= "18px"
        para.style.fontFamily="'Comfortaa', cursive"
        para.style.fontWeight="normal"
        
        let div3= document.createElement("div");
        div3.style.boxSizing="border-box";
        div3.style.justifyContent="center";
        div3.style.textAlign="center";

        let para1 = document.createElement("p");
        para1.textContent= element.weight;
        para1.style.fontSize= "17px";
        para1.style.fontFamily="'Comfortaa', cursive"
        para1.style.fontWeight="normal";
        para1.style.color="grey";

        let para2= document.createElement("p");
        para2.textContent= "₹"+element.price;
        para2.style.fontSize= "18px"
        para2.style.marginTop= "-13px"

        div4.append(span1,span2,span3);
        div1.append(image,div5,div4);
        div5.append(span);
        div2.append(para);
        div3.append(para1,para2)
        div.append(div1,div2,div3);
        display.append(div);
    });
}
let slide = document.querySelector(".product");
let rightbtn= document.getElementById("arrow-right");
let leftbtn= document.getElementById("arrow-left");

rightbtn.addEventListener("click",()=>{
    slide.scrollLeft += 1200;
})


leftbtn.addEventListener("click",()=>{
    slide.scrollLeft -= 1200;
})

let moveleftward= slide.scrollWidth - slide.clientWidth;

function autoplay(){
    if(slide.scrollLeft > (moveleftward-1)){
        slide.scrollLeft -=  moveleftward;
    }
    else{
        slide.scrollLeft += 1;
    }
}
let play= setInterval(autoplay,20)


// -------------------------------


function product1(pharama,display){
    pharama.forEach(element => {
        let div =document.createElement("div");
        div.style.borderRadius="4px"
        div.style.display="flex";
        div.style.flexDirection= "column";
        div.setAttribute("id","image")
        div.addEventListener("mouseover",()=>{
            clearInterval(play1);
        })
        div.addEventListener("mouseout",()=>{
            return play1= setInterval(autoplay1,20);
        })

        let div1=  document.createElement("div");
        div1.style.display= "block";
        div1.style.textAlign="center";
        div1.style.border="0.8px solid #ebe0e0"
        div1.style.position="relative";

        let image= document.createElement("img");
        image.src= element.Image;
        image.style.width= "85%"
        let div5= document.createElement("div");
        div5.style.marginTop="-30px"
        let span=  document.createElement("span");
        span.textContent="+";
        span.setAttribute("id","plus")
        span.addEventListener("click",()=>{
            span.style.display="none";
            div4.setAttribute("id","cartBtn");
            div2.style.marginTop="40px"
        })

        let div4= document.createElement("div");
        div4.setAttribute("class","cartBtn");

        let span1=  document.createElement("span");
        span1.textContent="-";
        span1.style.fontSize="26px";
        span1.style.paddingRight="10px"
        span1.style.fontWeight="510"
        span1.style.paddingTop="-7px";
        span1.style.borderRadius="3px"
        span1.style.paddingLeft="7px"
        span1.style.cursor="pointer";
        span1.style.border="1px solid black"
        span1.style.background="whitesmoke"
        span1.addEventListener("click",()=>{
           if(span2.textContent==1)
           {
               div4.style.display="none";
               span.setAttribute("id","plus");
               
           }
           else{
               span2.textContent--;
           }
        });


        let span2= document.createElement("span");
        span2.textContent="1";
        span2.style.fontSize="21px";
        span2.style.paddingTop="4px";
        span2.style.fontWeight="580"


        let span3=  document.createElement("span");
        span3.textContent="+";
        span3.style.fontSize="21px";
        span3.style.paddingRight="8px"
        span3.style.paddingLeft="6px"
        span3.style.borderRadius="3px";
        span3.style.cursor="pointer";
        span3.style.border="1px solid black";
        span3.style.background="whitesmoke"
        span3.addEventListener("click",()=>{
            span2.textContent++;
        })
        

        let div2= document.createElement("div");
        div2.style.justifyContent="center";
        div2.style.textAlign="center";
        div2.style.marginTop="10px";
        div2.style.height="270px";

        let para= document.createElement("p");
        para.textContent= element.name;
        para.style.fontSize= "18px"
        para.style.fontFamily="'Comfortaa', cursive"
        para.style.fontWeight="normal"
        
        let div3= document.createElement("div");
        div3.style.boxSizing="border-box";
        div3.style.justifyContent="center";
        div3.style.textAlign="center";
        

        let para1 = document.createElement("p");
        para1.textContent= element.weight;
        para1.style.fontSize= "17px";
        para1.style.fontFamily="'Comfortaa', cursive"
        para1.style.fontWeight="normal";
        para1.style.color="grey";

        let para2= document.createElement("p");
        para2.textContent= "₹"+element.price;
        para2.style.fontSize= "18px"
        para2.style.marginTop= "-13px"

        div4.append(span1,span2,span3);
        div1.append(image,div5,div4);
        div5.append(span);
        div2.append(para);
        div3.append(para1,para2)
        div.append(div1,div2,div3);
        display.append(div);
    });
}
let slide1 = document.querySelector(".chemist");
let rightbtn1= document.getElementById("arrow-right1");
let leftbtn1= document.getElementById("arrow-left1");

rightbtn1.addEventListener("click",()=>{
    slide1.scrollLeft += 1200;
})


leftbtn1.addEventListener("click",()=>{
    slide1.scrollLeft -= 1200;
})

let moveleftward1= slide1.scrollWidth - slide1.clientWidth;

function autoplay1(){
    if(slide1.scrollLeft > (moveleftward1)){
        slide1.scrollLeft -=  moveleftward1;
    }
    else{
        slide1.scrollLeft += 1;
    }
}
let play1= setInterval(autoplay1,20)

// ---------------------------------------------------


function product2(biscuits,display){
    biscuits.forEach(element => {
        let div =document.createElement("div");
        div.style.borderRadius="4px"
        div.style.display="flex";
        div.style.flexDirection= "column";
        div.setAttribute("id","image")
        div.addEventListener("mouseover",()=>{
            clearInterval(play2);
        })
        div.addEventListener("mouseout",()=>{
            return play2= setInterval(autoplay2,20);
        })

        let div1=  document.createElement("div");
        div1.style.display= "block";
        div1.style.textAlign="center";
        div1.style.border="0.8px solid #ebe0e0"
        div1.style.position="relative";

        let image= document.createElement("img");
        image.src= element.Image;
        image.style.width= "85%"
        let div5= document.createElement("div");
        div5.style.marginTop="-30px"
        let span=  document.createElement("span");
        span.textContent="+";
        span.setAttribute("id","plus")
        span.addEventListener("click",()=>{
            span.style.display="none";
            div4.setAttribute("id","cartBtn");
            div2.style.marginTop="40px"
        })

        let div4= document.createElement("div");
        div4.setAttribute("class","cartBtn");

        let span1=  document.createElement("span");
        span1.textContent="-";
        span1.style.fontSize="26px";
        span1.style.paddingRight="10px"
        span1.style.fontWeight="510"
        span1.style.paddingTop="-7px";
        span1.style.borderRadius="3px"
        span1.style.paddingLeft="7px"
        span1.style.cursor="pointer";
        span1.style.border="1px solid black"
        span1.style.background="whitesmoke"
        span1.addEventListener("click",()=>{
           if(span2.textContent==1)
           {
               div4.style.display="none";
               span.setAttribute("id","plus");
               
           }
           else{
               span2.textContent--;
           }
        });


        let span2= document.createElement("span");
        span2.textContent="1";
        span2.style.fontSize="21px";
        span2.style.paddingTop="4px";
        span2.style.fontWeight="580";


        let span3=  document.createElement("span");
        span3.textContent="+";
        span3.style.fontSize="21px";
        span3.style.paddingRight="8px"
        span3.style.paddingLeft="6px"
        span3.style.borderRadius="3px";
        span3.style.cursor="pointer";
        span3.style.border="1px solid black";
        span3.style.background="whitesmoke"
        span3.addEventListener("click",()=>{
            span2.textContent++;
        })
        

        let div2= document.createElement("div");
        div2.style.justifyContent="center";
        div2.style.textAlign="center";
        div2.style.marginTop="10px";
        div2.style.height="260px";


        let para= document.createElement("p");
        para.textContent= element.name;
        para.style.fontSize= "18px"
        para.style.fontFamily="'Comfortaa', cursive"
        para.style.fontWeight="normal"
        
        let div3= document.createElement("div");
        div3.style.boxSizing="border-box";
        div3.style.justifyContent="center";
        div3.style.textAlign="center";

        let para1 = document.createElement("p");
        para1.textContent= element.weight;
        para1.style.fontSize= "17px";
        para1.style.fontFamily="'Comfortaa', cursive"
        para1.style.fontWeight="normal";
        para1.style.color="grey";

        let para2= document.createElement("p");
        para2.textContent= "₹"+element.price;
        para2.style.fontSize= "18px"
        para2.style.marginTop= "-13px"

        div4.append(span1,span2,span3);
        div1.append(image,div5,div4);
        div5.append(span);
        div2.append(para);
        div3.append(para1,para2)
        div.append(div1,div2,div3);
        display.append(div);
    });
}
let slide2 = document.querySelector(".biscuits");
let rightbtn2= document.getElementById("arrow-right2");
let leftbtn2= document.getElementById("arrow-left2");

rightbtn2.addEventListener("click",()=>{
    slide2.scrollLeft += 1200;
})


leftbtn2.addEventListener("click",()=>{
    slide2.scrollLeft -= 1200;
})

let moveleftward2= slide2.scrollWidth - slide2.clientWidth;

function autoplay2(){
    if(slide2.scrollLeft > (moveleftward2)){
        slide2.scrollLeft -=  moveleftward2;
    }
    else{
        slide2.scrollLeft += 1;
    }
}
let play2= setInterval(autoplay2,20)
// ------------------------------------------


function product3(dairyprod,display){
    dairyprod.forEach(element => {
        let div =document.createElement("div");
        div.style.borderRadius="4px"
        div.style.display="flex";
        div.style.flexDirection= "column";
        div.setAttribute("id","image")
        div.addEventListener("mouseover",()=>{
            clearInterval(play3);
        })
        div.addEventListener("mouseout",()=>{
            return play3= setInterval(autoplay3,20);
        })

        let div1=  document.createElement("div");
        div1.style.display= "block";
        div1.style.textAlign="center";
        div1.style.border="0.8px solid #ebe0e0"
        div1.style.position="relative";

        let image= document.createElement("img");
        image.src= element.Image;
        image.style.width= "85%"
        let div5= document.createElement("div");
        div5.style.marginTop="-30px"
        let span=  document.createElement("span");
        span.textContent="+";
        span.setAttribute("id","plus")
        span.addEventListener("click",()=>{
            span.style.display="none";
            div4.setAttribute("id","cartBtn");
            div2.style.marginTop="40px"
        })

        let div4= document.createElement("div");
        div4.setAttribute("class","cartBtn");

        let span1=  document.createElement("span");
        span1.textContent="-";
        span1.style.fontSize="26px";
        span1.style.paddingRight="10px"
        span1.style.fontWeight="510"
        span1.style.paddingTop="0px";
        span1.style.borderRadius="3px"
        span1.style.paddingLeft="7px"
        span1.style.cursor="pointer";
        span1.style.border="1px solid black"
        span1.style.background="whitesmoke"
        span1.addEventListener("click",()=>{
           if(span2.textContent==1)
           {
             div4.style.display="none";
             
           }
           else{
               span2.textContent--;
           }
        });


        let span2= document.createElement("span");
        span2.textContent="1";
        span2.style.fontSize="21px";
        span2.style.paddingTop="4px";
        span2.style.fontWeight="580"


        let span3=  document.createElement("span");
        span3.textContent="+";
        span3.style.fontSize="21px";
        span3.style.paddingRight="8px"
        span3.style.paddingLeft="6px"
        span3.style.borderRadius="3px";
        span3.style.cursor="pointer";
        span3.style.border="1px solid black";
        span3.style.background="whitesmoke"
        span3.addEventListener("click",()=>{
            span2.textContent++;
        })
        

        let div2= document.createElement("div");
        div2.style.justifyContent="center";
        div2.style.textAlign="center";
        div2.style.marginTop="10px";
        div2.style.height="290px";

        let para= document.createElement("p");
        para.textContent= element.name;
        para.style.fontSize= "18px"
        para.style.fontFamily="'Comfortaa', cursive"
        para.style.fontWeight="normal"
        
        let div3= document.createElement("div");
        div3.style.boxSizing="border-box";
        div3.style.justifyContent="center";
        div3.style.textAlign="center";

        let para1 = document.createElement("p");
        para1.textContent= element.weight;
        para1.style.fontSize= "17px";
        para1.style.fontFamily="'Comfortaa', cursive"
        para1.style.fontWeight="normal";
        para1.style.color="grey";

        let para2= document.createElement("p");
        para2.textContent= "₹"+element.price;
        para2.style.fontSize= "18px"
        para2.style.marginTop= "-13px"

        div4.append(span1,span2,span3);
        div1.append(image,div5,div4);
        div5.append(span);
        div2.append(para);
        div3.append(para1,para2)
        div.append(div1,div2,div3);
        display.append(div);
    });
}
let slide3 = document.querySelector(".dairy");
let rightbtn3= document.getElementById("arrow-right3");
let leftbtn3= document.getElementById("arrow-left3");

rightbtn3.addEventListener("click",()=>{
    slide3.scrollLeft += 1200;
})


leftbtn3.addEventListener("click",()=>{
    slide3.scrollLeft -= 1200;
})

let moveleftward3= slide3.scrollWidth - slide3.clientWidth;

function autoplay3(){
    if(slide3.scrollLeft > (moveleftward3)){
        slide3.scrollLeft -=  moveleftward3;
    }
    else{
        slide3.scrollLeft += 1;
    }
}
let play3= setInterval(autoplay3,20)


export {product,product1,product2,product3};