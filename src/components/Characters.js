import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Spinner from './Spinner';
import './Characters.css'


function Characters () {
    /*
    1. Deberíamos definir un estado que inicialmente sea un array vacío, y
    que devuelva a todos los personajes de la serie. Este estado se llamará characters.
    También vamos a definir dos estados más:
    
    -query: Para cuando vayamos a implementar la búsqueda.
    Su estado inicial debe ser un string vacío

    -isLoading: Para chequear cuándo terminaron de cargar los datos solicitados a la api.
    Su estado inicial debe ser true. 
    */

    const [characters,setCharacters] = useState ([]);
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    
    /*
    2.
    Ahora podemos volver a usar useEffect para 'fetchear' los datos de los 
    personajes, y ubicarlos dentro del estado.
    La dirección de donde vamos a tomar los datos es
    
    https://www.breakingbadapi.com/api/characters?name=

    Notesé que hay una query en la dirección. Lo que seguirá a esa query será un string 
    con un nombre o un apellido, y en base a eso la api realizará el filtrado.
    En caso de no poner nada en la query, la api traerá a todos los personajes.
    Al final de esta dirección deberemos poner el estado query, que por ahora es sólo un string
    vacío.
    */


    useEffect(()=>{
        fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
        .then((response) => {return response.json()})
        .then ((json) => setCharacters(json))
        /*
        4. Vamos a agregar un then más que cambie el estado de isLoading.
        También vamos a setear al estado query en el segundo argumento de useEffect
        */
        .then(()=>setIsLoading(false))
        
    },[query])

    /* 
    7. Finalmente, acá vamos a definir los métodos que se encargan de manejar los eventos de la búsqueda
    onChange debería setear el estado query a lo que sea que se haya ingresado.
    handleSubmit debería prevenir que la página se actualice.
    */

    const onChange = (q) => {
        setQuery(q);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="Characters">
            <h1>List of Characters</h1>
        
        {/*
        6. Aquí vamos a definir el buscador de personajes.
        Debemos crear una etiqueta section, con una form que contenga un input de tipo texto.
        al form vamos a agregarle un prop "onSubmit" que llame a la función handleSubmit
        */}
            <section>
            <form className="form-control" onSubmit={(e)=>handleSubmit(e)}>
                <input 
                    type='text' 
                    placeholder='Search Characters'
                    onChange={(e)=>onChange(e.target.value)}
                    />
            </form>
            </section>




            <hr/>
            {/*
            3. deberíamos devolver un componente que muestre una lista con todos los personajes.
            Cada elemento de la lista debe tener un Link, que vaya a "/characters/id_del_personaje".
            Ya definiremos qué habrá en ese Link.
            */}
            {/*Aquí vamos a definir la lista de personajes.*/}            
            <ul className="Characters__list">
            {/*
            5.Ahora vamos a mostrar la lista solo si el estado isLoading está seteado en 
            false. En caso de estar seteado en true deberíamos mostrar el Spinner. Vamos
            a poner un condicional que evalue el estado de isLoading.
            */}
            {
            isLoading ? 
            <Spinner/>    
                
            :characters.map((c)=>
            <li key={c.char_id}><Link to={`/characters/${c.char_id}`}>{c.name}</Link></li>
            )}
            </ul>
        </div>
    )
}

export default Characters;