import { memo } from 'react';

export default function Card({ children, isSelected, pokemonID, click }) {

    function handleClick() {
        click(pokemonID)
    }

    return (
        <div className="card" onClick={handleClick}>
            {/* <p>{isSelected && "Yay"}</p> */}
            {children}
        </div>
    );
}


