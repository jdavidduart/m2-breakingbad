import React, { useState, useEffect } from "react";
import logo from "../../img/logo.png";
import "./Home.css";

function Home() {
  /*
  PISTA: podemos usar el hook useEffect para llamar a la api. 
  Que haces useEffect? https://es.reactjs.org/docs/hooks-effect.html
  */
 const [frase,setfrase]=useState('');
  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/quote/random`)
      .then(r => r.json())
      .then(data => {
        let quote=data[0].quote;
        setfrase(quote)
      });
  }, []); 

  return (
    <div className="Home">
      <img src={logo} alt="" className="Home__logo" />
      <div>
        {
          <h4 className='soydiv'>{frase}</h4>                                     
        }
      </div>
    </div>
  );
}

export default Home;
