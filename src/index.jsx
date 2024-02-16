import React from "react";
import ReactDOM  from "react-dom";
// import { BrowserRouter } from "react-router-dom"; se elimina al usar react pagination
import RickMortyApp from "./RickMortyApp";

ReactDOM.render( 

  // <BrowserRouter > se elimina al usar react pagination
    <RickMortyApp />,
  // </BrowserRouter>,
   document.getElementById("root")
);