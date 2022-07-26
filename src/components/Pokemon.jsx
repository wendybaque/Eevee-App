import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../components/pokemon.css";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const getPokeAPI = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/133")
        .then(response => {
            setPokemon(response.data)
        })
    }

    useEffect(() => {
        getPokeAPI();
    }, [])

  return (
    <div className='pokemon-container'>
        <p>Hello trainer ! You just captured {pokemon.name} !</p>
        <p>The n°{pokemon.id} in the Pokedex. </p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="name of the Pokemon"/>
    </div>
  )
}

export default Pokemon