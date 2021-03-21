import React, {useState, useEffect} from 'react';
import logo from '../img/logo.png';
import './Home.css';

function Home () {
    /*
    1. Primero hay que definir un estado "Quote" que tome la quote aleatoria.
    Nota: es importante setear el estado inicial de Quote como un objeto vacío
    */
    const [quote, setQuote] = useState({});
    

    /*
    2. Ahora, en el momento en que el componente se cargue, deberíamos tomar
    el dominio que nos devuelve la frase, pasarla a un json y guardarla en el estado
    Nota: Podemos usar console.log para ir viendo qué nos devuelve la api, y cómo se está
    guardando en el estado.
    */
    useEffect(() => {
        fetch(`https://www.breakingbadapi.com/api/quote/random`)
        .then((response)=>{return response.json()})
        .then((json) => {setQuote(json[0])})
        .then(console.log(quote))}
    ,[])

    return (
        <div className="Home">
            <img src={logo} alt=""className="Home__logo"/>
            <hr/>
            <div>
                {/*
                3. Ahora vamos a retornar un componente que muestre la quote, el autor, y 
                de cuál serie proviene (Breaking Bad o Better Call Saul)
                */
                }
                {/*Acá deberíamos poner la quote, con sus datos*/}
                {quote.quote}
                <br/>
                {quote.author}
            </div>
        </div>
    )

}    


export default Home;