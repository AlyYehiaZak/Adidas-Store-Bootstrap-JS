//////////////////////////////////////////// Navbar ///////////////////////////////////////////////////////////////

let navbar_greeting = document.querySelector("#navbar_greeting")
let user_navbar = document.querySelector("#user_navbar")
let guest_navbar = document.querySelector("#guest_navbar")
let profilePicIcon = document.querySelector("#profilePicIcon")

if(localStorage.getItem("email")){
    navbar_greeting.innerHTML = `Welcome ${localStorage.getItem("fName")}`
    guest_navbar.style.display = "none"
    user_navbar.style.display = "flex"
    if(localStorage.getItem("gender") == "male"){
        profilePicIcon.innerHTML = `<span class="d-inline-block d-sm-none my-text-primary myFontFamily me-2">My Profile</span><img style="width: 35px;" src="images/malePP.png" alt="ProfilePic"></img>`
    }else if(localStorage.getItem("gender") == "female"){
        profilePicIcon.innerHTML = `<span class="d-inline-block d-sm-none my-text-primary myFontFamily me-2">My Profile</span><img style="width: 35px;" src="images/femalePP.png" alt="ProfilePic"></img>`
    }
}else{
    navbar_greeting.innerHTML = `Welcome Guest`
}

/////////////////////////////////// Draw Products /////////////////////////////////////////////////////////


let Products_div = document.querySelector("#Products_div")

