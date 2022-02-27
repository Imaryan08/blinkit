var homePageData=[
    {
        id: 1,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/Slice-1_0.png?6214463673bd2"
        
    },
    {
        id:2,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/Slice-2_1.png?621446371e144"
    },
    {
        id:3,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/Slice-3_0.png?62144637b8cff"
    },
    {
        id:4,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/Slice-4_0.png?6214463854bcc"
    },
    {
        id:5,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/Slice-5_0.png?62144638e5ea0"
    },
    {
        id:6,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/Slice-6_0.png?621446399a1d9"
    },
    {
        id:7,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/Slice-7_0.png?6214463a3cfa8"
    },
    {
        id:8,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/Slice-8_0.png?6214463ad02a8"
    },
    {
        id:9,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/Slice-9_0.png?6214463b78640"
    },
    {
        id:10,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/Slice-10_0.png?6214463c42c41"
    },
    {
        id:11,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/Slice-11_0.png?6214463ce30da"
    },
    {
        id:12,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/Slice-12_0.png?6214463d94ffe"
    },
    {
        id:13,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/desktop-13-tea-coffee-health-drink_1.png?6214463e35243"
    },
    {
        id:14,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/Slice-14_0.png?6214463ec4a10"
    },
    {
        id:15,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/Slice-15_0.png?6214463f64a70"
    },
    {
        id:16,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/Slice-16_0.png?6214464018d66"
    },
    {
        id:17,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-02/18-desktop-home-office-1.png?62144640bb713"
    },
    {
        id:18,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/Slice-18_0.png?62144641602f4"
    },
    {
        id:19,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/Slice-19_0.png?6214464203198"
    },
    {
        id:20,
        image_link:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=137,h=190/layout-engine/2022-01/Slice-20_0.png?62144642aa29d"
    }
];
function showdata(homePageData){
    let div = document.querySelector(".product-categories-20images");
    homePageData.forEach(element => {
        let div1 = document.createElement("div");
        div1.style.textAlign="center";
        div1.style.display="block"
        div1.style.marginTop="5px"
        div1.setAttribute("id","hovering-effect")

        let image= document.createElement("img");
        image.src= element.image_link;
        image.style.width="100%"

        div1.append(image);
        div1.addEventListener("click",()=>{
            if(element.id==1)
            {
                window.location.href="veg_fruits.html"
            }
            else if(element.id==2)
            {
                window.location.href=""
            }
            else if(element.id==3)
            {
                window.location.href="breakfast.html"
            }
            else if(element.id==4)
            {
                window.location.href="product.html"
            }
            else if(element.id==5)
            {
                window.location.href=""
            }
            else if(element.id==6)
            {
                window.location.href=""
            }
            else if(element.id==7)
            {
                window.location.href=""
            }
            else if(element.id==8)
            {
                window.location.href=""
            }
            else if(element.id==9)
            {
                window.location.href=""
            }
            else if(element.id==10)
            {
                window.location.href="https://blinkit.com/cln/everyday-low-prices/clid/61f00a9ce096460017038f12"
            }
            else if(element.id==11)
            {
                window.location.href="atta_rice.html"
            }
            else if(element.id==12)
            {
                window.location.href="masala_oil.html"
            }
            else if(element.id==13)
            {
                window.location.href="https://blinkit.com/cln/everyday-low-prices/clid/61962f6e038dff0016d41f97"
            }
            else if(element.id==14)
            {
                window.location.href="https://blinkit.com/cln/everyday-low-prices/clid/61eec076e096460017038efb"
            }
            else if(element.id==15)
            {
                window.location.href="personal_care.html"
            }
            else if(element.id==16)
            {
                window.location.href="cleaning.html"
            }
            else if(element.id==17)
            {
                window.location.href="https://blinkit.com/cln/everyday-low-prices/clid/61eea21fa1664e0017ab223f"
            }
            else if(element.id==18)
            {
                window.location.href="https://blinkit.com/cln/everyday-low-prices/clid/5f33cb29e75ea1001632c1fd"
            }
            else if(element.id==19)
            {
                window.location.href="https://blinkit.com/cln/everyday-low-prices/clid/61ee8cd7a1664e0017ab223e"
            }
            else{
                window.location.href="https://blinkit.com/cln/everyday-low-prices/clid/61eebc65a1664e0017ab2241"
            }
        })
        div.append(div1);
    });
}
showdata(homePageData);

