
export default function Pokemon(props) {
    const storedValue = sessionStorage.getItem(props.id);
    const newObj = (JSON.parse(storedValue))


    let capitalName = newObj.name.charAt(0).toUpperCase() + newObj.name.slice(1);

    const pokemon = (
        <div>
            <p>{capitalName}</p>
            <img src={newObj.image} />
        </div>
    )

    return pokemon
}


// export default Pokemon