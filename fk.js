const mobiles = [
  {
    id : "1",
    name: "iPhone 15",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",
    description: "Apple iPhone 15 with A16 Bionic chip, 48MP camera, and iOS.",
    price: 79999
  },
  {
    id : "2",
    name: "Samsung Galaxy S23",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=70",
    description: "Samsung flagship phone with Snapdragon 8 Gen 2 and AMOLED display.",
    price: 74999
  },
  {
    id : "3",
    name: "OnePlus 12",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/s/q/12-cph2573-oneplus-original-imahf4hgzskrnmz2.jpeg?q=70",
    description: "High-performance smartphone with fast charging and OxygenOS.",
    price: 64999
  },
  {
    id : "4",
    name: "Google Pixel 8",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/r/l/-original-imagxgauvgvcretu.jpeg?q=70",
    description: "Pixel phone with advanced AI camera features and clean Android.",
    price: 70999
  },
  {
    id : "5",
    name: "Redmi Note 13 Pro",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/8/i/-original-imagwu89u7fgsq4b.jpeg?q=70",
    description: "Mid-range phone with 200MP camera and powerful processor.",
    price: 25999
  },
  {
    id : "6",
    name: "Realme GT 5",
    image: "https://rukminim2.flixcart.com/image/312/312/l3rmzrk0/mobile/f/z/n/-original-imagetme3gzbnc3z.jpeg?q=70",
    description: "Gaming-focused smartphone with fast refresh rate display.",
    price: 32999
  },
  {
    id : "7",
    name: "Vivo V29",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/e/x/v29-5g-v2250-vivo-original-imagtyqfjag4qbdw.jpeg?q=70",
    description: "Stylish smartphone with strong camera and AMOLED display.",
    price: 36999
  },
  {
    id : "8",
    name: "Motorola Edge 40",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/q/6/edge-40-pay40028in-motorola-original-imagpqzdnhrgvhj7.jpeg?q=70",
    description: "Clean Android experience with curved display and fast charging.",
    price: 29999
  }
];

let div = document.getElementById("container");
let cart = [];
function displayMobiles(data){
  container.innerHTML=" ";
  let b = data.map((value)=>{
    return `
    <div id="cards">
            <h1>${value.name}</h1>
            <img src="${value.image}" alt="${value.name}">
            <p>${value.description}</p>
            <mark>₹${value.price}</mark>
            <br><br>
            <button onclick="add(${value.id})" id="ac">Add to Cart</button>
    </div>
    `
  })
     div.innerHTML = b.join("");
}
displayMobiles(mobiles);

function searchinput(){
  let search = document.getElementById('input').value.toLowerCase();
  let tempData = mobiles.filter((item => item.name.toLowerCase().includes(search)));
  displayMobiles(tempData);
}

function add(product){
  let teamdata = mobiles.find(item => item.id == product);
  alert(`${teamdata.name} added to cart`);
  cart.push(teamdata);
  totalamount();
  document.getElementById("cart").innerHTML = cart.length;
}

function totalamount(){
  let total = cart.reduce((acc, curr) => acc + curr.price, 0);
  document.getElementById("ta").innerHTML = total;
}