// bank offers slide 
let slide = document.querySelector("#banks_offer");
let rightbtn= document.querySelector(".next");
let leftbtn= document.querySelector(".prev");

rightbtn.addEventListener("click",()=>{
    slide.scrollLeft += 400;
})


leftbtn.addEventListener("click",()=>{
    slide.scrollLeft -= 400;
})

// -----------------------------
import {product,product1,product2,product3} from "/components/homepagelogic.js"
var fruits_vegetable = [
    {
      Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/447623a.jpg",
      name:"Baby Onion (Sirka Pyaz)",
      weight: "250 g",
      price:14.00, 
    },
    {
      Image :"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/391306a.jpg",
      name:"Onion 1 kg",
      weight:"1 kg",
      price:40.00,
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/421703a.jpg",
        name:"Ginger (Adrak)",
        weight:"250 g",
        price:15.00,
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/438489a.jpg",
        name:"Picador Chilli",
        weight:"250 g",
        price:26.00,
    },
    {
     Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/470485a.jpg",
     name:"Apple - Shimla",
     weight:"1 unit",
     price:36.00,   
    },
    {
      Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/394525a.jpg",
      name:"Kiwi",
      weight:"3 units",
      price:76.00,
    },
    {
      Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/4943a.jpg",
      name:"Brown Coconut (Nariyal)",
      weight:"1 unit",
      price:36.00,   
    },
    {
       Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/3907a.jpg",
       name:"Ivy Gourd (Kundru)",
       weight:"250 gm" ,
       price:22.00,
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/317559a.jpg",
        name:"Pomegranate (Anaar)",
        weight:"720 g - 800 g",
        price:152.00,
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/445280a.jpg",
        name:"Brown Chana Sprouts",
        weight:"150 g - 160 g",
        price:27.00,
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_203822.jpg",
        name:"Raw Turmeric",
        weight:"250 g",
        price:11.00,
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/440980a.jpg",
        name:"Red Capsicum",
        weight:"275 g - 325 g",
        price:156.00,
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/440981a.jpg",
        name:"Yellow Capsicum",
        weight:" g - 325 g",
        price:156,
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/440980a.jpg",
        name:"Red Capsicum",
        weight:"275 g - 325 g",
        price:156.00,
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_443552.jpg",
        name:"Red Cabbage",
        weight:"300 g - 500 g",
        price:55.00,
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/467772a.jpg",
        name:"Kachalu",
        weight:"500 g",
        price:22.00,
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/443547a.jpg",
        name:"Raw Papaya",
        weight:"400 g - 600 g",
        price:19.00,
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_98874.jpg",
        name:"Green Zucchini",
        weight:"500 g",
        price:52.00,
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/467637a.jpg",
        name:"Beetroot (Chukandar)",
        weight:"250 g",
        price:20,
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_467644.jpg",
        name:"Green Capsicum",
        weight:"80 g - 110 g",
        price:15.00,
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/467650a.jpg",
        name:"French Beans",
        weight:"250 g",
        price:27.00,
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_467642.jpg",
        name:"Cabbage",
        weight:"400 g - 600 g",
        price:45.00,
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_445396.jpg",
        name:"Cauliflower (Gobhi)",
        weight:"400 g - 600 g",
        price:25.00
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/sliding_image/332740a.jpg",
        name:"Local Carrot (Gajar)",
        weight:"500 g",
        price:12.00
    },
    {
        Image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_445188.jpg",
        name:"Corn Cob (Bhutta)",
        weight:"1 unit",
        price:30.00,
    }
]

let display= document.querySelector(".product");
product(fruits_vegetable,display)


