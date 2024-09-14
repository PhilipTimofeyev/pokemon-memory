import { useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import Pokemon from '../components/pokemon'

const TOTAL_POKEMON = 20
const NUM_OF_POKEMON_TO_SHOW = 5

export default function Gameboard({ updateScore, resetScore }) {
    const pokemonObj = setupPokemon(TOTAL_POKEMON)

    const [showPokemon, setShowPokemon] = useState(pokemonObj)

    const pokemon = Object.entries(selectRandomPokemon()).map(([pokemonID, selected]) =>
        <li key={pokemonID}>
            <PokemonCard click={newPokemonSet} isSelected={selected} pokemonID={pokemonID}>
                <Pokemon id={pokemonID} />
            </PokemonCard>
        </li>
    );

    function selectRandomPokemonIDs(amount = 5) {
        const randomPokemon = []
        const keys = Object.keys(pokemonObj)

        while (randomPokemon.length < NUM_OF_POKEMON_TO_SHOW) {
            const randomID = keys[Math.floor(Math.random() * keys.length)];

            if (!randomPokemon.includes(randomID)) randomPokemon.push(randomID)
        }

        return randomPokemon
    }

    function setupPokemon(amount = 20) {
        const result = {}

        for (let i = 1; i < amount; i++) {
            result[i] = false
        }

        return result
    }

    function selectRandomPokemon() {
        const newRandomSet = {}
        const randomIDArr = selectRandomPokemonIDs()

        for (const [key, value] of Object.entries(showPokemon)) {
            if (randomIDArr.includes(key)) newRandomSet[key] = value
        }

        return newRandomSet
    }

    function newPokemonSet(e) {
        // console.log(e)
        let newSet

        if (showPokemon[e]) {
            newSet = { ...showPokemon }
            resetScore()
            newSet = pokemonObj
        } else {
            newSet = { ...showPokemon, [e]: true }
            updateScore()
        }

        setShowPokemon(newSet)

    }

    return <ul>{pokemon}</ul>;
}