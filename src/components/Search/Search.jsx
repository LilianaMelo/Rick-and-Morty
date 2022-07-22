import React from "react";

const Search = ({ setSearch, setPageNumber }) => {

    return(

        
        <form className="form">
            <input
                placeholder="Buscar personaje" 
                type="text" 
                onChange={(e) => {
                    setPageNumber(1); // se escribe 1 para establecer el # de pagina en la 1, cuando se genera la busqueda.
                    setSearch(e.target.value);
                }}
            />
            <button 
                onClick={(e) =>{ e.preventDefault(); }} 
                className="buttonSearch">Buscar</button>
        </form>
    )
}

export default Search;