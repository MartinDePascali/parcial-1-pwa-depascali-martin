const URL_ENDPOINT = 'https://pokeapi.co/api/v2/';
const URL_POKEMON = URL_ENDPOINT + 'pokemon?limit=100&offset=0';
const URL_POKEMON_LIST = URL_ENDPOINT + 'pokemon';
const URL_IMAGEN = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const guardarPokemon = (pokemon) => {
    const datos = JSON.parse(localStorage.getItem("historial")) || [];
    datos.push(pokemon);
    localStorage.setItem("historial", JSON.stringify(datos));
}

const mostrarLista = (pokemon) => {
    const contenedor = document.getElementById("ListaContenedor");
    const li = document.createElement('li');

    const id = pokemon.url.split('/')[6];

    li.addEventListener('click', () => {
        mostrarDetalles(id);
        guardarPokemon(pokemon);
    })

    const contenedorDatos = document.createElement('div');
    contenedorDatos.setAttribute('class', 'datos-pokedex');
        const numeroPokedex = document.createElement('p');
        numeroPokedex.innerText = 'N°' + id;
        const nombre = document.createElement('h2');
        nombre.innerText = pokemon.name;
    contenedorDatos.appendChild(numeroPokedex);
    contenedorDatos.appendChild(nombre);
    li.appendChild(contenedorDatos);

    const imagen = document.createElement('img');
    imagen.setAttribute('src', URL_IMAGEN + id + '.png');
    imagen.setAttribute('alt', pokemon.name);
    li.appendChild(imagen);

    contenedor.appendChild(li);
}

const mostrarDetalles = (id) =>  {
    window.location.href = "http://127.0.0.1:5501/detalle.html?id=" + id;
}

const mostrarPokemonHistorial = (item) => {
    const contenedorHistorial = document.querySelector('.historial');
    const contenedorImagen = document.createElement('div');
    contenedorImagen.setAttribute('class', 'imagen-historial');

    const id = item.url.split('/')[6];
    const imagen = document.createElement('img');
    imagen.setAttribute('src', URL_IMAGEN + id + '.png');
    imagen.setAttribute('alt', item.name);

    imagen.addEventListener('click', () => {
        mostrarDetalles(id);
        guardarPokemon(pokemon);
    })

    contenedorImagen.appendChild(imagen);
    contenedorHistorial.appendChild(contenedorImagen);
}

const mostrarHistorial = () => {
    const datos = JSON.parse(localStorage.getItem("historial")) || [];

    datos.forEach(item => {
        mostrarPokemonHistorial(item);
    })
}

fetch(URL_POKEMON)
.then(data => data.json())
.then(result => {
    const results = result.results.slice(0,100);
    results.forEach(element =>{
        mostrarLista(element);
    });
})

mostrarHistorial();