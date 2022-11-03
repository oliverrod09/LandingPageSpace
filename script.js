var hamburguer = document.querySelector(".hamburguer");
var menu = document.querySelector(".menuBtn");

hamburguer.addEventListener("click", ()=>{
    menu.classList.toggle('mostrarMenu');
});