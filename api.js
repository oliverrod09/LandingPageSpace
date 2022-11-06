 var figure = document.querySelector(".cardDayImage");
 var titulo = document.querySelector(".cardTitleDay");
 var descripcion = document.querySelector(".cardDescriptionDay");
 var fecha = document.querySelector(".cardDateDay");


 window.addEventListener("load", ()=>{
     const key = (`qnbHFczPfqzWQYyJYjEREFsXcnvipeEdgCREBQld`);
     const ruta = (`https://api.nasa.gov/planetary/apod?api_key=${key}`);
     fetch(ruta)
     .then(respuesta => respuesta.json())
     .then(resultado => mostrar(resultado))
 })
 function mostrar({url, title, explanation, date}) {
     figure.innerHTML = `<img src="${url}" alt="${url}">`;
     titulo.innerHTML = title;
     descripcion.innerHTML = explanation;
     fecha.innerHTML = date;
 }