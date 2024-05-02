const ID_POKEMON =  +window.location.href.split('?id=')[1];

const URL_ENDPOINT = 'https://pokeapi.co/api/v2/';
const URL_POKEMON = URL_ENDPOINT + 'pokemon/' + ID_POKEMON;

const URL_IMAGEN = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

// const mostrarDetalles = (pokemon) => {
//     const contenedor = document.getElementById("ListaContenedorDetalles");
//     const li = document.createElement('li');

//     const id = URL_POKEMON.split('/')[6];

//     const imagen = document.createElement('img');
//     imagen.setAttribute('src', URL_IMAGEN + id + '.png');
//     imagen.setAttribute('alt', pokemon.name);
//     li.appendChild(imagen);

//     const nombre = document.createElement('h2');
//     nombre.innerText = pokemon.name;
//     li.appendChild(nombre);
    
//     for(var i = 0; i < pokemon.types.length; i++){
//         console.log(pokemon.types[i].type.name);
//         const tipos = document.createElement('p');
//         tipos.innerText = pokemon.types[i].type.name;
//         tipos.setAttribute('class', pokemon.types[i].type.name + ' tipos');
//         li.appendChild(tipos);
//     }

//     console.log(pokemon);

//     const altura = document.createElement('h2');
//     altura.innerText = 'Altura' + pokemon.height;
//     li.appendChild(altura);
//     contenedor.appendChild(li);

//     const peso = document.createElement('p');
//     peso.innerText = 'Peso: ' + pokemon.weigth;
//     li.appendChild(peso);

//     contenedor.appendChild(li);
// }

const mostrarDetalles = (pokemon) => {
    const contenedor = document.getElementById("ListaContenedorDetalles");
    const div = document.createElement('div');
    div.setAttribute('class', 'contenedor-datos');

        const divImagen = document.createElement('div');
            const id = URL_POKEMON.split('/')[6];
            const imagen = document.createElement('img');
            imagen.setAttribute('src', URL_IMAGEN + id + '.png');
            imagen.setAttribute('alt', pokemon.name);
            divImagen.appendChild(imagen);
        contenedor.appendChild(divImagen);

        const nombre = document.createElement('h2');
        nombre.innerText = pokemon.name;
        div.appendChild(nombre);
        
        const ul = document.createElement('ul');
            for(var i = 0; i < pokemon.types.length; i++){
                console.log(pokemon.types[i].type.name);
                const tipos = document.createElement('li');
                tipos.innerText = pokemon.types[i].type.name;
                tipos.setAttribute('class', pokemon.types[i].type.name + ' tipos');
                ul.appendChild(tipos);
            }
        div.appendChild(ul);

        const pokedexNumber = document.createElement('p');
        pokedexNumber.innerText = 'N°: ' + pokemon.order;
        div.appendChild(pokedexNumber);
        
        const altura = document.createElement('p');
        altura.innerText = 'Altura: ' + pokemon.height;
        div.appendChild(altura);

        const peso = document.createElement('p');
        peso.innerText = 'Peso: ' + pokemon.weight;
        div.appendChild(peso);
        
        const audio = document.createElement('audio');
            audio.setAttribute('src', pokemon.cries.latest);
            audio.setAttribute('preload', 'auto');
            audio.setAttribute('type', 'audio/ogg');
            audio.setAttribute('controls', 'controls');
        div.appendChild(audio);
        
        const ulAbility = document.createElement('ul');
        ulAbility.setAttribute('class', 'lista-habilidades');
        for(var i = 0; i < pokemon.abilities.length; i++){
            console.log(pokemon.abilities[i].ability.name);
            const habilidades = document.createElement('li');
            habilidades.innerText = pokemon.abilities[i].ability.name;
            ulAbility.appendChild(habilidades);
        }
        div.appendChild(ulAbility);

    contenedor.appendChild(div);


    console.log(pokemon);
}

fetch(URL_POKEMON)
.then(data => data.json())
.then(result => {
        mostrarDetalles(result);
})
