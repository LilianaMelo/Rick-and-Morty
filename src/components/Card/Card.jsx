import React from 'react'

const Card = ({characterCard}) => {

    return (
        <div className='containerGrid'>
            {
                characterCard.map((item, index) => (
                    <div key={index} className='col'>
                        <div className='card'>
                            <img src={item.image} alt='' />

                            <div className='card-body'>
                            <h4 className='card-title'> {item.name}</h4>
                           
                            <p>Especie: {item.species}</p>
                            <p>Estado: {item.status}</p>
                            
                            </div>
                               

                        
                        </div>    
                    </div>   
                ))
            }
            
        
        </div>
    )
}

export default Card