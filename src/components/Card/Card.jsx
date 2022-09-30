import React from 'react'
import { Link } from "react-router-dom";

const Card = ({ results, page }) => {
    // lista de personajes

    // console.log(results);
    let display = (""); // se cambia const por let, ya que salia error. let es local const es global

    if (results) {
        display = results.map((character) => { // x
            const {id, name, image, species, status} = character;

            return(
                
                <Link 
                    key={id} 
                    className='col'
                    to={`${page}${id}`} 
                    style={{ textDecoration:"none" }}
                >
                    
                    <div className='card'>
                        <img src={image} alt='' className='imgCard'/>
                        <div className='card-body'>
                            <h4 className='card-title'>{name}</h4>
                            <p>Especie: {species}</p>
                        </div>
                    </div>

                    {(()=>{
                        if(status === "Dead"){
                            return(
                                <div className='badge-insignia-red'>{status}</div>
                            );
                        }
                        else if(status === "Alive"){
                            return(
                                <div className='badge-insignia-green'>{status}</div>
                            );
                        }
                        else{
                            return(
                                <div className='badge-insignia-gray'>{status}</div>
                            );
                        }

                    })()}
                </Link>
            );
        });
    } else {
        display = <h2>No se encontro el personaje.</h2>;
    }

    return (
        <>{display}</>
    )
}

export default Card