import React, {Component} from 'react';

export default class Padre extends Component {
state = {
  contador:0,
};

//Este contador lo hara el Hijo.
incrementarContador = (e) => {
  this.setState({contador: this.state.contador + 1});
};


  render() {
    return(
      <div>
        <h2>Comunicacion entre Componentes</h2>
        <p>Contador <b>{this.state.contador}</b></p>
        {/* Pasar informacion por props del hijo*/}
        <Hijo 
          incrementarContador={this.incrementarContador}
          mensajito="Mensaje para el Hijo #1" />
        <Hijo 
          incrementarContador={this.incrementarContador} 
          mensajito="Mensaje para el Hijo #2" 
        />
      </div>
    )
  };
}

//Pasar informacion por props al padre
function Hijo(props) {
  return (
    <div>
      <h3>{props.mensajito}</h3>
      <button onClick={props.incrementarContador}>+</button>
    </div>
  );
}