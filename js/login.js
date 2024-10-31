let email = document.querySelector("#Email")
let password = document.querySelector("#Password")
let login_btn = document.querySelector("#login_btn")
let guest_btn = document.querySelector("#guest_btn")

let registeredMail = localStorage.getItem("email")
let registeredPassword = localStorage.getItem("password")

login_btn.addEventListener("click" , function(e){
    e.preventDefault()

    if(email.value === "" || password.value === ""){
        alert("please fill the fields")
    }else{
        if( registeredMail === email.value && registeredPassword === password.value ){

            window.location = "products.html"

        }else{
            alert("Email or Password is incorrect")
        }

    }
})

guest_btn.addEventListener("click", function(){
    localStorage.clear();
    window.location = "products.html"
})