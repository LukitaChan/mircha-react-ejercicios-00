import React, {useState, useEffect} from "react";

//Actualizado a hooks - CicloVida
function Relojito({hora}) {
  return <h3>{hora}</h3>;
}

export default function RelojHooks() {
  //Valor inicial es la hora local legible.
  const[hora, setHora] = useState(new Date().toLocaleTimeString());
  //el valor inicial sera false hasta que se de click al boton de iniciar.
  const[visible, setVisible] = useState(false);

  //actualizara el estado de la funcion setVisible.
  //const tickTack = (valorEstadoVisible) => setVisible(valorEstadoVisible);

  //cuando haya un cambio en la variable visible se ejecutara el cambio...
  //este ejecuta el setInterval
  useEffect(() => {
    let temporizador;
      if (visible) {
        temporizador = setInterval(() => {
          setHora(new Date().toLocaleTimeString());
        }, 1000);
      } else {
        clearInterval(temporizador);
      }

        return () => {
          //console.log("Fase de Desmontaje");
          clearInterval(temporizador)
        };
  }, [visible]);

  //const iniciar = () => {};
  //const detener = () => {};

  return(
    <div>
      <h2>Reloj con Hooks</h2>
      {visible  && <Relojito hora={hora}/>}
      <button onClick={() => setVisible(true)}>iniciar</button>
      <button onClick={() => setVisible(false)}>detener</button>
    </div>
  );
}