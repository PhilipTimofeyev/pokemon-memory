import React, { useEffect, useState } from "react";

// getAllPokemon()

const Pokemon = (props) => {
    console.log("NO WAY")
    console.log(sessionStorage)
    const storedValue = sessionStorage.getItem(props.id);
    // console.log(sessionStorage)
    const newObj = (JSON.parse(storedValue))
    // console.log("Here")
    console.log(newObj.name)
    const pokemon = (
        <div>
            <h2>{newObj.name}</h2>
            <img src={newObj.image} width='150px' />
        </div>
    )

    // localStorage.setItem(props.id, pokemon)

    return pokemon
}


// function getAllPokemon() {
//     // if (!apiLoaded) {
//         sessionStorage.clear()
//         // useEffect(() => {
//         async function well() {
//             await processArray(arr)
//             // setApiLoaded(true)
//             console.log("done!")
//         }
//         const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//         async function processArray(arr) {
//             for (const item of arr) {
//                 const result = await fetchPokemon(item);
//                 // Do something with the result
//                 // const objectString = JSON.stringify(pokemon_data)
//                 // sessionStorage.setItem(id, objectString)
//                 console.log(result)
//             }
//             // setApiLoaded(true)
//         }
//         async function fetchPokemon(id) {
//             try {
//                 let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//                 let pokemon_data = await res.json()
//                 // setPokemonInfo(pokemon_data)
//                 // console.log(id)
//                 // const objectString = JSON.stringify(pokemon_data)
//                 // sessionStorage.setItem(id, objectString)
//                 // console.log(pokemon_data)
//                 return pokemon_data
//             }
//             catch (e) {
//                 console.error(e.message)
//             }
//         }
//         // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((id) => {
//         well()
//         // console.log(arr)
//         //     // console.log(sessionStorage)
//         // }, [])
//         // setApiLoaded(true)
//         console.log("Loaded!")

//     // }
// }

// getAllPokemon()

export default Pokemon