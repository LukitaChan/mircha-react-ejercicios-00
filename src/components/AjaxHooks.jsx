import React, {useState, useEffect} from "react";

//usando desestructuracion
function Pokemon({avatar, name}) {
  return(
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function AjaxHooks() {
  const [pokemones, setPokemones] = useState([]);

  //peticion de api fecth
  /*useEffect(() => {
    let url="https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
    .then((resp) => resp.json())
    .then((json) => {
      //console.log(json);
      json.results.forEach(poke => {
        fetch(poke.url)
        .then((resp) => resp.json())
        .then(json => {
          //console.log(json);
          let pokemoncito = {
            id: json.id,
            name: json.name,
            avatar: json.sprites.back_shiny,
          };
          setPokemones((pokemones) => [...pokemones, pokemoncito]);
          /*let pokemones = [...this.state.pokemones, pokemoncito];
          this.setState({ pokemones });

        });
      });
    });
  }, []);        */

  //funciones asincronas con peticion fetch
  //si se necesita hacer peticiones asincronas dentro de un hook useEffect entonces crea una funcion (getDataPokemones). Es decir se define de forma expresada.
  useEffect(() => {

    const getDataPokemones = async (url) => {
      let respuesta = await fetch(url),
      json = await respuesta.json();
      //console.log(json);
      
      json.results.forEach(async (poke) => {
        let resp = await fetch(poke.url),
          json = await resp.json();
          //console.log(json);
          let pokemoncito = {
            id: json.id,
            name: json.name,
            avatar: json.sprites.back_shiny,
          };
          setPokemones((pokemones) => [...pokemones, pokemoncito]);
          /*let pokemones = [...this.state.pokemones, pokemoncito];
          this.setState({ pokemones });*/
        });
    }
    getDataPokemones("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return(
    <div>
      <h2>Peticiones Asincronas en Hooks</h2>
      {pokemones.length === 0 ? 
        //Renderizado condicional
        (<h3>Cargando...</h3>) : 
        (pokemones.map(elem => <Pokemon key={elem.id} name={elem.name} avatar={elem.avatar} /> ))
      }
    </div>
  );
}