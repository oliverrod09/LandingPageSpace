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
 function mostrar({media_type, url, title, explanation, date}) {
    titulo.innerHTML = title;
    descripcion.innerHTML = explanation;
    fecha.innerHTML = date;
    if (media_type == 'video') {
        figure.style.backgroundColor = "#000000";
        figure.innerHTML = `<iframe title="vimeo-player" src="${url}" width="950" height="460" frameborder="0" allowfullscreen></iframe>`;
    }else if (media_type == `image`) {
        figure.innerHTML = `<img src="${url}" alt="${url}" class="apiImageVideo">`;
    }
 }
