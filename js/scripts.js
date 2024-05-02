const URL_ENDPOINT = 'https://pokeapi.co/api/v2/';
const URL_POKEMON = URL_ENDPOINT + 'pokemon?limit=100&offset=0';
const URL_POKEMON_LIST = URL_ENDPOINT + 'pokemon';
const URL_IMAGEN = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const mostrarLista = (pokemon) => {
    const contenedor = document.getElementById("ListaContenedor");
    const li = document.createElement('li');

    const id = pokemon.url.split('/')[6];

    li.addEventListener('click', () => {
        mostrarDetalles(id);
    })

    const nombre = document.createElement('h2');
    nombre.innerText = id + '-' + pokemon.name;
    li.appendChild(nombre);

    const imagen = document.createElement('img');
    imagen.setAttribute('src', URL_IMAGEN + id + '.png');
    imagen.setAttribute('alt', pokemon.name);
    li.appendChild(imagen);

    contenedor.appendChild(li);
}

const mostrarDetalles = (id) =>  {
    window.location.href = "http://127.0.0.1:5501/detalle.html?id=" + id;
}

fetch(URL_POKEMON)
.then(data => data.json())
.then(result => {
    const results = result.results.slice(0,100);
    results.forEach(element =>{
        mostrarLista(element);
    });
})
