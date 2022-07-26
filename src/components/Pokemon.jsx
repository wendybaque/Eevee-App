import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../components/pokemon.css";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonId, setPokemonId] = useState(1);

    const getPokeAPI = (id) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
            setPokemon(response.data);
            setPokemonId(id);
        })
    }

    useEffect(() => {
        getPokeAPI(pokemonId);
    }, [pokemonId])

  return (
    <div className='pokemon-container'>
        <p>Hello trainer ! You just captured {pokemon.name} !</p>
        <p>The n°{pokemon.id} in the Pokedex. </p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="name of the Pokemon"/>
        <button id="button-previous" type='button' onClick={() => getPokeAPI(pokemonId - 1)}>Previous</button>
        <button id="button-next" type='button' onClick={() => getPokeAPI(pokemonId + 1)}>Next</button>
    </div>
  )
}

export default Pokemon