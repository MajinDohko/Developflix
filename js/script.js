import peliculas from './peliculas.js'

// Primero me traigo los elementos del html al código javascript para poder manipularlos.
const generoAccion = document.getElementById('genero-28');
const generoThriller = document.getElementById('genero-53');
const generoAventura = document.getElementById('genero-12');



//Creo nuevos arrays donde se filte el genéro de las películas a partir de los Ids que corresponden a dichos generos
const peliculasAccion = peliculas.filter(peliculaAccion=>peliculaAccion.genre_ids.includes(28));
const peliculasAventura = peliculas.filter(peliculaAventura=>peliculaAventura.genre_ids.includes(12));
const peliculasThriller = peliculas.filter(peliculaThriller =>peliculaThriller.genre_ids.includes(53));

//Creo los forEach en cada uno de los arrays anteriores para indexar los elementos que se piden: titulo e imagen, en cada uno de los géneros
peliculasAccion.forEach(peliculaAccion=>{
    const peliculaDiv = document.createElement('div');
    peliculaDiv.classList.add('pelicula');
    const tituloPelicula = document.createElement('h3');
    tituloPelicula.textContent = peliculaAccion.original_title;
    peliculaDiv.appendChild(tituloPelicula);
    const imagenPelicula = document.createElement('img');
    imagenPelicula.src = peliculaAccion.poster_path;
    peliculaDiv.appendChild(imagenPelicula);
    generoAccion.appendChild(peliculaDiv);
    
});

peliculasAventura.forEach(peliculaAventura=>{
    const peliculaDiv = document.createElement('div');
    peliculaDiv.classList.add('pelicula');
    const tituloPelicula = document.createElement('h3');
    tituloPelicula.textContent = peliculaAventura.original_title;
    peliculaDiv.appendChild(tituloPelicula);
    const imagenPelicula = document.createElement('img');
    imagenPelicula.src = peliculaAventura.poster_path;
    peliculaDiv.appendChild(imagenPelicula);
    generoAventura.appendChild(peliculaDiv);
    
});

peliculasThriller.forEach(peliculaThriller=>{
    const peliculaDiv = document.createElement('div');
    peliculaDiv.classList.add('pelicula');
    const tituloPelicula = document.createElement('h3');
    tituloPelicula.textContent = peliculaThriller.original_title;
    peliculaDiv.appendChild(tituloPelicula);
    const imagenPelicula = document.createElement('img');
    imagenPelicula.src = peliculaThriller.poster_path;
    peliculaDiv.appendChild(imagenPelicula);
    generoThriller.appendChild(peliculaDiv);
});

// Compruebo que en consola no tengo fallo y se llama bien a los nuevos arrays que he creado anteriormente
console.log(peliculasAventura);
console.log(peliculasAccion);
console.log(peliculasThriller);



