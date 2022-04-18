import React, {useState} from "react";

//Actualizacion a Hooks - Estado.jsx
//Le podemos asignas propiedades al componente
export default function ContadorHooks(props) {
  //variable de estado que controla el contador
  const [contador, setContador] = useState(0);

  //Arrow functions
  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  //console.log(useState());
  return (
    <div>
      <h2>Hooks-useState</h2>
      <nav>
        <button onClick={sumar} style={{ width: "150px", height: "35px", backgroundColor: "magenta"}}>+</button>
        <button onClick={restar} style={{ width: "150px", height: "35px", backgroundColor: "magenta"}}>-</button>
      </nav>
      <p>Contador de {props.titulo}</p>
      <h3>{contador}</h3>
    </div>
  );
}

//Las props del componente son heredadas <p>Contador de...</p> (L20)
ContadorHooks.defaultProps = {
  titulo: "Clicks",
}