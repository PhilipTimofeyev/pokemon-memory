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

function Card({ children }) {
    const [selectedCard, setSelectedCard] = useState(false)

    function handleClick() {
        setSelectedCard(true)
    }
    return (
        <div className="card" onClick={handleClick}>
            <p>{selectedCard && "Yay"}</p>
            {children}
        </div>
    );
}

function List() {
    const listItems = [1, 2, 3, 4].map(pokemonID =>
        <li key={pokemonID}>
            <Card>
                <Pokemon id={pokemonID} />
            </Card>
        </li>
    );
    return <ul>{listItems}</ul>;
}

export default App
