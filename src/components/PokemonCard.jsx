import { memo } from 'react';

export default function Card({ children, pokemonID, click }) {

    function handleClick() {
        click(pokemonID)
    }

    return (
        <div className="card" onClick={handleClick}>
            {children}
        </div>
    );
}


