let url = "https://pokeapi.co/api/v2/pokemon/chimchar";



function getTypes(pokemonJSON) {
    let types = [];
    for(let type of pokemonJSON.types) {
        types.push(type.type.name);
    }
    return types;
}

function getMoves(pokemonJSON) {
    let moves = [];
    for(let move of pokemonJSON.moves) {
        moves.push(move.move.name);
    }
    return moves;
}

function getAbilities(pokemonJSON) {
    let abilities = [];
    for(let ability of pokemonJSON.abilities) {
        abilities.push(ability.ability.name)
    }
    return abilities;
}

function getImgs(pokemonJSON) {
    let imgs = [];
    for(let img of pokemonJSON.imgs) {
        imgs.push(img.img.push)
    }
    return imgs;
}

function createPokemonElement(pokemon) {
    //h1 tag for name
    let h1 = document.createElement("h1");
    h1.innerText = pokemon.name;
    //h2 tag for number
    let h2 = document.createElement("h2");
    h2.innerText = pokemon.number;
    //h3 tag for img
    let h3 = document.createElement("h3");
    h3.innerText = pokemon.img
    //p tag for types
    let p = document.createElement("p");
    for(let type of pokemon.types) {
        p.innerText += `${type}`
    }
    //ul(unordered list) tag for moves
    let moveUl = document.createElement("ul");
    for(let move of pokemon.moves) {
        moveUl.innerHTML += `<li>${move}</li>`;
    }
    //ul tag for abilities
    let abilityUl = document.createElement("ul");
    for(let ability of pokemon.abilities) {
        abilityUl.innerHTML += `<li>${ability}</li>`;
    }
    //div container for our pokemon 
    let div = document.createElement("div");
    div.append(h1, h2, p, moveUl, abilityUl, img);
    document.body.appendChild(div);
}

fetch(url)
.then((response) => response.json())
.then(function(data) {
    console.log(data);
    let img = data.front_default;``
    let name = data.name;
    let number = data.id;
    let types = getTypes(data);
    let moves = getMoves(data);
    let abilities = getAbilities(data);
    let chimchar = new Pokemon(name, number, types, moves, abilities, img)
    console.log(chimchar);
    createPokemonElement(chimchar);
})
.catch(function(error) {
    console.log(error);
})