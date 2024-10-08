import { useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import Pokemon from '../components/Pokemon'

const TOTAL_POKEMON = 106
const NUM_OF_POKEMON_TO_SHOW = 9

const pokemonObj = setupPokemon(TOTAL_POKEMON)

function setupPokemon(amount = TOTAL_POKEMON) {
    const result = {}

    for (let i = 1; i < amount; i++) {
        result[i] = false
    }

    return result
}


export default function Gameboard({ updateScore, resetScore }) {
    const [pokemon, setPokemon] = useState(pokemonObj)

    const showPokemon = Object.entries(selectRandomPokemon()).map(([pokemonID, selected]) =>
            <li key={pokemonID}>
                <PokemonCard click={newPokemonSet} pokemonID={pokemonID}>
                    <Pokemon id={pokemonID} />
                </PokemonCard>
            </li>
    );

    const storedValue = localStorage.getItem('key');

    function selectRandomPokemonIDs(amount = NUM_OF_POKEMON_TO_SHOW) {
        const randomPokemon = []
        const keys = Object.keys(pokemonObj)

        while (randomPokemon.length < amount) {
            const randomID = keys[Math.floor(Math.random() * keys.length)];

            if (!randomPokemon.includes(randomID)) randomPokemon.push(randomID)
        }
        return randomPokemon
    }

    function selectRandomPokemon() {
        const newRandomSet = {}
        const randomIDArr = selectRandomPokemonIDs()

        console.log(randomIDArr)
        
        for (const [key, value] of Object.entries(pokemon)) {
            if (randomIDArr.includes(key)) newRandomSet[key] = value
        }

        randomIDArr.forEach((id) => {
            console.log(id)
            newRandomSet[id] = pokemon[id]
        })
        console.log(newRandomSet)
        return newRandomSet
    }

    function newPokemonSet(e) {
        let newSet

        if (pokemon[e]) {
            newSet = { ...pokemon }
            resetScore()
            newSet = pokemonObj
        } else {
            newSet = { ...pokemon, [e]: true }
            updateScore()
        }

        setPokemon(newSet)

    }

    return (
        <div className="gameboard">
            <ul className='cards'>{showPokemon}</ul>
        </div>
    );
}