var pharama=[
    {
        name: "Dettol Surface Disinfection",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/387434a.jpg",
        weight: "1 l",
        price: "₹331"
    },
    {
        name: "Savlon Antiseptic Liquid",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/423980a.jpg",
        weight: "1 l",
        price: "₹295"
    },
    {
        name: "Dabur 2X Immunity Chyawanprash",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/394323a.jpg",
        weight: "950 g",
        price: "₹352"
    },
    {
        name: "Dabur 2 X Immunity Chyawanprash",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/10794a.jpg",
        weight: "500 g + 50 g",
        price: "₹200"
    },
    {
        name: "Dabur Chyawanprash Sugar Free",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/25118a.jpg",
        weight: "900 g",
        price: "₹387"
    },
    {
        name: "Dabur Chyawanprash",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/35002a.jpg",
        weight: "2 kg",
        price: "₹571"
    },
    {
        name: "Patanjali Chyawanprash",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/116598a.jpg",
        weight: "1 kg",
        price: "₹210"
    },
    {
        name: "Baidyanath Special Chyawanprash",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/249247a.jpg",
        weight: "1 kg",
        price: "₹313"
    },
    {
        name: "Saffola Immuniveda Chyawanprash",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/476608a.jpg",
        weight: "1 kg",
        price: "₹281"
    },
    {
        name: "Durex Air Ultra Thin Condom",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/382664a.jpg",
        weight: "10 units",
        price: "₹195"
    },
    {
        name: "Durex Extra Time Condom",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/390793a.jpg",
        weight: "10 units",
        price: "₹186"
    },
    {
        name: "Durex Extra Ribbed Condom",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/390791a.jpg",
        weight: "10 units",
        price: "₹186"
    },
    {
        name: "Durex Mutual Climax Condom",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/401185a.jpg",
        weight: "3 units",
        price: "₹109"
    },
    {
        name: "Durex Invisible Super Ultra",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/434550a.jpg",
        weight: "3 units",
        price: "₹118"
    },
    {
        name: "Durex Extra Dots Condom",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/390789a.jpg",
        weight: "10 units",
        price: "₹228"
    },
    {
        name: "KamaSutra Orgasmax 4 in 1 Condom",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/399414a.jpg",
        weight: "12 units",
        price: "₹153"
    },
    {
        name: "KamaSutra Ultra Dotted Condom",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/474876a.jpg",
        weight: "20 units",
        price: "₹224"
    },
    {
        name: "KamaSutra Strawberry Flavoured Dotted Condom",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/474878a.jpg",
        weight: "10 units",
        price: "₹100"
    },
    {
        name: "KamaSutra Ultra Thin+ Condom",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/474879a.jpg",
        weight: "10 units",
        price: "₹166"
    },
    {
        name: "Manforce 3 in 1 Wild Chocolate Condom",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/307619a.jpg",
        weight: "10 units",
        price: "₹68"
    },
]
let display1= document.querySelector(".chemist");
product1(pharama,display1)
//sliding functionality here


