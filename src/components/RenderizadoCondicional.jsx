import React, {Component} from "react";

//componente funcional 1
function Login() {
  return (
    <div>
      <h3>Login</h3>
    </div>
  );
}

//componente funcional 2
function Logout() {
  return (
    <div>
      <h3>Logout</h3>
    </div>
  );
}


class RenderizadoCondicional extends React.Component {
  constructor(props) { //Vamos a ponerle una avriable de estado al componente de clase
    super(props);      //para heredar las props
    this.state= {      //estado
      secion: true,    //booleano
    };
  }
  //L34: si this.state.secion es true, imprime Login, de lo contrario Logout.
  render() {
    return(
      <div>
        <h2>Renderizado Condicional</h2>
        {this.state.secion ? <Login /> : <Logout />} 
      </div>
    )
  }
}

export default RenderizadoCondicional;