function drawProducts(Products_array){

    let savedFavorites = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];
    let savedCartProducts = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

    let result_code = Products_array.map((item) => {

        let flagFavorite = savedFavorites.some((product) => product.id === item.id)
        let flagCart = savedCartProducts.some((product) => product.id === item.id)

        if(flagFavorite && flagCart){
            return `
            <div class="col d-flex justify-content-center mt-4">
                <div class="card" style="width:300px;">
                    <img class="card-img-top" style="max-height: 360px;" src="${item.imgPath}" alt="Product">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h4 class="card-title myFontFamily my-text-primary py-2 mb-0">${item.name}</h4>
                        <div class="myFontFamily my-text-primary py-2">
                            <p class="my-0">Category : ${item.category}</p>
                            <p class="my-0">${item.price} EGP</p>
                        </div>
                        <div class="pt-2 d-flex justify-content-between">
                            <div id="AddRemove_hide">
                                <button class="btn my-bg-primary my-text-secondary myFontFamily my-btn-primary-hv" onclick="addToCart(${item.id},this.nextElementSibling.value,this.parentElement,parentElement.nextElementSibling)">Add To Cart</button>
                                <input value="1" min="1" max="20" type="number" class="ps-1 border border-2 border-dark myFontFamily" style="width: 40px; height: 36px;"/>
                            </div>
                            <div id="AddRemove_show">
                                <button class="btn border border-2 border-dark my-text-primary myFontFamily my-btn-secondary-hv" onclick="removeFromCart(${item.id},this.parentElement,parentElement.previousElementSibling)">Remove From Cart</button>
                            </div>
                            <i class="fa-solid fa-heart fs-4 text-danger cursor_pointer" onClick="toggleFavorite(this,${item.id})"></i>
                        </div>
                    </div>
                </div>
            </div>`
        }else if(!flagFavorite && flagCart){
            return `
            <div class="col d-flex justify-content-center mt-4">
                <div class="card" style="width:300px;">
                    <img class="card-img-top" style="max-height: 360px;" src="${item.imgPath}" alt="Product">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h4 class="card-title myFontFamily my-text-primary py-2 mb-0">${item.name}</h4>
                        <div class="myFontFamily my-text-primary py-2">
                            <p class="my-0">Category : ${item.category}</p>
                            <p class="my-0">${item.price} EGP</p>
                        </div>
                        <div class="pt-2 d-flex justify-content-between">
                            <div id="AddRemove_hide">
                                <button class="btn my-bg-primary my-text-secondary myFontFamily my-btn-primary-hv" onclick="addToCart(${item.id},this.nextElementSibling.value,this.parentElement,parentElement.nextElementSibling)">Add To Cart</button>
                                <input value="1" min="1" max="20" type="number" class="ps-1 border border-2 border-dark myFontFamily" style="width: 40px; height: 36px;"/>
                            </div>
                            <div id="AddRemove_show">
                                <button class="btn border border-2 border-dark my-text-primary myFontFamily my-btn-secondary-hv" onclick="removeFromCart(${item.id},this.parentElement,parentElement.previousElementSibling)">Remove From Cart</button>
                            </div>
                            <i class="fa-solid fa-heart fs-4 text-secondary cursor_pointer" onClick="toggleFavorite(this,${item.id})"></i>
                        </div>
                    </div>
                </div>
            </div>`
        }else if(flagFavorite && !flagCart){
            return `
            <div class="col d-flex justify-content-center mt-4">
                <div class="card" style="width:300px;">
                    <img class="card-img-top" style="max-height: 360px;" src="${item.imgPath}" alt="Product">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h4 class="card-title myFontFamily my-text-primary py-2 mb-0">${item.name}</h4>
                        <div class="myFontFamily my-text-primary py-2">
                            <p class="my-0">Category : ${item.category}</p>
                            <p class="my-0">${item.price} EGP</p>
                        </div>
                        <div class="pt-2 d-flex justify-content-between">
                            <div id="AddRemove_show">
                                <button class="btn my-bg-primary my-text-secondary myFontFamily my-btn-primary-hv" onclick="addToCart(${item.id},this.nextElementSibling.value,this.parentElement,parentElement.nextElementSibling)">Add To Cart</button>
                                <input value="1" min="1" max="20" type="number" class="ps-1 border border-2 border-dark myFontFamily" style="width: 40px; height: 36px;"/>
                            </div>
                            <div id="AddRemove_hide">
                                <button class="btn border border-2 border-dark my-text-primary myFontFamily my-btn-secondary-hv" onclick="removeFromCart(${item.id},this.parentElement,parentElement.previousElementSibling)">Remove From Cart</button>
                            </div>
                            <i class="fa-solid fa-heart fs-4 text-danger cursor_pointer" onClick="toggleFavorite(this,${item.id})"></i>
                        </div>
                    </div>
                </div>
            </div>`
        }else if(!flagFavorite && !flagCart){
            return `
            <div class="col d-flex justify-content-center mt-4">
                <div class="card" style="width:300px;">
                    <img class="card-img-top" style="max-height: 360px;" src="${item.imgPath}" alt="Product">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h4 class="card-title myFontFamily my-text-primary py-2 mb-0">${item.name}</h4>
                        <div class="myFontFamily my-text-primary py-2">
                            <p class="my-0">Category : ${item.category}</p>
                            <p class="my-0">${item.price} EGP</p>
                        </div>
                        <div class="pt-2 d-flex justify-content-between">
                            <div id="AddRemove_show">
                                <button class="btn my-bg-primary my-text-secondary myFontFamily my-btn-primary-hv" onclick="addToCart(${item.id},this.nextElementSibling.value,this.parentElement,parentElement.nextElementSibling)">Add To Cart</button>
                                <input value="1" min="1" max="20" type="number" class="ps-1 border border-2 border-dark myFontFamily" style="width: 40px; height: 36px;"/>
                            </div>
                            <div id="AddRemove_hide">
                                <button class="btn border border-2 border-dark my-text-primary myFontFamily my-btn-secondary-hv" onclick="removeFromCart(${item.id},this.parentElement,parentElement.previousElementSibling)">Remove From Cart</button>
                            </div>
                            <i class="fa-solid fa-heart fs-4 text-secondary cursor_pointer" onClick="toggleFavorite(this,${item.id})"></i>
                        </div>
                    </div>
                </div>
            </div>`
        }
    })
    Products_div.innerHTML = result_code
}

drawProducts(Products)

////////////////////////////////////// Display All Button ////////////////////////////////////////////

let display_all_btn = document.querySelector("#display_all_btn")

display_all_btn.addEventListener("click",function(){
    drawProducts(Products)
})

////////////////////////////////////// Search display /////////////////////////////////////////////////

let search_select = document.querySelector("#search_select")
let category_select = document.querySelector("#category_select")
let search_textbox = document.querySelector("#search_textbox")
let price_search_textbox = document.querySelector("#price_search_textbox")

