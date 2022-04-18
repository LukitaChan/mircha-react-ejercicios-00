import React, {Component} from "react";

/*componente por funcion expresada*/
const Componente = props => <h2>{props.msg}</h2>

/* componente por funcion
function Componente(props) {
  return <h2>{props.msg}</h2>
}*/

/*componente por clase
class Componente extends React.Component {
  render() {
    return <h2>{this.props.msg}</h2>
  }
}*/

export default Componente;