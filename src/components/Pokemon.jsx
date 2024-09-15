
const Pokemon = (props) => {
    const storedValue = sessionStorage.getItem(props.id);
    const newObj = (JSON.parse(storedValue))


    let capitalName = newObj.name.charAt(0).toUpperCase() + newObj.name.slice(1);

    const pokemon = (
        <div>
            <h2>{capitalName}</h2>
            <img src={newObj.image} width='150px' />
        </div>
    )

    return pokemon
}


export default Pokemon