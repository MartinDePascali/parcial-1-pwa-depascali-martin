const URL_ENDPOINT = 'https://pokeapi.co/api/v2/';
const URL_POKEMON = URL_ENDPOINT + 'pokemon?limit=100&offset=0';

const mostrarLista = (pokemon) => {
    const contenedor = document.getElementById("ListaContenedor");
    const li = document.createElement('li');

    const nombre = document.createElement('h2');
    nombre.innerText = pokemon.name;
    li.appendChild(nombre);

    contenedor.appendChild(li);
}

fetch(URL_POKEMON)
.then(data => data.json())
.then(result => {
    const results = result.results.slice(0,100);
    results.forEach(element =>{
        mostrarLista(element);
    });
})
