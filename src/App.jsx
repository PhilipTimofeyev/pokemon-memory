import { useState } from 'react'
import './App.css'
import Pokemon from './components/pokemon'

function App() {

    const [currentScore, setCurrentScore] = useState(0)

    function updateScore() {
        setCurrentScore(currentScore + 1)
    }

    function resetScore() {
        setCurrentScore(0)
    }

    return (
        <div>
            <Score currentScore={currentScore}/>
            <Gameboard updateScore={updateScore} resetScore={resetScore} />
        </div>
 )
}


function Gameboard({updateScore, resetScore}) {
    const pokemonObj = {1:false, 2:false, 3:false, 4:false}

    const [showPokemon, setShowPokemon] = useState(pokemonObj)

    const pokemon = Object.entries(selectRandomPokemon()).map(([pokemonID, selected]) =>
        <li key={pokemonID}>
            <Card click={newPokemonSet} isSelected={selected} pokemonID={pokemonID}>
                <Pokemon id={pokemonID} />
            </Card>
        </li>
    );

    function selectRandomPokemonIDs(amount = 2) {
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

function Card({children, isSelected, pokemonID, click}) {

    function handleClick() {
        click(pokemonID)
    }

    return (
        <div className="card" onClick={handleClick}>
            <p>{isSelected && "Yay"}</p>
            {children}
        </div>
    );
}

function Score({currentScore}) {

    return (
        <h1>Score: {currentScore}</h1>
    )
}

export default App
