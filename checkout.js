const showDetails = document.querySelector(".shop-section");
const divTotal = document.querySelector(".divTotal");
const totalItems = document.querySelector('.badge');
let cartData = JSON.parse(localStorage.getItem("cartItems")) || [];
function initializeCartCount() {
    // const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    totalItems.innerHTML =cartData.length;
    // removeItem()
  }

function render() {
    let totalAmount = 0;
  showDetails.innerHTML = " ";
  divTotal.innerHTML = " ";
  if (cartData.length === 0) {
    showDetails.innerHTML = "<h3 class='animate-charcter'> Card is Empty</h3>";
  } 
  else {
    cartData.forEach((ele, ind) => {
      totalAmount += ele.price * ele.quantity;
      showDetails.innerHTML += ` 
  <div class="box11 box">
  <div class="imge">
    <img src="./image/Products/${ele.image}"  />
    </div>
    <div class="itemsDescription">
    <p><b>Brand:</b> ${ele.brand} ${ele.model}</p>
    <p> <b>RAM: </b>${ele.ram}GB | <b>ROM: </b>${ele.rom} GB  </p>
    <p><b>Camera: </b>${ele.camera}</p>
    <p id='price'><b>Price:</b><sup>Rs</sup> ${ele.price}</p>
    <p id='price'>Total Price:<sup>Rs</sup> ${ele.price * ele.quantity}</p>
  
    <button class='btninc' onclick="increment(${ind})"><img src='image/arrow-up.png'></button>
    <span class='qty'>${ele.quantity}</span>
    <button class='btninc' onclick="decrement(${ind})"><img src='image/arrow-down.png'></button>
    <div id="carActionContainer">
    <div id="checkOutContainer">
    <button class="btnmodel" onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Check Out</button>
    </div>
    <div  id="removeContainer">
    <button class="btn btnremove" onclick="removeItem(${ind})">
    <span class="btn-text-onee">Remove Item</span>
    <span class="btn-text-twoo"><img src='image/remove.png'></span>
</button>
</div>
</div>
    </div>
</div>`;
    });
    divTotal.innerHTML = `<h3>Total Amount: <span>${totalAmount}</span></h3>`;
  
}
// console.log(totalAmount);
}
render()
// Increase quantity function
function increment(ind) {
    cartData = JSON.parse(localStorage.getItem("cartItems")) || [];
    // divTotal.innerHTML="";
  cartData[ind].quantity += 1;
  localStorage.setItem("cartItems", JSON.stringify(cartData));
  render()
//   console.log(cartData);
//   console.log('index', ind)
}
// Decrement quantity function
function decrement(ind) {
    cartData = JSON.parse(localStorage.getItem("cartItems")) || [];
    divTotal.innerHTML= " ";
  if (cartData[ind].quantity === 1) {
    cartData.splice(ind, 1);
  } else {
    cartData[ind].quantity -= 1;
  }
  localStorage.setItem("cartItems", JSON.stringify(cartData));
  render()
//   console.log('index', ind)
}
function removeItem(ind) {
  // console.log(ind);
  cartData = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartData.splice(ind, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartData));
  render();
  initializeCartCount() 
}

// Remove item function end

function addMore(){
    window.location = 'index.html';
}

window.onload = initializeCartCount;

// check out function
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// chekc out option

const formSubmit = document.querySelector('#formSubmit');
formSubmit.addEventListener('submit', function(e){
    e.preventDefault()
    document.getElementById('id01').style.display='none';
    swal({
        title: "Item Successfully Purchased",
        button: false,
        icon: "success",
        timer:2000
      })
      removeItem()
})
