// const cartNumber = document.getElementById('orderNumber')

document.addEventListener("DOMContentLoaded", function () {
    // let cartCount = 0;
    // const cartCountElement = document.createElement("span");
    const cartNumber = document.getElementById('orderNumber')
    // cartCountElement.classList.add("cart-count");
    // document.querySelector(".cart").appendChild(cartCountElement);
    
    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // cartCount++;
            cartNumber.innerText ++
            // cartCountElement.textContent = cartCount;
           
        });
    });
});



const images = [
    'shoes/IMG-20250304-WA0022.jpg',
    'shoes/IMG-20250304-WA0034.jpg',
    'shoes/IMG-20250304-WA0030.jpg',
    
];

let currentIndex = 0;

const banner = document.querySelector('#home');
function changeBackground() {
    banner.style.transform = "translateX(-100%)";

    setTimeout( () => {
    banner.style.backgroundImage = `url(${images[currentIndex]})`;
    banner.style.opacity = 0.8;
    banner.style.transform = "translateX(0)";
   

    setTimeout( () => {
        banner.style.opacity = 1;
        banner.style.transform = "translateX(0)";
    }, 300); 
}, 900);

    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 3000)
changeBackground();
