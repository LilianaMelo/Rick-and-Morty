import React from 'react'
import { useState, useEffect } from 'react';
import ReactPaginate from "react-paginate";


const Pagination = ({ info, pageNumber, setPageNumber }) => {

  // funcion para traer u obtener los datos de las paginas y que los botones funcionen correctamente.
  const pageChange = (data) => {
    setPageNumber(data.selected + 1);
  }

  // responsive la paginacion
  const [width, setWidth] = useState(window.innerWidth);

  // console.log(width);


  const updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
      window.addEventListener("resize", updateDimension);  
      return () => window.removeEventListener("resize", updateDimension);
  }, []);
  


  return (

    <>

      <ReactPaginate //Las caracteristicas son de la pagina de reactPaginate https://www.npmjs.com/package/react-paginate
        className="pagination" // estilos
        nextLabel="Siguiente" // btn siguiente
        previousLabel="Anterior" // btn anterior
        nextClassName="buttonNext" // estilos del boton siguiente
        previousClassName="buttonPrev" // estilos del boton atras
        pageClassName="page-link" // estilos de li (listas)
        pageLinkClassName="page-item" // estilos de a 
        
        activeClassName="activeBtn" // para activar el color de la pagina actual.

        forcePage={pageNumber===1? 0: pageNumber -1}// mayor control en el componente.
        // Cuando el numero de pagina sea igual a 1 Si es verdad, entonces correra 0 :(si es falso ) entonces haz esto ___Numero de pagina -1 : con esto se mostraran mas pagina en los (...)

        onPageChange={pageChange}
        
        pageCount={info?.pages} // info? :: si la info existe, entonces agregue o muestre el número de paginas existente en este caso 42.

        marginPagesDisplayed={ width < 576 ? 1 : 2} // responsive la paginacion
        pageRangeDisplayed={ width < 576 ? 1 : 2} // responsive la paginacion
      />

    </>

  )
}

export default Pagination