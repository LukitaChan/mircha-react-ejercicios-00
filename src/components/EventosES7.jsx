import React, {Component} from "react";

//Eventos y properties initializer
class EventosES7 extends React.Component {
  state={
      contador:0,
    };


    /*this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  } //Hay que hacer el bind del metodo.
    //Cada que se defina un evento en un componente basado en CLASES se tiene que hacer el bindeo desde Cosntructor.*/

  //arrow function.Heredan el contexto de la clase a la que pertenecen.
  sumar = (evento) => {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar = (evento) => {
    console.log("Restando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return(
      <div>
      <h2>Eventos en Componentes de Clase ES7</h2>
      <nav>
        <button onClick={this.sumar} style={{ width: "150px", height: "35px", backgroundColor: "cyan"}}>+</button>
        <button onClick={this.restar} style={{ width: "150px", height: "35px", backgroundColor: "cyan"}}>-</button>
      </nav>
      <h3>{this.state.contador}</h3>
      </div>
    );
  }
};

export default EventosES7;