import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CardDetails = () => {

    const {id} = useParams();
    const [fetchedData, updateFetcheData ] = useState([]);
    // console.log(fetchedData);

    const {name, image, location, origin, gender, species, status, type, } = fetchedData;

    const api = `https://rickandmortyapi.com/api/character/${id}`

    useEffect(() => {
        (async function () {
            const data = await fetch(api).then((res ) => res.json());
            updateFetcheData(data);
        } )();

    }, [api]);
    

    return (

        <div className='containerDetails'>
            <div className='card-Container'>
                <h1>{name}</h1>
                <img src={image} className="img-Details"/>

                {(()=>{
                        if(status === "Dead"){
                            return(
                                <div className='status-red'>{status}</div>
                            );
                        }
                        else if(status === "Alive"){
                            return(
                                <div className='status-green'>{status}</div>
                            );
                        }
                        else{
                            return(
                                <div className='status-gray'>{status}</div>
                            );
                        }

                    })()}

                    <div className='container-item'>
                        <div>
                            <span className='item-color'>Genero:{" "} </span>{gender}
                        </div>

                        <div>
                            <span className='item-color'>Especie:{" "} </span>{species}
                        </div>
                        
                        <div>
                            <span className='item-color'>Tipo:{" "} </span> {type === ""? "Unknown" : type} 
                        </div>

                        <div>
                            <span className='item-color'>Ubicaci??n:{" "} </span>{location?.name}
                        </div>

                        <div>
                            <span className='item-color'>Origen:{" "} </span>{origin?.name}
                        </div>
                    </div>
            </div>
            
        </div>

    )
    
}

export default CardDetails