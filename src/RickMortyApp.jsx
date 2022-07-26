// Componente padre.
import React, { useState, useEffect } from "react";

import Card from "./components/Card/Card";
import Navbar  from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Pagination from "./components/Pagination/Pagination";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Episodes from "./components/Pages/Episodes"
import Location  from "./components/Pages/Location";
import CardDetails from "./components/Card/CardDetails";


import './styles.css';
import './components/Navbar/styleNavbar.css';
import './components/Card/styleCardDetail.css';
import './components/Search/styleSearch.css';
import './components/Pages/episodes.css'


// funcion principal App

function RickMortyApp(){

    return(
        <Router>

            <div className="App">
                <Navbar />
            </div>

            <Routes>
                <Route path="/" element={ <Home /> } /> 

                <Route path="/:id" element={ <CardDetails /> } /> 

                <Route path="/episodes" element={ <Episodes /> } />
                <Route path="/episodes/:id" element={ <CardDetails /> } /> 

                <Route path="/location" element={ <Location /> } />
                <Route path="/location/:id" element={ <CardDetails /> } /> 
                
            </Routes>
        </Router>
    );
}

const Home = () => {

    // este es el estado para mantener el número de paginas
    const [pageNumber, setPageNumber] = useState(1); // numero de pagina y #pagina actual // esta funcion setPageNumber sirve para cambiar de pagina haciendo click en el numero de la pagina 1 2 3

    // console.log(pageNumber);

    // este es para la busqueda.
    const [search, setSearch] = useState(""); // Smith

    // este es el estado para traer la informacion de la api
    const [ fetchedData, updateFetchedData ] = useState([]);

    const { info, results } = fetchedData; // desestructuracion
    
    // info pasara al componente de Pagination.
    // result pasara al componente de Card - personajes.

    //console.log(results);

    const initialUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

    // const fetchCharacters = (url) => {

    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             setCharacters(data.results);
    //             //setInfo(data.info);
    //             //setSearch(data.results);
                
    //         })

    //         //  .then(data => console.log(data.results))
    //         .catch(error => console.log(error))
    // };


    useEffect(() => {

        // tres funciones ::
        // 1. function abc() {} // se ejecuta escribiendo abc();
        // 2. const adcdfg = () => {}
        // 3. (function () {})() // no es necesario ponerle un nombre a la function. iife

        // aqui se usa la 3ra. forma.

        (async function() {
            const data = await fetch( initialUrl ).then(res=>res.json());
            // console.log(data);
            updateFetchedData(data); // 
        })();

        // fetchCharacters( initialUrl); // se ejecuta una sola vez

    }, [initialUrl]) // initialUrl : cada vez que la api cambia quiero buscar nuevos datos en la api dentro del useEffect

    return (

        <>
            <div className="RickMortyApp">

            <h1 className="titleEpi">Personajes</h1> 

                <Search 
                    setSearch={setSearch} 
                    setPageNumber={setPageNumber}
                />

                <div className="containerGrid">
                    <Card page="/" results={results} /> {/* result es de la desestructuracion de la api */}
                </div>

                <Pagination 
                    setPageNumber={setPageNumber} 
                    pageNumber={pageNumber}
                    info={info} // info desde el api, muestra el numero total de paginas.
                /> 

            </div>
        </>
    )
}

export default RickMortyApp;