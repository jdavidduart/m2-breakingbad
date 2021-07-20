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
  const [data,setdata]=useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    fetch(`https://breakingbadapi.com/api/characters?name=`)
      .then(r => r.json())
      .then(data => {
        setdata(data)
      });
  }, []); 

  useEffect(() =>{                          //chequeo de coincidencias
    const results = data.filter(person =>
      person.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setSearchResults(results);
  },[searchTerm])       //solo se ejecuta cuando searchterm cambie

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div className="Characters">
      <h1>List of Characters</h1>
      <input 
        placeholder='Search Characters'
        type='text'
        value={searchTerm}
        onChange={handleChange}
      >
      </input>
      <div className="Characters__list">
          {
            searchResults.map(person => (
            <div className='personName'>{person.name}</div>
            ))
          }
      </div>
    </div>
  );
}

export default Characters;
