import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import Eventos, { MasSobreEventos } from './components/Eventos';
import EventosES7 from './components/EventosES7'
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';
import Estilos from './components/Estilos';
import StyledComponents from './components/StyledComponents';


function App() {
  let nombre="Lukita";
  let auth = true;
  let estaciones = ["primavera", "verano", "otoño", "invierno"]

  return (
    <>
    <div className="App">
      <section className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" />
        <h1>{nombre}</h1>
        <p> {auth? "el usuario esta logueado": "el usuario no esta logueado"} </p>
        <p>{8 + 4}</p>
        <ul>
          {estaciones.map((el, index ) => <li key={index}>{el}</li>)}
        </ul>
        <p>
          Edita <code>src/App.js</code> y salva.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React con Lukita
        </a>
      </section>

      <section>
        <Componente msg="Hola, soy un Componente funcional expresado desde una prop" />
        <br/><hr/>
        <Propiedades 
        cadena="Esto es una cadena de texto" 
        numero={"26"} 
        booleano={true}
        arreglo={[1, 2, 3, 4, 5]}
        objeto={{nombre:"Lucy", correo:"kamery_94@hotmail.com"}}
        funcion={num => num*num}
        elementoReact={<i>Esto es un elemento tipo React</i>}
        componenteReact={<Componente msg="soy un Componente pasado como prop"/>}
        />
        <hr />
        <Estado></Estado>

        <hr />
        <RenderizadoCondicional />

        <hr />
        <RenderizadoElementos />

        <hr />
        <Eventos />

        <hr />
        <EventosES7 />

        <hr />
        <MasSobreEventos />


        <hr />
        <ComunicacionComponentes />

        <hr />
        <CicloVida />

        <hr />
        <AjaxApis />

        <hr />
        <ContadorHooks titulo="Daisukis"/>

        <hr />
        <ScrollHooks />

        <hr />
        <RelojHooks />

        <hr />
        <AjaxHooks />

        <hr />
        <HooksPersonalizados />

        <hr />
        <Referencias />

        <hr />
        <Formularios />
        <br />

        <hr />
        <Estilos />

        <hr />
        <StyledComponents />

      </section>
    </div>
    </>
  );
}

export default App;