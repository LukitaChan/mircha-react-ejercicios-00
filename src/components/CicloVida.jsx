import React, {Component} from "react";

//Montaje = contructor. 

class Reloj extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    //console.log(3, "EL componente ha sido eliminado del DOM");
  }

  render() {
    return <h3>{this.props.hora}</h3>
  }
}


export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    //console.log(0, "El componente de inicializa pero NO esta en el DOM. Constructor en fase de Montaje.");
    
    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  componentDidMount() {
    //console.log(1, "El componente ya se encuentra en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log(2, "El estado o las props del componente han cambiado (redibujado)")
    //console.log(prevProps);
    //console.log(prevState);
  }

  

  tickTack = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString()
      })
    }, 1000);
  }


  iniciar = () => {
    this.tickTack();
    this.setState({
      visible: true,
    }); 
  };

  detener = () => {
    clearInterval(this.temporizador); 
    this.setState({
      visible: false,
    }); 
  };

  render() {
    //console.log(4, "El componente de dibuja o redibuja por algun cambio en el DOM.")
    return (
      <div>
        <h2>Ciclo de vida de componentes de clase</h2>
        {this.state.visible  && <Reloj hora={this.state.hora}/>}
        <button onClick={this.iniciar}>iniciar</button>
        <button onClick={this.detener}>detener</button>
      </div>
    );
  }

};