import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import "./Characters.css";

function Characters() {
  /*
    PISTA:
    La dirección de donde vamos a tomar los datos es
    
    https://www.breakingbadapi.com/api/characters?name=

    Notesé que hay una query en la dirección. Lo que seguirá a esa query será un string 
    con un nombre o un apellido, y en base a eso la api realizará el filtrado.
    En caso de no poner nada en la query, la api traerá a todos los personajes.
  */

  return (
    <div className="Characters">
      <h1>List of Characters</h1>

      {/*
        Aquí vamos a definir el buscador de personajes.
        Debemos crear una SearchBar que contenga un form controlado
      */}

      <ul className="Characters__list">
        {/*El loading le va a dar un efecto de carga hasta que la peticion de la API llegue, no tocar!.*/}
        {isLoading ? (
          <Spinner />
        ) : (
          {
            /*Aquí vamos a mostrar la lista de personajes.*/
          }
        )}
      </ul>
    </div>
  );
}

export default Characters;