search_select.addEventListener("change", function() {

    if(search_select.value == "searchByName"){
        category_select.style.display = "none"
        search_textbox.style.display = "block"
        price_search_textbox.style.display = "none"
    }else if(search_select.value == "searchByCategory"){
        category_select.style.display = "block"
        search_textbox.style.display = "none"
        price_search_textbox.style.display = "none"
    }else if(search_select.value == "searchByPrice"){
        category_select.style.display = "none"
        search_textbox.style.display = "none"
        price_search_textbox.style.display = "block"
    }

})

//////////////////////////////////////////// Draw Products By category search /////////////////////////////////////////////

category_select.addEventListener("change", function(){

    if(category_select.value == "Accessories"){
        let Accessories_array = Products.filter((item) => item.category === "Accessories")
        drawProducts(Accessories_array)
    }else if(category_select.value == "Footballs"){
        let Footballs_array = Products.filter((item) => item.category === "Footballs")
        drawProducts(Footballs_array)
    }else if(category_select.value == "Cleats"){
        let Cleats_array = Products.filter((item) => item.category === "Cleats")
        drawProducts(Cleats_array)
    }else if(category_select.value == "Clothes"){
        let Clothes_array = Products.filter((item) => item.category === "Clothes")
        drawProducts(Clothes_array)
    }else if(category_select.value == "Sneakers"){
        let Sneakers_array = Products.filter((item) => item.category === "Sneakers")
        drawProducts(Sneakers_array)
    }

})

//////////////////////////////////////// Draw Products by name search////////////////////////////////////////////////////////////

search_textbox.addEventListener("input",function(){

    let search_array = Products.filter((item) => item.name.toLowerCase().includes(search_textbox.value.toLowerCase()))
    drawProducts(search_array)

})

/////////////////////////////////////////// Draw Products by price search /////////////////////////////////////////////////////////////

price_search_textbox.addEventListener("input",function(){

    let price_search_array = Products.filter((item) => item.price <= price_search_textbox.value)
    drawProducts(price_search_array)

})

/////////////////////////////////////////// favorite function /////////////////////////////////////////////////////////////

function toggleFavorite(icon , productID){

    if(localStorage.getItem("email")){

        let savedFavorites = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];

        let chosenProduct = Products.find((item) => item.id === productID)

        let flag = savedFavorites.some((item) => item.id === chosenProduct.id)
        if(flag){

            let index = savedFavorites.findIndex((item) => item.id === chosenProduct.id);
            savedFavorites.splice(index, 1);
            localStorage.setItem("favorites",JSON.stringify(savedFavorites))
            icon.classList.remove("text-danger")
            icon.classList.add("text-secondary")

        }else{

            savedFavorites.push(chosenProduct)
            localStorage.setItem("favorites",JSON.stringify(savedFavorites))
            icon.classList.remove("text-secondary")
            icon.classList.add("text-danger")

        }

    }else{

        window.location = "login.html"

    }
}

///////////////////////////////////////////////////// Draw products in cart //////////////////////////////////////////////////////////////

let cart_div = document.querySelector("#cart_div")

function drawCartProducts(){

    let savedCartProducts = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

    let result_code = savedCartProducts.map((item)=>{
        return `<li class="Cart_listItem mt-2">
                    <div class="container-fluid d-flex justify-content-between">
                        <div>
                            <img style="width: 35px;" src="${item.imgPath}" alt="Product">
                            <span class="myFontFamily ps-2 align-content-center">${item.name}</span>
                        </div>
                        <div class="align-content-center" style="width:100px !important;">
                            <div class="d-flex justify-content-end gap-sm-3 gap-2">
                                <span class="myFontFamily fs-5">${item.cartCounter}</span>
                                <i class="fa-solid fa-plus text-success pt-1 fs-5 cursor_pointer" onclick="cartProductIncrement(event,${item.id})"></i>
                                <i class="fa-solid fa-minus text-danger pt-1 fs-5 cursor_pointer" onclick="cartProductDecrement(event,${item.id})"></i>
                            </div>
                        </div>
                    </div>
                </li>`
    })
    cart_div.innerHTML = result_code
}
drawCartProducts()

