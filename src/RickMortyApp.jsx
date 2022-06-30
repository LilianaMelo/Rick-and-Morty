// Componente padre.
import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./components/Card/Card";
import { Navbar } from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";
import './styles.css';
import './components/Navbar/styleNavbar.css';


export const RickMortyApp = () => {

    const [characters, setCharacters] = useState([]);

    const [info, setInfo] = useState({});

        const [pageNumber, updatePageNumber] = useState(1); // numero de pagina y #pagina actual

        //const [search, setSearch] = useState("");

    const initialUrl = `https://rickandmortyapi.com/api/character`;

    const fetchCharacters = (url) => {

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                setInfo(data.info);
                //setSearch(data.results);
                
            })

            //  .then(data => console.log(data.results))
            .catch(error => console.log(error))
    };

    const onPrevious = () => {
        fetchCharacters(info.prev);
    }

    const onNext = () => {
        fetchCharacters(info.next);
    }

    const onCountPages = () => {
        fetchCharacters(info.pages);
    }

    useEffect(() => {
        fetchCharacters( initialUrl); // se ejecuta una sola vez
    }, [])


    return (

        <>
            <Navbar brand="RICK AND MORTY APP" />

            <Pagination 
                
                prev={info.prev} 
                next={info.next} 
                onPrevious={onPrevious} 
                onNext={onNext}
                onCountPages={onCountPages}

                pages={info.pages}
                info={info}
                pageNumber={pageNumber}
                updatePageNumber={updatePageNumber}    
            />

            <div className="containerGrid">
                <Card characterCard={characters} />
            </div>

            <Pagination 
                prev={info.prev} 
                next={info.next} 
                onPrevious={onPrevious} 
                onNext={onNext} 
            />

        </>
    )

}
