import { useState, useEffect } from 'react'
import './App.css'
import Gameboard from './components/Gameboard'
import Score from './components/Score'
import Header from './components/Header'


function App() {

    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    
    const [data, setData] = useState(null);
    const [doneLoading, setDoneLoading] = useState(false);
    
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    useEffect(() => {
        // sessionStorage.clear()
        async function retrieve() {
            setDoneLoading(false); // Set loading state to true
            
            try {
                for (let i=1; i < 64; i++) {
                    let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                    let pokemon_data = await result.json()
                    const pokeData = { name: pokemon_data.name, image: pokemon_data.sprites.front_default }
                    console.log(pokeData)
                    const objectString = JSON.stringify(pokeData)
                    console.log(objectString)
                    sessionStorage.setItem(i, objectString)
                    // console.log(sessionStorage)
                }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
                setDoneLoading(true); // Set loading state to false
            }
        console.log("DONE")
        }
    
        retrieve()
        return () => {
            setDoneLoading(true)
        }
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
