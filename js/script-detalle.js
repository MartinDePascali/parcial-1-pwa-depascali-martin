const ID_POKEMON =  +window.location.href.split('?id=')[1];

const URL_ENDPOINT = 'https://pokeapi.co/api/v2/';
const URL_POKEMON = URL_ENDPOINT + 'pokemon/' + ID_POKEMON;

const URL_IMAGEN = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

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
        divImagen.appendChild(nombre);
        
        const ul = document.createElement('ul');
        ul.setAttribute('class', 'lista-tipos');
            for(var i = 0; i < pokemon.types.length; i++){
                const tipos = document.createElement('li');
                tipos.innerText = pokemon.types[i].type.name;
                tipos.setAttribute('class', pokemon.types[i].type.name + ' tipos');
                ul.appendChild(tipos);
            }
        divImagen.appendChild(ul);
        
        
        const contenedorSprites = document.createElement('div');

            const tituloSprites = document.createElement('h3');
            tituloSprites.innerText = 'Sprites';
            contenedorSprites.appendChild(tituloSprites);

            const imagenJuegoAtras = document.createElement('img');
            imagenJuegoAtras.setAttribute('src', pokemon.sprites.back_default);
            imagenJuegoAtras.setAttribute('alt', pokemon.name);
            contenedorSprites.appendChild(imagenJuegoAtras);

            const imagenJuego = document.createElement('img');
            imagenJuego.setAttribute('src', pokemon.sprites.front_default);
            imagenJuego.setAttribute('alt', pokemon.name);
            contenedorSprites.appendChild(imagenJuego);

            const imagenJuegoShinyAtras = document.createElement('img');
            imagenJuegoShinyAtras.setAttribute('src', pokemon.sprites.back_shiny);
            imagenJuegoShinyAtras.setAttribute('alt', pokemon.name);
            contenedorSprites.appendChild(imagenJuegoShinyAtras);

            const imagenJuegoShiny = document.createElement('img');
            imagenJuegoShiny.setAttribute('src', pokemon.sprites.front_shiny);
            imagenJuegoShiny.setAttribute('alt', pokemon.name);
            contenedorSprites.appendChild(imagenJuegoShiny);

        div.appendChild(contenedorSprites);

        const pokedexNumber = document.createElement('p');
        pokedexNumber.innerText = 'N°: ' + pokemon.order;
        div.appendChild(pokedexNumber);
        
        const altura = document.createElement('p');
        altura.innerText = 'Altura: ' + pokemon.height + 'm';
        div.appendChild(altura);

        const peso = document.createElement('p');
        peso.innerText = 'Peso: ' + pokemon.weight + 'kg';
        div.appendChild(peso);
        
        const containerAudio = document.createElement('div');
            const tituloAudio = document.createElement('h3');
            tituloAudio.innerText = 'Grito';
        containerAudio.appendChild(tituloAudio);
            const audio = document.createElement('audio');
                audio.setAttribute('src', pokemon.cries.latest);
                audio.setAttribute('preload', 'auto');
                audio.setAttribute('type', 'audio/ogg');
                audio.setAttribute('controls', 'controls');
            containerAudio.appendChild(audio);
        div.appendChild(containerAudio);
        
        const containerAbility = document.createElement('div');
            const tituloAbility = document.createElement('h3');
            tituloAbility.innerText = 'Habilidades';
        containerAbility.appendChild(tituloAbility);
            const ulAbility = document.createElement('ul');
            ulAbility.setAttribute('class', 'lista-habilidades');
            for(var i = 0; i < pokemon.abilities.length; i++){
                const habilidades = document.createElement('li');
                habilidades.innerText = pokemon.abilities[i].ability.name;
                ulAbility.appendChild(habilidades);
            }
        containerAbility.appendChild(ulAbility);
        div.appendChild(containerAbility);

        const containerStats = document.createElement('div');
        containerStats.setAttribute('class', 'stats-container');
        const tituloStats = document.createElement('h3');
        tituloStats.innerText = 'Estadísticas';
        containerStats.appendChild(tituloStats);
        const ulStats = document.createElement('ul');
        ulStats.setAttribute('class', 'stats');
        for(var i = 0; i < pokemon.stats.length; i++){
            const stats = document.createElement('li');
            stats.style.gridColumn = "span " + pokemon.stats[i].base_stat;
            stats.innerText = pokemon.stats[i].stat.name + ' - ' + pokemon.stats[i].base_stat;
            ulStats.appendChild(stats);
        }
        containerStats.appendChild(ulStats);
        div.appendChild(containerStats);

    contenedor.appendChild(div);

    // for (var key in pokemon.sprites.other.showdown) {
    //     if (pokemon.sprites.other.showdown.hasOwnProperty(key)) {
    //         if(pokemon.sprites.other.showdown[key] != null){
    //             const imagenTest = document.createElement('img');
    //             imagenTest.setAttribute('src', pokemon.sprites.other.showdown[key]);
    //             contenedorSprites.appendChild(imagenTest);
    //             console.log(pokemon.sprites.other.showdown[key]);
    //         }
    //     }
    // }
}

fetch(URL_POKEMON)
.then(data => data.json())
.then(result => {
        mostrarDetalles(result);
})
