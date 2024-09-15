import { useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import Pokemon from '../components/pokemon'

const TOTAL_POKEMON = 64
const NUM_OF_POKEMON_TO_SHOW = 16

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
            <PokemonCard click={newPokemonSet} isSelected={selected} pokemonID={pokemonID}>
                <Pokemon id={pokemonID} />
                {/* <TestComponent num={pokemonID}/> */}
            </PokemonCard>
        </li>
    );

    const storedValue = localStorage.getItem('key');
    // console.log(storedValue)

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

        for (const [key, value] of Object.entries(pokemon)) {
            if (randomIDArr.includes(key)) newRandomSet[key] = value
        }
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

    return <ul className='cards'>{showPokemon}</ul>;
}