let biscuits=[
    
    {
        name: "Maggi Masala Noodles - Pack of 12",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/383480a.jpg",
        weight: "12x70 g",
        price: "₹138"
    },
    {
        name: "Maggi Masala 2 minute instant Noodles",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/169812a.jpg",
        weight: "560 g",
        price: "₹96"
    },
    {
        name: "Maggi Nutri-Licious Masala Veg Atta Noodles",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/179771a.jpg",
        weight: "290 g",
        price: "₹94"
    },
    {
        name: "Maggi Masala 2 minute instant Noodles",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/171258a.jpg",
        weight: "280 g",
        price: "₹48"
    },
    {
        name: "Maggi Special Masala Spicy",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/395976a.jpg",
        weight: "12x70 g",
        price: "₹180"
    },
    {
        name: "Maggi Masala Oats Noodles",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/179774a.jpg",
        weight: "290 g",
        price: "₹110"
    },
    {
        name: "Maggi Chicken Noodles",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/169815a.jpg",
        weight: "284 g",
        price: "₹58"
    },
    {
        name: "Maggi Veggie Masala Noodles",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/479859a.jpg",
        weight: "248 g",
        price: "₹43"
    },
    {
        name: "Sunfeast Yippee Magic Masala Instant",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/422948a.jpg",
        weight: "12 x 67.5 g",
        price: "₹123"
    },
    {
        name: "Sunfeast Yippee Power up Atta Instant Noodles",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/409398a.jpg",
        weight: "280 g",
        price: "₹75"
    },
    {
        name: "Sunfeast Yippee Magic Masala Noodles",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/367417a.jpg",
        weight: "405 g",
        price: "₹69"
    },
    {
        name: "Sunfeast Yippee Mood Masala Noodles",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/371844a.jpg",
        weight: "260 g",
        price: "₹50"
    },
    {
        name: "Sunfeast Yippee Magic Masala",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/17309a.jpg",
        weight: "240 g",
        price: "₹43"
    },
    {
        name: "Top Ramen Curry Veg Noodles",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/108927a.jpg",
        weight: "280 g",
        price: "₹64"
    },
    {
        name: "Top Ramen Masala Noodles",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/458201a.jpg",
        weight: "840 g",
        price: "₹111"
    },
    {
        name: "Top Ramen Masala Noodles",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/124894a.jpg",
        weight: "280 g",
        price: "₹39"
    },
    {
        name: "Top Ramen Atta Masala Noodles",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/114970a.jpg",
        weight: "280 g",
        price: "₹73"
    },
    {
        name: "Top Ramen Masala Noodles (420 g)",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/280541a.jpg",
        weight: "420 g",
        price: "₹65"
    },
    {
        name: "Smith & Jones Tadka Maar ke Masala Noodles",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/440081a.jpg",
        weight: "4x60 g",
        price: "₹42"
    },
    {
        name: "MasterChow Healthy Noodles",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/474932a.jpg",
        weight: "300 g",
        price: "₹150"
    },
    {
        name: "MTR Dosa Breakfast Mix",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/18923a.jpg",
        weight: "500 g",
        price: "₹114"
    },
    {
        name: "MTR 3 Minute Khatta Meetha Poha Breakfast Mix",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/23464a.jpg",
        weight: "60 g",
        price: "₹25"
    },
    {
        name: "Tata Sampann Fibre Rich Dosa Breakfast Mix",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/425331a.jpg",
        weight: "180 g",
        price: "₹64"
    },
    {
        name: "Kellogg's Original",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/406721a.jpg",
        weight: "1.2 kg",
        price: "₹359"
    },
    {
        name: "Kellogg's Original, High in Irons",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/129a.jpg",
        weight: "475 g",
        price: "₹185"
    },
    {
        name: "Kellogg's Real Almond Honey | High in Iron",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/279951a.jpg",
        weight: "1 kg",
        price: "₹550"
    },
    {
        name: "Kellogg's Real Almond Honey | Breakfast Cereals",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/115808a.jpg",
        weight: "650 g",
        price: "₹341"
    },
    {
        name: "GHD Crunchy Corn Flakes - 875 g",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/409186a.jpg",
        weight: "875 g",
        price: "₹186"
    },
]
let display2= document.querySelector(".biscuits");
product2(biscuits,display2)

