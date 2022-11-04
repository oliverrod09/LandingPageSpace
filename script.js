var hamburguer = document.querySelector(".hamburguer");
var menu = document.querySelector(".menuBtn");
var lineaUno = document.querySelector(".line--1");
var lineaDos = document.querySelector(".line--2");
var lineaTres = document.querySelector(".line--3");

hamburguer.addEventListener("click", ()=>{
    menu.classList.toggle('mostrarMenu');
    lineaUno.classList.toggle("activeline--1");
    lineaDos.classList.toggle("activeline--2");
    lineaTres.classList.toggle("activeline--3");
});