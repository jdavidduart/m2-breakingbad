import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css'

import Home from './components/Home.js'
import NavBar from './components/NavBar.js'//Comentar
import Characters from './components/Characters.js'//Comentar
import CharacterDetail from './components/CharacterDetail.js'//Comentar
import Episodes from './components/Episodes'

function App (){
  /*Dentro del BrowserRouter vamos a definir las siguientes rutas:
  - NavBar va a aparecer en todas las rutas
  - Home va a aparecer solamente en la ruta "/"
  - Characters va a aparecer en la ruta "/characters"
  - CharacterDetail va a aparecer en la ruta "/character/" con un parámetro id
  - Episodes va a aparecer en la ruta "/episodes"
  */
  return (
      <BrowserRouter>
        <Route path="/" component={NavBar}/>
        <Route path="/" exact component={Home}/>
        <Route path="/characters" exact component={Characters}/>{/*Comentar*/}
        <Route path="/characters/:id" component={CharacterDetail}/>{/*Comentar*/}
        <Route path="/episodes" component={Episodes}/>{/*Comentar*/}
        

      </BrowserRouter>
    )

}
export default App;
