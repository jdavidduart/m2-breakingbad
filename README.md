# Breaking Bad


# App.js
Esta es nuestra ruta principal. Aquí tendremos que definir nuestro BrowserRouter para que tome 
las rutas "/", "/characters", y "episodes". 

# Home
En esta ruta vamos a tomar la ruta de la API que nos devuelve
una quote aleatoria de la serie.

        `https://www.breakingbadapi.com/api/quote/random`

Para eso ya tenemos definido en App.js una route que muestra el componente Home.
Vamos a abrir el script Home.js en la carpeta components para empezar a codearlo.

# NavBar
Ahora, en la ruta principal, así como en el resto de las rutas, deberíamos
incluir un componente que nos lleve a otras rutas del sitio (como una que nos lleve a
la lista de personajes, y otra que nos lleve a la lista de capítulos). Ya definiremos 
estas rutas a continuación. Ya hay un archivo NavBar.css, que le de algo de formato a la
barra.

# Characters
Ya tenemos los componentes que deben figurar en la ruta "/". Ahora definamos el componente
Characters, que debe aparecer al entrar en "/characters". Para eso abrimos el script Characters.js, en la carpeta components. En este script hay que tomar la ruta de la api
que devuelve la lista de personajes. Podemos consultar la documentación para ver qué componentes tiene esta ruta.
        `https://www.breakingbadapi.com/api/characters`


# CharacterDetail
La página va tomando forma. Ahora, cada vez que hacemos click en el nombre de un personaje,
debería llevarnos a una página con los detalles de ese personaje. Para eso, podemos usar useParams. Este hook va tomar el id proveniente de la ruta (Por ejemplo: "/characters/5").
Ese id puede usarse en la siguiente ruta de la api:
        `https://www.breakingbadapi.com/api/characters/${id}`

Ahora, teniendo un json del personaje puntual, podemos mostrar los detalles del mismo en la página.

# Episodes 
En la ruta /episodes vamos a mostrar una lista de todos los capítulos de la serie Breaking Bad.
La api nos devuelve los capítulos de Better Call Saul también, pero vamos a excluirlos



























