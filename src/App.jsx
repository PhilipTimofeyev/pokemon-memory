import { useState, useEffect } from 'react'
import './App.css'
import Gameboard from './components/Gameboard'
import Score from './components/Score'
import Header from './components/Header'

sessionStorage.clear()

function App() {

    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    
    const [doneLoading, setDoneLoading] = useState(false);

    
    useEffect(() => {
        async function retrieve() {
            setDoneLoading(false); 
            try {
                for (let i=1; i < 106; i++) {
                    let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                    let pokemon_data = await result.json()
                    const pokeData = { name: pokemon_data.name, image: pokemon_data.sprites.front_default }
                    const objectString = JSON.stringify(pokeData)
                    sessionStorage.setItem(i, objectString)
                }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
                setDoneLoading(true); 
            }
        }
    
        retrieve()
    }, []);
    
    if (!doneLoading) {
        return <div>Loading...</div>;
    }
    
    function updateScore() {
        setCurrentScore(currentScore + 1)

        if(currentScore + 1 > bestScore) setBestScore(bestScore + 1)
    }

    function resetScore() {
        setCurrentScore(0)
    }

    return (
        <div>
            <Header/>
            <Score currentScore={currentScore} bestScore={bestScore} />
            {doneLoading && <Gameboard updateScore={updateScore} resetScore={resetScore} />}
        </div>
     )
}


export default App
