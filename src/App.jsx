import { useState } from 'react'
import './App.css'
import Gameboard from './components/Gameboard'


function App() {

    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    function updateScore() {
        setCurrentScore(currentScore + 1)

        if(currentScore + 1 > bestScore) setBestScore(bestScore + 1)
    }

    function resetScore() {
        setCurrentScore(0)
    }

    return (
        <div>
            <Score currentScore={currentScore} bestScore={bestScore} />
            <Gameboard updateScore={updateScore} resetScore={resetScore} />
        </div>
 )
}

function Score({ currentScore, bestScore }) {

    return (
        <>
        <div className='scores'>
            <h2>Current Score: {currentScore}</h2>
            <h2>Best Score: {bestScore}</h2>
        </div>
        </>
    )
}

export default App
