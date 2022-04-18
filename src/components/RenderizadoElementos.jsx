import React from 'react';
import data from "../helpers/data.json";

function ElementoLista (props) {
  return(
    <li>
      <a href={props.elemento.web} rel="noreferrer" target="_blank" >
        {props.elemento.name}
      </a>
    </li>
  )
}

class RenderizadoElementos extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      seasons: ["Spring", "Summer", "Autum", "Winter"],
    };
  }

  render() {
    //console.log(data);
    return(
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.seasons.map((el,index) => 
          (<li key={index} >{el}</li>)
          )}
        </ol>
        <h3>Frameworks FrontEnd JavaScript</h3>
        <ul style={{ color: "white", background: "pink" }}>
          {
            data.frameworks.map((el, id) => (<ElementoLista key={el.id} elemento={el}/>))
          }
        </ul>
      </div>
    )
  }
}



export default RenderizadoElementos;