////////////////////////////////////////  fill Product cart counter by local storage when page is refreshed /////////////////////////////////

function fillCartProducts (){

    let savedCartProducts = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

    savedCartProducts.forEach(item => {

        let chosenProduct = Products.find((product) => product.id === item.id)
        chosenProduct.cartCounter = item.cartCounter

    })
}
fillCartProducts()

//////////////////////////////////////////////////////// Add To Cart ////////////////////////////////////////////////////////////////////////

function addToCart(chosenId,quantityInput,addDiv,removeDiv){

    if(localStorage.getItem("email")){

        quantity = parseInt(quantityInput,10)

        let chosenProduct = Products.find((item)=> item.id === chosenId)
        let savedCartProducts = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

        if(chosenProduct.cartCounter > 0){

            savedCartProducts.forEach(item => {
                if(item.id === chosenProduct.id){
                    item.cartCounter += quantity
                    chosenProduct.cartCounter += quantity
                    localStorage.setItem("productsInCart",JSON.stringify(savedCartProducts))
                }
            })

        }else{

            chosenProduct.cartCounter += quantity
            savedCartProducts.push(chosenProduct)
            localStorage.setItem("productsInCart",JSON.stringify(savedCartProducts))

        }

        if(addDiv != null && removeDiv != null){
            addDiv.style.display = "none"
            removeDiv.style.display = "block"
        }

        checkProceedToCheckout()
        updateCartBadge()
        drawCartProducts()

    }else{
        window.location = "login.html"
    }
}

///////////////////////////////////////////////////// update cart badge ////////////////////////////////////////////////////////////////////////

function updateCartBadge(){

    let cartBadgeCounter = document.querySelector("#cartBadgeCounter")
    let savedCartProducts = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
    let sum = 0
    savedCartProducts.forEach(item=>{
        sum = sum + item.cartCounter
    })
    if(sum != 0){
        cartBadgeCounter.innerHTML = sum
    }else{
        cartBadgeCounter.innerHTML = ""
    }
}
updateCartBadge()

///////////////////////////////////////////////////// display Proceed to checkout //////////////////////////////////////////////////////////////////////////

function checkProceedToCheckout(){
    let proceedToCheckout_btn = document.querySelector("#proceedToCheckout_btn")
    let savedCartProducts = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
    if( savedCartProducts.length === 0 ){
        proceedToCheckout_btn.style.display = "none"
    }else{
        proceedToCheckout_btn.style.display = "block"
    }
}
checkProceedToCheckout()

/////////////////////////////////////////////////////// Remove From Cart /////////////////////////////////////////////////////////////////////////////

function removeFromCart(chosenId,removeDiv,addDiv){

    let savedCartProducts = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
    let chosenProduct = Products.find((item) => item.id === chosenId)

    chosenProduct.cartCounter = 0

    let chosenIndex = savedCartProducts.findIndex((item) => item.id === chosenId)
    savedCartProducts.splice(chosenIndex,1);

    localStorage.setItem("productsInCart",JSON.stringify(savedCartProducts))

    addDiv.style.display = "block"
    removeDiv.style.display = "none"

    checkProceedToCheckout()
    updateCartBadge()
    drawCartProducts()
}

//////////////////////////////////////////////////// Cart increment / decrement ////////////////////////////////////////////////////////////////////////

function cartProductIncrement(event,chosenId){
    event.stopPropagation();
    addToCart(chosenId,1,null,null)
}

////////////////////////////////////////////////////////////

function cartProductDecrement(event,chosenId){
    event.stopPropagation();
    
    let savedCartProducts = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
    let chosenProduct = Products.find((item) => item.id === chosenId)

    chosenProduct.cartCounter--

    savedCartProducts.forEach((item,index) =>{
        if(chosenId == item.id){
            item.cartCounter--
            if(item.cartCounter == 0){
                savedCartProducts.splice(index,1)
                localStorage.setItem("productsInCart",JSON.stringify(savedCartProducts))
                drawProducts(Products)
            }
        }
    })

    localStorage.setItem("productsInCart",JSON.stringify(savedCartProducts))

    checkProceedToCheckout()
    updateCartBadge()
    drawCartProducts()
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////