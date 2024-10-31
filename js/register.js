let fName = document.querySelector("#fName")
let lName = document.querySelector("#lName")
let email = document.querySelector("#Email")
let password = document.querySelector("#Password")
let register_btn = document.querySelector("#register_btn")
let register_form = document.querySelector("#register_form")
let guest_btn = document.querySelector("#guest_btn")
let genderSwitch = document.querySelector('#genderSwitch');
let genderLabel = document.querySelector('#genderLabel');

/////////////////////////////////////////////////////////////

genderSwitch.addEventListener('change', function () {
if (this.checked) {
    this.classList.remove('male');
    genderLabel.textContent = 'Female';
} else {
    this.classList.add('male');
    genderLabel.textContent = 'Male';
}
})

///////////////////////////////////////////////////////////////////

register_btn.addEventListener("click",function(e){
    e.preventDefault()

    if(register_form.checkValidity()){

        localStorage.clear()

        localStorage.setItem("fName" , fName.value)
        localStorage.setItem("lName", lName.value)
        localStorage.setItem("email" , email.value)
        localStorage.setItem("password" , password.value)
        if(genderSwitch.checked){
            localStorage.setItem("gender","female")
        }else{
            localStorage.setItem("gender","male")
        }

        setTimeout(() => {
            window.location = "login.html"
        },1000)

    }else{
        alert("Please enter all fields correctly and check the terms and conditions")
    }
    
})

/////////////////////////////////////////////////////////////////////

guest_btn.addEventListener("click", function(){
    localStorage.clear();
    window.location = "products.html"
})