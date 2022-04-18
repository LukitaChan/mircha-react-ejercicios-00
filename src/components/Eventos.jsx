import React, {Component} from "react";

//Eventos y Binding
class Eventos extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      contador:0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  } //Hay que hacer el bind del metodo.
    //Cada que se defina un evento en un componente basado en CLASES se tiene que hacer el bindeo desde Cosntructor.

  sumar(evento) {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(evento) {
    console.log("Restando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return(
      <div>
      <h2>Eventos en Componentes de Clase ES6</h2>
      <nav>
        <button onClick={this.sumar} style={{ width: "150px", height: "35px", backgroundColor: "pink"}}>+</button>
        <button onClick={this.restar} style={{ width: "150px", height: "35px", backgroundColor: "pink"}}>-</button>
      </nav>
      <h3>{this.state.contador}</h3>
      </div>
    );
  }
}
export default Eventos;

//Evento personalizado
/*function Boton(props) {
  return <button onClick={props.myOnClick} >Boton Hecho Componente</button>;
}*/

/*const Boton = (props) => (
  <button onClick={props.myOnClick}>Boton Hecho Componente</button>
);*/

//Desestructuracion
const Boton = ({myOnClick}) => (
  <button onClick={myOnClick}>Boton Hecho Componente</button>
);

//handleClick es el manejador de eventos, en este caso del clickeo
export class MasSobreEventos extends Component {
  handleClick = (evento, mensaje) => {
    console.log(evento);
    console.log(evento.nativeEvent);
    console.log(evento.target);
    console.log(evento.nativeEvent.target);
    console.log(mensaje);
  };

  render() {
    return(
      <div>
        <h2>Mas sobre eventos</h2>
        <button 
          onClick={(evento) => 
            this.handleClick(evento, "Pasando parametro desde un evento")
          } style={{ width: "150px", height: "35px", backgroundColor: "white"}}>
            Saludame
        </button>
        {/* Evento personalizado: la prop se pasa al componente y este al evento */}
        {/*<Boton 
          onClick={(evento) => 
            this.handleClick(evento, "Pasando parametro desde un evento")
          }/>*/}
        <Boton 
          myOnClick={(evento) => 
            this.handleClick(evento, "Pasando parametro desde un evento")
          }/>
      </div>
    )
  }
}