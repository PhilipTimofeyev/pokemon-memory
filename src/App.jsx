import { useState } from 'react'
import './App.css'
import Pokemon from './components/pokemon'

function App() {
 return (
    <div>
        <List/>
    </div>
 )
}


function List() {
    // let [pokemon, setPokemon] = useState([])
    const randomNums = [1, 2, 3, 4, 5, 6]


    const pokemon = [1, 2, 3, 4, 5, 6].map(pokemonID =>
        <li key={pokemonID}>
            <Card click={newPokemonSet}>
                <Pokemon id={pokemonID} />
            </Card>
        </li>
    );

    const [showPokemon, setShowPokemon] = useState(pokemon)

    function newPokemonSet() {
        const randomElement = randomNums[Math.floor(Math.random() * randomNums.length)];

        console.log([randomElement])

        const pokemonVisible = pokemon.filter((poke) => {
            return [randomElement].includes(parseInt(poke.key))
        })

        setShowPokemon([pokemonVisible])
    }


    // function reset() {
    //     console.log("yay")
    //     setPokemon(pokemon)
    // }


    // setPokemon(listItems)

    // function clearSelected() {
    //     listItems.forEach((el) => 
    //     console.log(el.props)
    // )
    // }

    // clearSelected()
    
    return <ul>{showPokemon}</ul>;
}

function Card({children, click}) {
    const [selectedCard, setSelectedCard] = useState(false)

    function handleClick() {
        if (selectedCard) {
            console.log("Double Yay")
            // Change current score to 0
            // Reset all cards to false
            // reset
        } else {
            // add one to current best
            click()
            console.log("Yay")
            // setSelectedCard(true)
        }
    }

    return (
        <div className="card" onClick={handleClick}>
            <p>{selectedCard && "Yay"}</p>
            {children}
        </div>
    );
}

export default App
