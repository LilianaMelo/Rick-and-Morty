import React from 'react'

const Pagination = ({prev, next, onPrevious, onNext, onCountPages, pages, info, pageNumber, updatePageNumber}) => {

  const handlePrevious = () => {
    onPrevious();
  }

  const handleNext = () => {
    onNext();
  }

  const countPages = () => {
    onCountPages();
  }

  const pageChange = () => {
    updatePageNumber();
  }

  return (
    <nav>
        <ul className='pagination'>

            {
              prev ? (// si tiene el link de prev muestra el boton
                <button onClick={handlePrevious}>Atrás</button>

              ) : null
            }
            
            

            {
              next ? ( // si tiene el next muestra el boton

                <button onClick={handleNext} >Siguiente</button> 
              ) : null // si no null no muestra nada
            } 

        </ul>
    </nav>
  )
}

export default Pagination