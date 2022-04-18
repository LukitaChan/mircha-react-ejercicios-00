import React, { createRef, useRef } from 'react';

export default function Referencias() {
  //la referencia es como un selector que ya existe en el DOM pero dentro de react.
  
  //let refMenu = createRef(),
  //para classComponent se use createRef() para crear la variable de referencia.

  let refMenu = useRef(),
  refMenuBtn = useRef();
  //para hooks se usa useRef() para crear la variable de referencia.

  //console.log(refMenu);
  //console.log(refMenuBtn);

  //handleToggleMenu = manejarAlternarMenu. Sera un manejador de eventos.
  const manejarAlternarMenu = (evento) => {
    //si los elementos estan el el DOM se puede acceder directamente.
    //const $menu = document.getElementById("menu");

  //para hacer un swicheo de la propiedad display:none y de la palabra menu/cerrar haremos una evaluacion. evento.target es el elemento que dispara (origina) el evento.
  //if (evento.target.textContent === "Menú") {
      //evento.target.textContent = "Cerrar";
      //$menu.style.display = "block";
      //} else {
      //evento.target.textContent = "Menú";
      //$menu.style.display = "none";
    //};

    //si el objeto que genero el evento(refMenuBtn) en su propiedad textContent es igual a "Menú" entonces:
    if (refMenuBtn.current.textContent === "Menú") {
      //cambiar el texto por "Cerrar"
      refMenuBtn.current.textContent = "Cerrar";
      //mostrar el menu
      refMenu.current.style.display = "block";
    } else {
      //cambiar el texto por "Menú"
      refMenuBtn.current.textContent = "Menú";
      //ocultar el menu
      refMenu.current.style.display = "none";
    }
  };
   
  return (
    <div>
      <h2>Referencias</h2>
      <button 
        ref={refMenuBtn} 
        style={{ width: "150px", height: "35px", backgroundColor: "#DCD1AA"}} 
        onClick={manejarAlternarMenu}>
          Menú
      </button>
      <nav ref={refMenu} id="menu" style={{ display:"none"}}>
        <a href="#">Seccion 1</a>
        <br/>
        <a href="#">Seccion 2</a>
        <br/>
        <a href="#">Seccion 3</a>
        <br/>
        <a href="#">Seccion 4</a>
        <br/>
        <a href="#">Seccion 5</a>
        <br/>
      </nav>
    </div>
  );
}

//display:none es para que no se vea el menu de inicio.
//onClick es para que se ejecute la funcion al hacer click, dispara el evento.