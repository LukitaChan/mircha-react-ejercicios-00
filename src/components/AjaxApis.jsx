import React, {Component} from "react";

//Peticiones asincronas
function Pokemon(props) {
  return(
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}


export default class AjaxApis extends Component {
  state = {
    pokemones: [],
  };

  componentDidMount() {
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
            avatar: json.sprites.front_shiny,
          };

          let pokemones = [...this.state.pokemones, pokemoncito];

          this.setState({ pokemones });

        });
      });
    });
  };

  render() {
    return(
      <div>
        <h2>Peticiones Asincronas en componentes de clase</h2>
        {this.state.pokemones.length === 0 ? 
          (<h3>Cargando...</h3>) : 
          (this.state.pokemones.map(elem => <Pokemon key={elem.id} name={elem.name} avatar={elem.avatar} /> ))
        }
      </div>
    );
  }
}