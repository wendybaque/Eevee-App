import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { desktop } from './responsive';
import axios from 'axios';

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    ${desktop({fontSize: `4rem`,})}
`

const Description = styled.p `
    font-family: 'Staatliches', cursive;
    text-align: center;
    color:white;
    margin: 1rem;
    font-weight: bold;
    font-size: 2rem;
    color: #fff;
      text-shadow: 0 0 6px #fff, 
               0 0 10px #fff, 
               0 0 30px rgb(230, 18, 124),   
               0 0 70px rgb(230, 18, 124), 
               0 0 100px rgb(230, 18, 124)
`

const Image = styled.img `
    width: 10rem;
    height: 16rem;
    margin: 1rem;
    filter: drop-shadow(0 0 0.75rem rgb(220, 18, 124));
`

const Button = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-family: 'Staatliches', cursive;
    cursor: pointer;
    border-radius: 0.5rem;
    border: none;
    margin: 1rem;
    width: 6em;
    height: 2rem;
    font-weight: bold;
      box-shadow: inset 0 0 18px #fff,
        inset 6px 0 18px #f3bad6,
        inset -6px 0 18px #0ff,
        inset 6px 0 30px #f3bad6, 
        inset -6px 0 30px #0ff,
        0 0 18px #fff, -4px 0 18px #f3bad6,
        4px 0 18px #0ff;
    }
`

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonId, setPokemonId] = useState(133);

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
    <Container>
        <Description>Hello trainer ! You just captured {pokemon.name} !</Description>
        <Description>The n°{pokemon.id} in the Pokedex. </Description>
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="name of the Pokemon"/>
        <Button id="button-previous" type='button' onClick={() => getPokeAPI(pokemonId - 1)}>Previous</Button>
        <Button id="button-next" type='button' onClick={() => getPokeAPI(pokemonId + 1)}>Next</Button>
    </Container>
  )
}

export default Pokemon