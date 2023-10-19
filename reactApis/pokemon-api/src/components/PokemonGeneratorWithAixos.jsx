import React, { useState } from "react";
import axios from 'axios';




const PokemonGeneratorWithAixos = () => {

    let [pokemonList, setPokemonList] = useState([])

    const getPokemonFrpmApi = () => {
        console.log("Just checking")

        axios.get("https://pokeapi.co/api/v2/pokemon?=1000")
            .then((reponse) => {
                console.log("got data")
                console.log(reponse)
                setPokemonList(reponse.data.results)
            })
            .catch((error) => {
                console.log("ERROR/something went wrong", error)
            })
    }

    return (
        <>
            <button onClick={getPokemonFrpmApi} className="btn btn-success">Get PokeMon</button>
            {
                pokemonList.map((monObj, indexNum) => {
                    return (
                        <div>
                            <h1>{monObj.name}</h1>
                            <p></p>
                            <a href={monObj.url}>{monObj.url}</a>
                            <hr />
                        </div>
                    )
                })
            }




        </>





    )

}






export default PokemonGeneratorWithAixos;