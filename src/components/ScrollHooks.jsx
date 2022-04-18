import React, {useState, useEffect} from "react";

export default function ScrollHooks () {
  const [scrollY, setScrollY] = useState(0);
  //const [name, setName] = useState("Luka");

  useEffect(() => {
    //console.log("moviendo el scroll de window")

    const detectarScroll = () => {
      //window.pageYOffset dice cuantos pixeles me he desplazado de la barra dek navegador.
      setScrollY(window.pageYOffset);
    }
    //al objeto de la ventana  a su objeto scroll le asignas detectarScroll.
    window.addEventListener("scroll", detectarScroll);

    //cuando detectarHooks ya no exista, retorna una funcion donde me desuscribo a este evento.
    //para eliminar codigo, suscripciones, manejadores de eventos, conatdores que no se esten ejecutando.
    return() => {window.removeEventListener("scroll", detectarScroll)};

    //cuando algo, dependiendo del cambio de estado de una variable de estado (scrollY) se vuelva a ejecutar una funcion de efecto (useEffect) lo ideal es decirle que el efecto se actualize cuando el valor/variable (scrollY) cambie.
  }, [scrollY]);

  //el 2do parametro que representa las dependencias que s evan a estar revisando es un array: para una variable de estado que se quiera estar controlando, este useState se va a ejecutar cuando esta variable cambie.
  //si se necesita una peticion se ejecute 1 vez, se recomienda que el array este vacio.
  //para replicar lo que hace el ComponentDidUpdate se deja el array vacio.
  useEffect(() => {
    //console.log("Fase de Montaje");
  }, []);

  //un useEffect que no tiene definico su segundo parametro (lista de dependencias) sera como un ComponentDidUpdate.Cada vez que se actualize se volvera a ejecutar todo lo que este.
  useEffect(() => {
    //console.log("Fase de Actualizacion");
  });

    //en desmontaje, useEffect nos permite retornar una funcion cuando a un useEffect se le haya agregado la sintaxsis de que retorne una funcion: ejecutar la fase de desmontaje del efecto.
    useEffect(() => {
      return() => {
        //console.log("Fase de Desmontaje");
        
      };
    })

  return(
    <div>
      <h2>Hooks - useEffect y el Ciclo de Vida </h2>
      <p>Scroll Y del Navegador {scrollY}px</p>
    </div>
  );
}