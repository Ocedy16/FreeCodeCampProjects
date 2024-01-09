const PokemonName = document.getElementById("pokemon-name");
const PokemonID = document.getElementById("pokemon-id");
const Weight = document.getElementById("weight");
const Height = document.getElementById("height");
const Types = document.getElementById("types");
const HP = document.getElementById("hp");
const Attack = document.getElementById("attack");
const Defense = document.getElementById("defense");
const SPAttack = document.getElementById("special-attack");
const SPDefense = document.getElementById("special-defense");
const Speed = document.getElementById("speed");


async function getPokemon() {
    try{
        const pokemon = document.getElementById("search-input").toLowerCase();
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`);
        const data = await response.json();
    }

    catch (error) {
        alert("Pokemon not found.");
    }  
    
    PokemonName.textContent = `${data.name}`;
    PokemonID.textContent = `${data.id}`;
    Weight.textContent = `${data.weight}`;
    Height.textContent = `${data.height}`;
    

    Attack.textContent = `${data.stats[1].base_stat}`;
    Defense.textContent = `${data.stats[2].base_stat}`;
    SPAttack.textContent = `${data.stats[3].base_stat}`;
    SPDefense.textContent = `${data.stats[4].base_stat}`;
    Speed.textContent = `${data.stats[5].base_stat}`;
    //[0].toUpperCase()+data.name.slice[1]
}