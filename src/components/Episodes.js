import React, { useEffect, useState } from "react"
import './Episodes.css'

function Episodes () {
    /*
    1. De nuevo, seteamos un estado para el array de episodes que vamos a recibir
    */
    const [episodes, setEpisodes] = useState([])
        
    /*
    2. Ahora, definamos el estado y el useEffect como veníamos haciendo.
    */

    useEffect(()=>{
        fetch(`https://www.breakingbadapi.com/api/episodes`)
        .then((response) => {return response.json()})
        .then ((json) => setEpisodes(json))
        .then((res)=>console.log(res))
        
    },[])

    /*
    3. El componente nos va a devolver na lista de episodios de Breaking Bad por titulo.
    Recordemos que la api va a devolver la lista de Breaking Bad y de Better Call Saul.
    Por ahora no queremos ver los capítulos de esta última.
    */
    return (
        <div className="Episodes">
            <h1>Episodes List</h1>{/*Dejar esta línea*/}
            <ul className="Episodes__List">
                {episodes.map((e)=> e.series==="Breaking Bad" && <li>{e.title}</li>)}
            </ul>
            
        </div>
    )
}

export default Episodes;