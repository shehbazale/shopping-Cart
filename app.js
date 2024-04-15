const showDetails = document.querySelector(".shop-section");
const counter = document.querySelector(".badge");
const phones = [
  {
    id: 1,
    image: "infinix-note-40-pro.webp",
    brand: "Samsung",
    model: "S20",
    ram: 8,
    rom: 256,
    camera: "20 Megapixel",
    price: 15000,
  },
  {
    id: 2,
    image: "oppo-reno-11-5g.webp",
    brand: "Xiomi",
    model: "note10",
    ram: 4,
    rom: 64,
    camera: "10 Megapixel",
    price: 15000,
  },
  {
    id: 3,
    image: "oppo-reno-11f-5g.webp",
    brand: "Infinix",
    model: "z10",
    ram: 2,
    rom: 16,
    camera: "5 Megapixel",
    price: 15000,
  },
  {
    id: 4,
    image: "samsung-galaxy-a05s.webp",
    brand: "Tecno",
    model: "spark10",
    ram: 12,
    rom: 512,
    camera: "25 Megapixel",
    price: 15000,
  },
  {
    id: 5,
    image: "tecno-spark-10-pro.webp",
    brand: "Iphone",
    model: "14",
    ram: 4,
    rom: 1024,
    camera: "30 Megapixel",
    price: 15000,
  },
  {
    id: 6,
    image: "xiaomi-redmi-12.webp",
    brand: "Oppo",
    model: "F11",
    ram: 8,
    rom: 256,
    camera: "20 Megapixel",
    price: 15000,
  },
  {
    id: 7,
    image: "xiaomi-redmi-a3.webp",
    brand: "Vivo",
    model: "y20",
    ram: 4,
    rom: 64,
    camera: "8 Megapixel",
    price: 15000,
  },
  {
    id: 8,
    image: "tecno-spark-10-pro.webp",
    brand: "Techo",
    model: "s50",
    ram: 50,
    rom: 1024,
    camera: "60 Megapixel",
    price: 300000,
  },
];
function initializeCartCount() {
  const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
  counter.innerHTML = cart.length;
}

function render() {
  showDetails.innerHTML = "";
  phones.forEach((phone, index) => {
    showDetails.innerHTML += ` 
  <div class="box1 box boxHover">
  <div class="box-content">
    <img src="image/products/${phone.image}"/>
    <p> ${phone.brand} ${phone.model}</p>
    <p> ${phone.ram}GB RAM | ${phone.rom} GB ROM </p>
    <p>${phone.camera}</p>
    <p id='price'><sup>Rs</sup> ${phone.price}</p>
    <button class="btn btnRel" onclick="addToCart('${phone.image}','${phone.brand}','${phone.model}', 
    ${phone.ram},${phone.rom},'${phone.camera}','${phone.price}',${phone.id})">
    <span class="btn-text-one">Add to Cart</span>
    <span class="btn-text-two"><img src='image/cart.png'></span>
</button>
    <div
</div>`;
    // addToCart(phone)
  });
}
render();
function addToCart(image, brand, model, ram, rom, camera, price, id) {
  let newArr = JSON.parse(localStorage.getItem("cartItems")) || [];
  // alert('added');
  // console.log('product is ', brand)
  const phone = {
    id: id,
    image: image,
    brand: brand,
    model: model,
    ram: ram,
    rom: rom,
    camera: camera,
    price: price,
    quantity: 1,
  };
  const item = newArr.some((cartItem) => cartItem.id === id);
  // console.log('alrady exist')
  if (item) {
    console.log("already exist");
    swal({
      title: "Item already in the cart",
      button: false,
      icon: "error",
      timer: 2000,
    });
  } else {
    newArr.push(phone);
    localStorage.setItem("cartItems", JSON.stringify(newArr));
    // swal("Item!", "successfully added", "success");
    counter.innerHTML = newArr.length;
    swal({
      title: "Item added to cart",
      button: false,
      icon: "success",
      timer: 2000,
    });
  }
}
function checkout() {
  window.location = "cart.html";
}
// to show the items when the page reload
window.onload = initializeCartCount;

//  Hero image slider section

function first() {
  document.querySelector(".hero-section").style.backgroundImage =
    "url(image/mobile.jpg)";
}
// setInterval (first,4000);
function second() {
  document.querySelector(".hero-section").style.backgroundImage =
    "url(image/pak.jpg)";
}
function third() {
  document.querySelector(".hero-section").style.backgroundImage =
    "url(image/checkbuy.jpg)";
}
function fourth() {
  document.querySelector(".hero-section").style.backgroundImage =
    "url(image/buypay.jpg)";
}
function fifth() {
  document.querySelector(".hero-section").style.backgroundImage =
    "url(image/eidoffer.jpg)";
}
setInterval(first, 2500);
setInterval(second, 5000);
setInterval(third, 7500);
setInterval(fourth, 10000);
setInterval(fifth, 12500);

// Hero image slider section end
