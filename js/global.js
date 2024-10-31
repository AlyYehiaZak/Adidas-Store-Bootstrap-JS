let logout_btn = document.querySelector("#logout_btn")

logout_btn.addEventListener("click", function(){
    window.location = "index.html"
})

/////////////////////////////////////////////////////////////////

let Products = [
    {
        id : 1,
        name : "Adidas Bag",
        category : "Accessories",
        price : 500,
        imgPath : "images/Accessories/Bag.png",
        cartCounter : 0
    },
    {
        id : 2,
        name : "Adidas Bottle",
        category : "Accessories",
        price : 250,
        imgPath : "images/Accessories/Bottle.png",
        cartCounter : 0
    },
    {
        id : 3,
        name : "Champions League Kyiv 2018 Ball",
        category : "Footballs",
        price : 1250,
        imgPath : "images/Balls/Ball1.png",
        cartCounter : 0
    },
    {
        id : 4,
        name : "World Cup Russia 2018 Ball",
        category : "Footballs",
        price : 1500,
        imgPath : "images/Balls/Ball2.png",
        cartCounter : 0
    },
    {
        id : 5,
        name : "Champions League Cardiff 2017 Ball",
        category : "Footballs",
        price : 1000,
        imgPath : "images/Balls/Ball3.png",
        cartCounter : 0
    },
    {
        id : 6,
        name : "World Cup Brazil 2014 Ball",
        category : "Footballs",
        price : 1100,
        imgPath : "images/Balls/Ball4.png",
        cartCounter : 0
    },
    {
        id : 7,
        name : "World Cup South Africa 2010 Ball",
        category : "Footballs",
        price : 1000,
        imgPath : "images/Balls/Ball5.png",
        cartCounter : 0
    },
    {
        id : 8,
        name : "Adidas Ace 17.1 FG Soccer Cleats",
        category : "Cleats",
        price : 3000,
        imgPath : "images/Cleats/Cleats1.png",
        cartCounter : 0
    },
    {
        id : 9,
        name : "Adidas Nemeziz 17.3 FG Soccer Cleats",
        category : "Cleats",
        price : 3100,
        imgPath : "images/Cleats/Cleats2.png",
        cartCounter : 0
    },
    {
        id : 10,
        name : "Adidas X 16.1 FG Soccer Cleats",
        category : "Cleats",
        price : 3200,
        imgPath : "images/Cleats/Cleats3.png",
        cartCounter : 0
    },
    {
        id : 11,
        name : "Adidas X 16.3 FG Soccer Cleats",
        category : "Cleats",
        price : 3250,
        imgPath : "images/Cleats/Cleats4.png",
        cartCounter : 0
    },
    {
        id : 12,
        name : "Adidas X 17.1 FG Soccer Cleats",
        category : "Cleats",
        price : 3500,
        imgPath : "images/Cleats/Cleats5.png",
        cartCounter : 0
    },
    {
        id : 13,
        name : "Adidas Messi 15.2 FG Soccer Cleats",
        category : "Cleats",
        price : 3000,
        imgPath : "images/Cleats/Cleats6.png",
        cartCounter : 0
    },
    {
        id : 14,
        name : "Adidas Predator LZ FG Soccer Cleats",
        category : "Cleats",
        price : 3400,
        imgPath : "images/Cleats/Cleats7.png",
        cartCounter : 0
    },
    {
        id : 15,
        name : "Adidas Predator 18.4 FxG Soccer Cleats",
        category : "Cleats",
        price : 3700,
        imgPath : "images/Cleats/Cleats8.png",
        cartCounter : 0
    },
    {
        id : 16,
        name : "Adidas Ace 17.3 FG Soccer Cleats",
        category : "Cleats",
        price : 3250,
        imgPath : "images/Cleats/Cleats9.png",
        cartCounter : 0
    },
    {
        id : 17,
        name : "Adidas Messi 15.1 FG Soccer Cleats",
        category : "Cleats",
        price : 3050,
        imgPath : "images/Cleats/Cleats10.png",
        cartCounter : 0
    },
    {
        id : 18,
        name : "Adidas X 17+ Purespeed FG",
        category : "Cleats",
        price : 3900,
        imgPath : "images/Cleats/Cleats11.png",
        cartCounter : 0
    },
    {
        id : 19,
        name : "Adidas Adizero 6.0 Soccer Cleats",
        category : "Cleats",
        price : 3700,
        imgPath : "images/Cleats/Cleats12.png",
        cartCounter : 0
    },
    {
        id : 20,
        name : "Adidas Black Hat",
        category : "Clothes",
        price : 200,
        imgPath : "images/Clothes/Hat1.png",
        cartCounter : 0
    },
    {
        id : 21,
        name : "Adidas White Hat",
        category : "Clothes",
        price : 200,
        imgPath : "images/Clothes/Hat2.png",
        cartCounter : 0
    },
    {
        id : 22,
        name : "Adidas Black Hoodie",
        category : "Clothes",
        price : 800,
        imgPath : "images/Clothes/Hoodie1.png",
        cartCounter : 0
    },
    {
        id : 23,
        name : "Adidas White Hoodie",
        category : "Clothes",
        price : 800,
        imgPath : "images/Clothes/Hoodie2.png",
        cartCounter : 0
    },
    {
        id : 24,
        name : "Adidas Black Sports Jacket",
        category : "Clothes",
        price : 900,
        imgPath : "images/Clothes/Jacket1.png",
        cartCounter : 0
    },
    {
        id : 25,
        name : "Adidas Red Sports Jacket",
        category : "Clothes",
        price : 900,
        imgPath : "images/Clothes/Jacket2.png",
        cartCounter : 0
    },
    {
        id : 26,
        name : "Adidas Black T-Shirt",
        category : "Clothes",
        price : 600,
        imgPath : "images/Clothes/Shirt1.png",
        cartCounter : 0
    },
    {
        id : 27,
        name : "Adidas Pink T-Shirt",
        category : "Clothes",
        price : 600,
        imgPath : "images/Clothes/Shirt2.png",
        cartCounter : 0
    },
    {
        id : 28,
        name : "Adidas White T-Shirt",
        category : "Clothes",
        price : 600,
        imgPath : "images/Clothes/Shirt3.png",
        cartCounter : 0
    },
    {
        id : 29,
        name : "Adidas Black Shorts",
        category : "Clothes",
        price : 550,
        imgPath : "images/Clothes/Shorts1.png",
        cartCounter : 0
    },
    {
        id : 30,
        name : "Adidas Blue Shorts",
        category : "Clothes",
        price : 550,
        imgPath : "images/Clothes/Shorts2.png",
        cartCounter : 0
    },
    {
        id : 31,
        name : "Adidas Ultraboost Running Shoes",
        category : "Sneakers",
        price : 2400,
        imgPath : "images/Sneakers/Sneakers1.png",
        cartCounter : 0
    },
    {
        id : 32,
        name : "Adidas Iniki Runner Running Shoes",
        category : "Sneakers",
        price : 2700,
        imgPath : "images/Sneakers/Sneakers2.png",
        cartCounter : 0
    },
    {
        id : 33,
        name : "Adidas Yeezy Boost 350",
        category : "Sneakers",
        price : 2850,
        imgPath : "images/Sneakers/Sneakers3.png",
        cartCounter : 0
    },
    {
        id : 34,
        name : "Adidas Cloudfoam Flow 2.0",
        category : "Sneakers",
        price : 2000,
        imgPath : "images/Sneakers/Sneakers4.png",
        cartCounter : 0
    },
    {
        id : 35,
        name : "Adidas Munchen White And Blue",
        category : "Sneakers",
        price : 2100,
        imgPath : "images/Sneakers/Sneakers5.png",
        cartCounter : 0
    },
    {
        id : 36,
        name : "Adidas Nmd R2 Running Shoes",
        category : "Sneakers",
        price : 2600,
        imgPath : "images/Sneakers/Sneakers6.png",
        cartCounter : 0
    },
    {
        id : 37,
        name : "Adidas Clot X Superstar Shoes",
        category : "Sneakers",
        price : 2400,
        imgPath : "images/Sneakers/Sneakers7.png",
        cartCounter : 0
    },
    {
        id : 38,
        name : "Adidas Campus 80s",
        category : "Sneakers",
        price : 2150,
        imgPath : "images/Sneakers/Sneakers8.png",
        cartCounter : 0
    },
    {
        id : 39,
        name : "Adidas ZX Flux Multi Color",
        category : "Sneakers",
        price : 2750,
        imgPath : "images/Sneakers/Sneakers9.png",
        cartCounter : 0
    },
    {
        id : 40,
        name : "Adidas Superstar White And Black Stripes",
        category : "Sneakers",
        price : 2000,
        imgPath : "images/Sneakers/Sneakers10.png",
        cartCounter : 0
    },
    {
        id : 41,
        name : "Adidas Barricade 2016",
        category : "Sneakers",
        price : 2300,
        imgPath : "images/Sneakers/Sneakers11.png",
        cartCounter : 0
    },
]