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
  