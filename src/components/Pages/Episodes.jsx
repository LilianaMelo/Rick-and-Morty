import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import InputGroup from "../Category/InputGroup";


const Episodes = () => {
    
    const [id, setID] = useState(1);
    const [info, setInfo] = useState([]);
    const {air_date, name} = info
    // console.log(info); // aqui muestra la fecha,nombre y personajes del episodio.
    const [results, setResults] = useState([]); // results sale de la desestructuracion de la info que se hizo en Cards.

    const apiEpisodes = `https://rickandmortyapi.com/api/episode/${id}`;
    

    useEffect (() => {

        (async function(){
            const data = await fetch(apiEpisodes).then(res => res.json());
            // console.log(data);
            setInfo(data);

            const infoCharacters = await Promise.all(
                data.characters.map((character) => {
                    return fetch(character).then((res) => res.json());
                })
            ); // data.characters es la informacion de episodes api.
            setResults(infoCharacters);
        })()

    }, [apiEpisodes]);


    return (

        <div className="container">
            <div className="titleEpi">
                <h1>Nombre del Episodio: {" "} 
                    <span className="colorName">{ name }</span>
                </h1> 
                <h5>Fecha de estreno: {air_date}</h5>
            </div>


            <div className="containerEpisodios ">

                <div className="cardEpi">
                    <InputGroup setID={setID} name="Episodio" total={51} />
                </div>

                <div className="containerGrid">
                    <Card page="/episodes/" results={results} />
                </div>
            </div>
        </div>
    )
}

export default Episodes;