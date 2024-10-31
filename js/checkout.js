////////////////////////////////////////////////////////////// gender nav ///////////////////////////////////////////////////////////////////

let profilePicIcon = document.querySelector("#profilePicIcon")

if(localStorage.getItem("gender") == "male"){
    profilePicIcon.innerHTML = `<span class="d-inline-block d-sm-none my-text-primary myFontFamily me-2">My Profile</span><img style="width: 35px;" src="images/malePP.png" alt="ProfilePic"></img>`
}else if(localStorage.getItem("gender") == "female"){
    profilePicIcon.innerHTML = `<span class="d-inline-block d-sm-none my-text-primary myFontFamily me-2">My Profile</span><img style="width: 35px;" src="images/femalePP.png" alt="ProfilePic"></img>`
}

////////////////////////////////////////////////////////// draw cart /////////////////////////////////////////////////////////////////////

function drawCart(){

    let cart_container = document.querySelector("#cart_container")
    let savedCartProducts = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

    let result_code = savedCartProducts.map((item)=>{
        return `<div class="d-flex mt-5 ms-md-5">
                    <img style="width: 200px; height: 200px;" src="${item.imgPath}" alt="Product">
                    <div class="ms-4">
                        <p class="myFontFamily fs-4">${item.name}</p>
                        <p class="myFontFamily fs-5">Category : ${item.category}</p>
                        <p class="myFontFamily fs-5">${item.price} EGP</p>
                        <div class="d-flex justify-content-between">
                            <div class="align-content-center">
                                <span class="myFontFamily fs-5 me-3">${item.cartCounter}</span>
                                <i class="fa-solid fa-plus text-success fs-4 me-3 cursor_pointer" onclick="incrementProduct(${item.id})"></i>
                                <i class="fa-solid fa-minus text-danger fs-4 cursor_pointer" onclick="decrementProduct(${item.id})"></i>
                            </div>
                            <button class="btn my-bg-primary my-text-secondary myFontFamily my-btn-primary-hv" onclick="removeFromCart(${item.id})">Remove</button>
                        </div>
                    </div>
                </div>`
    })
    cart_container.innerHTML = result_code
}
drawCart()

///////////////////////////////////////////////////////// check empty Cart //////////////////////////////////////////////////////////////////////////

function checkCart(){

    let cart_container = document.querySelector("#cart_container")
    let cart_empty = document.querySelector("#cart_empty")
    let checkout_btn = document.querySelector("#checkout_btn")

    if(localStorage.getItem("productsInCart") && JSON.parse(localStorage.getItem("productsInCart")).length > 0){
        cart_container.style.display = "block"
        cart_empty.style.display = "none"
        checkout_btn.disabled = false
    }else{
        cart_container.style.display = "none"
        cart_empty.style.display = "block"
        checkout_btn.disabled = true
    }

}
checkCart()

///////////////////////////////////////////////////////// Remove From Cart //////////////////////////////////////////////////////////////////////////

function removeFromCart(chosenId){

    let savedCartProducts = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
    let chosenProduct = Products.find((item) => item.id === chosenId)

    chosenProduct.cartCounter = 0

    let chosenIndex = savedCartProducts.findIndex((item) => item.id === chosenId)
    savedCartProducts.splice(chosenIndex,1);

    localStorage.setItem("productsInCart",JSON.stringify(savedCartProducts))

    drawCart()
    drawTotalPrice()
    checkCart()
}

/////////////////////////////////////////////////////// increment / decrement From Cart //////////////////////////////////////////////////////////////

function incrementProduct(chosenId){

    let chosenProduct = Products.find((item)=> item.id === chosenId)
    let savedCartProducts = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

    savedCartProducts.forEach(item => {
        if(item.id === chosenProduct.id){
            item.cartCounter ++
            chosenProduct.cartCounter ++
            localStorage.setItem("productsInCart",JSON.stringify(savedCartProducts))
        }
    })

    drawCart()
    drawTotalPrice()
}

////////////////////////////////////////////

function decrementProduct(chosenId){

    let savedCartProducts = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
    let chosenProduct = Products.find((item) => item.id === chosenId)

    chosenProduct.cartCounter--

    savedCartProducts.forEach((item,index) =>{
        if(chosenId == item.id){
            item.cartCounter--
            if(item.cartCounter == 0){
                savedCartProducts.splice(index,1)
            }
        }
    })

    localStorage.setItem("productsInCart",JSON.stringify(savedCartProducts))
    drawCart()
    drawTotalPrice()
    checkCart()
}

////////////////////////////////////////////////////// Calc Total Price ////////////////////////////////////////////////////////////////////////////////

function drawTotalPrice(){

    let subtotal_container = document.querySelector("#subtotal_container")
    let estimated_container = document.querySelector("#estimated_container")
    let total = 0

    let savedCartProducts = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

    savedCartProducts.forEach((item) =>{
        total += (item.price*item.cartCounter)
    })

    subtotal_container.innerHTML = "Subtotal : " + total + " EGP"
    estimated_container.innerHTML = "Estimated total : " + (total + 50 ) + " EGP"

}
drawTotalPrice()

//////////////////////////////////////////////////// Purchase completed ///////////////////////////////////////////////////////////////////////////////////

function purchaseDone(){

    let savedCartProducts = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

    savedCartProducts.forEach((item) => {
        let chosenProduct = Products.find((product) => product.id === item.id)
        chosenProduct.cartCounter = 0
    })

    localStorage.removeItem("productsInCart")

    drawTotalPrice()
    drawCart()
    checkCart()
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////