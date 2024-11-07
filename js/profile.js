/////////////////////////////////////////// Draw Cart Products ///////////////////////////////////////////////////////////

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
                        <div class="align-content-center">
                            <span class="myFontFamily fs-5">${item.cartCounter}</span>
                        </div>
                    </div>
                </li>`
    })
    cart_div.innerHTML = result_code
}
drawCartProducts()

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

////////////////////////////////////////////////////// Gender Switch and profile icon ////////////////////////////////////////////////////////////////////////////////

let genderSwitch = document.querySelector('#genderSwitch');
let genderLabel = document.querySelector('#genderLabel');
let profilePicIcon = document.querySelector("#profilePicIcon")

if(localStorage.getItem("gender") == "male"){
    profilePicIcon.innerHTML = `<img class="profilePicSize" src="images/malePP.png" alt="profilePic">`
    genderSwitch.checked = false
}else if(localStorage.getItem("gender") == "female"){
    profilePicIcon.innerHTML = `<img class="profilePicSize" src="images/femalePP.png" alt="profilePic">`
    genderSwitch.checked = true
}

if (genderSwitch.checked) {
    genderSwitch.classList.remove('male');
    genderLabel.textContent = 'Female';
} else {
    genderSwitch.classList.add('male');
    genderLabel.textContent = 'Male';
}

/////////////////////////////////////////////////////// Load profile info /////////////////////////////////////////////////////////////////////////////

let fName = document.querySelector("#fName")
let lName = document.querySelector("#lName")
let email = document.querySelector("#Email")
let password = document.querySelector("#Password")

fName.value = localStorage.getItem("fName")
lName.value = localStorage.getItem("lName")
email.value = localStorage.getItem("email")
password.value = localStorage.getItem("password")

//////////////////////////////////////////////////////// Edit Profile / submit edit //////////////////////////////////////////////////////////////////////

function editProfile(){
    let editProfile_btn = document.querySelector("#editProfile_btn")
    let submitEdit_btn = document.querySelector("#submitEdit_btn")

    fName.disabled = false
    lName.disabled = false
    password.disabled = false

    editProfile_btn.style.display = "none"
    submitEdit_btn.style.display = "block"
}

function submitEdit(){
    let editProfile_btn = document.querySelector("#editProfile_btn")
    let submitEdit_btn = document.querySelector("#submitEdit_btn")

    fName.disabled = true
    lName.disabled = true
    password.disabled = true

    localStorage.setItem("fName",fName.value)
    localStorage.setItem("lName",lName.value)
    localStorage.setItem("password",password.value)

    editProfile_btn.style.display = "block"
    submitEdit_btn.style.display = "none"
}

///////////////////////////////////////////////////////////// Check Fav list //////////////////////////////////////////////////////////////////////////

function checkFavList(){

    let fav_list_empty = document.querySelector("#fav_list_empty")
    let fav_list = document.querySelector("#fav_list")

    if(localStorage.getItem("favorites") && JSON.parse(localStorage.getItem("favorites")).length > 0){
        fav_list.style.display = "block"
        fav_list_empty.style.display = "none"
    }else{
        fav_list.style.display = "none"
        fav_list_empty.style.display = "block"
    }

}
checkFavList()

///////////////////////////////////////////////////////////// Responsive slider //////////////////////////////////////////////////////////////////////

const breakpoints = {
    sm: window.matchMedia("(max-width: 576px)"),
    md: window.matchMedia("(min-width: 577px) and (max-width: 992px)"),
    lg: window.matchMedia("(min-width: 993px)")
};

var numPerSwiper

function applyResponsiveBehavior() {
    if (breakpoints.sm.matches) {
        numPerSwiper = 2
        drawFavorites()
    } else if (breakpoints.md.matches) {
        numPerSwiper = 2
        drawFavorites()
    } else if (breakpoints.lg.matches) {
        numPerSwiper = 4
        drawFavorites()
    }
}

breakpoints.sm.addEventListener("change", applyResponsiveBehavior);
breakpoints.md.addEventListener("change", applyResponsiveBehavior);
breakpoints.lg.addEventListener("change", applyResponsiveBehavior);

applyResponsiveBehavior()


///////////////////////////////////////////////////////// Favorites display in swiper /////////////////////////////////////////////////////////////////////////

function drawFavorites(){
    let swiper_container = document.querySelector("#swiper_container")
    let savedFavorites = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];

    let result_code = savedFavorites.map((item)=>{
        return `<div class="swiper-slide d-flex">
                    <div class="card" style="width:265px;">
                        <img class="card-img-top" style="height: 260px;" src="${item.imgPath}" alt="Product">
                        <div class="card-body">
                            <h4 class="card-title myFontFamily">${item.name}</h4>
                            <div class="d-flex justify-content-between">
                                <div class="mt-2">
                                    <p class="mb-1 myFontFamily">Category : ${item.category}</p>
                                    <p class="mb-0 myFontFamily">${item.price} EGP</p>
                                </div>
                                <i class="fa-solid fa-heart fs-4 text-danger cursor_pointer align-content-end" onclick="removeFromFav(${item.id})"></i>
                            </div>
                        </div>
                    </div>
                </div>`
    })
    swiper_container.innerHTML = result_code

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: numPerSwiper,
        spaceBetween: 30,
        grabCursor: true,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

drawFavorites()

/////////////////////////////////////////////////////// Remove from favorite ////////////////////////////////////////////////////////////////////////////////

function removeFromFav(chosenId){

    let savedFavorites = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];

    let chosenProduct = Products.find((item) => item.id === chosenId)

    let index = savedFavorites.findIndex((item) => item.id === chosenProduct.id);
    savedFavorites.splice(index, 1);

    localStorage.setItem("favorites",JSON.stringify(savedFavorites))

    drawFavorites()
    checkFavList()
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
