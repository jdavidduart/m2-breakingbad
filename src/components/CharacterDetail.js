import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import './CharacterDetail.css'

function CharacterDetail () {
    /*
    1.En primer lugar, hay que usar useParams (y Destructuring) para recibir el id 
    proveniente de la ruta.
    */
    let {id} = useParams();
    
    /*
    2. Ahora, definamos el estado y el useEffect como veníamos haciendo.
    Nota: Es importante setear el estado inicial como un objeto vacío, 
    como también es recomendable usar backticks para fetchear la api. 
    */

    const [character, setCharacter] = useState({})
    useEffect(()=>{
        fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
        .then((response) => {return response.json()})
        .then ((json) => setCharacter(json[0]))
        
    },[character, id])

    /*
    3. El componente debe retornar los detalles del personaje. Hay propiedades del mismo
    (como apariciones u ocupaciones) que contienen arrays en vez de strings, así que 
    podríamos mapear cada elemento de esos arrays, y mostrarlos en lista. Los personajes
    también tienen una imágen que puede incluirse 
    */
    return (
        <div className="CharacterDetail">
            <h1>Character Details</h1>{/*Dejar esta línea*/}
            <h2>{character.name}</h2>
            <img className="CharacterDetail__Photo"src={character.img} alt=""/>
        </div>
    )
}

export default CharacterDetail;