const ID_POKEMON =  +window.location.href.split('?id=')[1];

const URL_ENDPOINT = 'https://pokeapi.co/api/v2/';
const URL_POKEMON = URL_ENDPOINT + 'pokemon' + '/' + ID_POKEMON;

const URL_IMAGEN = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

console.log(URL_POKEMON);

const mostrarDetalles = (pokemon) => {
    const contenedor = document.getElementById("ListaContenedorDetalles");
    const li = document.createElement('li');

    const id = URL_POKEMON.split('/')[6];
    const imagen = document.createElement('img');
    imagen.setAttribute('src', URL_IMAGEN + id + '.png');
    imagen.setAttribute('alt', pokemon.name);
    li.appendChild(imagen);

    const nombre = document.createElement('h2');
    nombre.innerText = pokemon.name;
    li.appendChild(nombre);

    const altura = document.createElement('h2');
    altura.innerText = pokemon.height;
    li.appendChild(altura);

    contenedor.appendChild(li);

    for(var i = 0; i < pokemon.types.length; i++){
        console.log(pokemon.types[i].type.name);
        const tipos = document.createElement('p');
        tipos.innerText = pokemon.types[i].type.name;
        tipos.setAttribute('class', pokemon.types[i].type.name);
        li.appendChild(tipos);
    }

    console.log(pokemon);
}

fetch(URL_POKEMON)
.then(data => data.json())
.then(result => {
        mostrarDetalles(result);
})
