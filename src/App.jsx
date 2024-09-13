import { useState } from 'react'
import './App.css'
import Pokemon from './components/pokemon'

function App() {
 return (
    <div>
        {/* <Pokemon id="11"/> */}
        <List/>
    </div>
 )
}

function Card({ children }) {
    return (
        <div className="card">
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
