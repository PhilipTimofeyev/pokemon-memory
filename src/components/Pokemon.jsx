import React, { useEffect, useState } from "react";

const Pokemon=()=> {
    const [pokemonInfo, setPokemonInfo] = useState('')

    useEffect(()=> {
        async function fetchPokemon(){
            try{
                let res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
                let pokemon_data = await res.json()
                setPokemonInfo(pokemon_data)
            }
            catch(e) {
                console.error(e.message)
            }
        }
        fetchPokemon()
    }, [])

    if (pokemonInfo==='') {
        return null
    }

    return (
        <div>
            <h2>{pokemonInfo.name}</h2>
            <img src={pokemonInfo.sprites.front_default} />
        </div>
    )
}

export default Pokemon