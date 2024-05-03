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

        console.log(pokemon);
        guardarPokemon(pokemon);
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

const mostrarPokemonHistorial = (item) => {
    // const listaHistorial = document.querySelector('.historial');
    // const tarjetaHistorial = document.createElement('p');
    // tarjetaHistorial.className = "item";
    // tarjetaHistorial.innerText = JSON.stringify(item.name);
    // listaHistorial.appendChild(tarjetaHistorial);

    const listaHistorial = document.querySelector('.historial');
    const id = item.url.split('/')[6];
    const imagen = document.createElement('img');
    imagen.setAttribute('src', URL_IMAGEN + id + '.png');
    imagen.setAttribute('alt', item.name);
    imagen.setAttribute('class', 'imagen-historial');
    listaHistorial.appendChild(imagen);
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