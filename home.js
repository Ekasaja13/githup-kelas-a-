
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.querySelector(".header .flex .navbar");

    menuBtn.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
});
let profile = document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active')
}

const menuData = [
        { name: "Mie Ayam", price: 20.000 },
        { name: "Gado-gado", price: 20.000 },
        { name: "Sate Ayam", price:  30.000},
        { name: "Ayam Gebrek", price: 20.000},
        { name: "Bakso", price: 20.000 },
        // Tambahkan lebih banyak makanan jika diperlukan
];
    



