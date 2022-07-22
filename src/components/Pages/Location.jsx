import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import InputGroup from "../Category/InputGroup";

const Location = () => {
    
    const [id, setID] = useState(1);
    const [info, setInfo] = useState([]);
    const { name, type, dimension } = info;
    // console.log(info); // aqui muestra la fecha,nombre y personajes del episodio.

    const [results, setResults] = useState([]); // results sale de la desestructuracion de la info que se hizo en Cards.

    const apiEpisodes = `https://rickandmortyapi.com/api/location/${id}`;

    useEffect (() => {

        (async function(){
            const data = await fetch(apiEpisodes).then(res => res.json());
            // console.log(data);
            setInfo(data);

            const infoCharacters = await Promise.all(
                data.residents.map((x) => {
                    return fetch(x).then((res) => res.json());
                })
            ); // data.characters es la informacion de episodes api.
            setResults(infoCharacters);
        })()

    }, [apiEpisodes]);

    return (

        <div className="container">
            <div className="titleEpi">
                <h1>Ubicación: {" "} 
                    <span className="colorName">{ name }</span>
                </h1> 
                <h5> Dimensión: { dimension}</h5>
                <h5> Tipo: { type}</h5>
            </div>

            <div className="containerEpisodios ">

                <div className="cardEpi">
                    <InputGroup setID={setID} name="Ubicación" total={126} />
                </div>

                <div className="containerGrid">
                
                    <Card page="/location/" results={results}/>

                </div>
            </div>
        </div>
    )
}

export default Location;