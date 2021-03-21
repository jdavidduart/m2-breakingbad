import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom'

/*
    Vamos a crear la NavBar agregando links a Home, a Character y a Episodes. 
    El formato ya está importado, así que sólo tenemos que ocuparnos de los Links 

*/
function NavBar(){
    return (
        <div className="navbar">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/characters">Characters</Link></div>
            <div><Link to="/episodes">Episodes</Link></div>
        </div>
    )
}

export default NavBar;