var dairyprod=[
    {
        name: "Amul Masti Spiced Buttermilk",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/175086a.jpg",
        weight: "1 l",
        price: "₹50"
    },
    {
        name: "Nandini Toned Fresh Milk",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/37083a.jpg",
        weight: "500 ml",
        price: "₹19"
    },
    {
        name: "Amul Lassi",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/178319a.jpg",
        weight: "1 l",
        price: "₹70"
    },
    {
        name: "Nandini Standardized Fresh Milk",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/309921a.jpg",
        weight: "500 ml",
        price: "₹22"
    },
    {
        name: "Amul Kool Cafe Milk",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/341598a.jpg",
        weight: "200 ml",
        price: "₹25"
    },
    {
        name: "Amul Lactose Free Milk",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/206314a.jpg",
        weight: "250 ml",
        price: "₹25"
    },
    {
        name: " Mango Flavoured Yogurt",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/27389a.jpg",
        weight: "100 g",
        price: "₹25"
    },
    {
        name: "Britannia Cow Chocolate Milkshake",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/401246a.jpg",
        weight: "200 ml",
        price: "₹26"
    },
    {
        name: "Britannia Cow Strawberry Milkshake",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/401256a.jpg",
        weight: "200 ml",
        price: "₹26"
    },
    {
        name: "Britannia Vanilla Thick Milkshake",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/401249a.jpg",
        weight: "200 ml",
        price: "₹26"
    },
    {
        name: "Cavin's Strawberry Milk Shake",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/16727a.jpg",
        weight: "200 ml",
        price: "₹27"
    },
    {
        name: "Epigamia Origins Chocolate Milkshake",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/477785a.jpg",
        weight: "180 ml",
        price: "₹28"
    },
    {
        name: "Mother Dairy Low Fat Milk",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/207766a.jpg",
        weight: "450 ml",
        price: "₹29"
    },
    {
        name: "Nandini Good Life Toned Milk",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/309894a.jpg",
        weight: "500 ml",
        price: "₹29"
    },
    {
        name: "Amul Kool Cafe",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/19135a.jpg",
        weight: "200 ml",
        price: "₹30"
    },
    {
        name: "Amul Kool Koko Chocolate Flavoured Milk",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/19503a.jpg",
        weight: "200 ml",
        price: "₹30"
    },
    {
        name: "Amul Kool Mango Milk Shake",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/107775a.jpg",
        weight: "200 ml",
        price: "₹30"
    },
    {
        name: "Paper Boat Chocolate Milk Shake",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/399186a.jpg",
        weight: "180 ml",
        price: "₹30"
    },
    {
        name: "Paper Boat Coriander Buttermilk",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/423156a.jpg",
        weight: "250 ml",
        price: "₹30"
    },
    {
        name: "Paper Boat Jeera Buttermilk",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/423155a.jpg",
        weight: "250 ml",
        price: "₹30"
    },
    {
        name: "Amul Kool Latte Flavoured Milk",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/304578a.jpg",
        weight: "200 ml",
        price: "₹40"
    },
    {
        name: "Diet Tofu Masala Tofu",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/394016a.jpg",
        weight: "100 g",
        price: "₹40"
    },
    {
        name: "D'lecta Dairy Cream",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/32509a.jpg",
        weight: "200 ml",
        price: "₹41"
    },
    {
        name: "Akshayakalpa Organic Milk",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/478884a.jpg",
        weight: "500 ml",
        price: "₹44"
    },
    {
        name: "Nutralite DoodhShakti Probiotic",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/447847a.jpg",
        weight: "100 g",
        price: "₹46"
    },
    {
        name: "G Fresh White Eggs",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/391810a.jpg",
        weight: "6 units",
        price: "₹48"
    },
    {
        name: "Nescafe Drink Coffee",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/400926a.jpg",
        weight: "180 ml",
        price: "₹48"
    },
    {
        name: "Nescafe Intense Cappuccino",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/400927a.jpg",
        weight: "180 ml",
        price: "₹49"
    },
    {
        name: "Paper Boat Thandai",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/301098a.jpg",
        weight: "180 ml",
        price: "₹49"
    },
    {
        name: "Amul Butter (100 g)",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/159a.jpg",
        weight: "100 g",
        price: "₹50"
    },
    {
        name: "Mother Dairy Butter",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/36961a.jpg",
        weight: "100 g",
        price: "₹50"
    },
    {
        name: "Mother Dairy Classic Curd",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/329549a.jpg",
        weight: "400 g",
        price: "₹50"
    },
    {
        name: "Amul Garlic & Herbs Butter",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/55504a.jpg",
        weight: "100 g",
        price: "₹51"
    },
    {
        name: "Amul Unsalted Butter",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/245871a.jpg",
        weight: "100 g",
        price: "₹51"
    },
    {
        name: "iD Creamy Thick Curd",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/337595a.jpg",
        weight: "400 g",
        price: "₹55"
    },
    {
        name: "Delfrez Active Eggs with DHA",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/477126a.jpg",
        weight: "6 units",
        price: "₹56"
    },
    {
        name: "Delfrez Heart Eggs",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/477127a.jpg",
        weight: "6 units",
        price: "₹56"
    },
    {
        name: "Delfrez Pro Eggs ",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/137072a.jpg",
        weight: "6 units",
        price: "₹56"
    },
    {
        name: "Milky Mist Chiplet Butter",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/479676a.jpg",
        weight: "100 g (10 x 10 g)",
        price: "₹56"
    },
    {
        name: "Amul Butter (Chiplets)",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/32416a.jpg",
        weight: "10 units",
        price: "₹59"
    },
    {
        name: "100% Wholewheat Multigrain Loaf",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/477955a.jpg",
        weight: "230 g",
        price: "₹59"
    },
    {
        name: "Bio Nutrients Pure Diet Gold Tofu",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/181150a.jpg",
        weight: "200 g",
        price: "₹60"
    },
    {
        name: "Diet Tofu Soya Tofu",
        Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/391896a.jpg",
        weight: "200 g",
        price: "₹60"
    },
]
let display3= document.querySelector(".dairy");
product3(dairyprod,display3)


let foot = document.querySelector('.footer');

    import footer from '/components/footer.js';

    foot.innerHTML = footer();


    // let nav = document.querySelector('.nav');

    // import navbar from '/components/navbar.js';

    // nav.innerHTML = navbar();