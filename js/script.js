let guest_btn = document.querySelector("#guest_btn")

guest_btn.addEventListener("click", function(){
    localStorage.clear();
    window.location = "products.html"
})