let cartContent = document.querySelector('.cart-content');
let cart = document.querySelector('.cart');
let addButton = document.querySelector('.button-two-image');
let minusButton = document.querySelector('.button-one-image');
let numValue = document.querySelector('.numValue');
let addCart = document.querySelector('.button-two')
let num = 0;

cart.addEventListener('click', displayCartContent);

function displayCartContent(e){
    e.preventDefault();

    console.log('it works');

    if(cartContent.style.display != 'none'){
        cartContent.style.display = 'none'
    }else{
        cartContent.style.display = 'block'
    }
 
}

addCart.addEventListener('click', displayCart);

function displayCart(e){
    e.preventDefault()
    
    let quantity = parseInt(numValue.textContent); // Convert text content to a number

    if(quantity == 0){
        alert('cart is empty');
    }else{
        cartContent.style.display = 'block'
        let totalPrice = 125.00 * quantity;
        cartContent.innerHTML = `
            <h3 class="cart-content__heading">Cart</h3>
            <div class="cart-content__full">
                <div class="cart-content__product">
                    <div class="cart-content__prod-img"><img src= "/ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg"  alt="Product"></div>
                    <div class="cart-content__prod-text">
                        <h6>Autumn Limited Edition...</h6>
                        <div class="cart-content__prod-price">$125.00 * ${quantity} <span>$${totalPrice.toFixed(2)}</span></div>
                    </div>
                    <div class="cart-content__bin-icon">
                        <!-- SVG here -->
                    </div>
                </div>
                <button class="cart-content__btn">Checkout</button>
            </div>`;
    }
}

addButton.addEventListener('click', increment);
function increment(e){
    num++ 
    numValue.textContent = num; 
   console.log(num)
}

minusButton.addEventListener('click', decrement);
function decrement(e){
    if (num > 0) {
        num--;
    }
    numValue.textContent = num; 
   console.log(num)
}

