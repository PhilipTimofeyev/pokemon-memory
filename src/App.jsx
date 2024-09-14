import { useState } from 'react'
import './App.css'
import Pokemon from './components/pokemon'
import Gameboard from './components/gameboard'

const TOTAL_POKEMON = 20
const NUM_OF_POKEMON_TO_SHOW = 5

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
