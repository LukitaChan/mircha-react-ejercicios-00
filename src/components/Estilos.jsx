import React from 'react';
import "../stylesheets/Estilos.css";
//en moduleStyle se van a almacenar los estilos que se van a utilizar en el componente.
import moduleStyles from '../stylesheets/Estilos.module.css';
//Modulo en SASS.
import "../stylesheets/Estilos.scss";

export default function Estilos() {

  let myStyles = {
    borderRadius: '0.5rem',
    margin:'2rem auto',
    maxWidth: '50%',
    backgroundColor: '#000000',
  };

  return(
    <div className='estilos'>
      <h2>Estilos CSS en React</h2>
      <h3 className="bg-react"> Estilos en hoja CSS externa </h3>
      <h3 className="bg-react"
      style={{
        borderRadius: '0.25rem', 
        margin: '1rem', 
        padding: '1rem',
        backgroundColor: '#f0f0f0'
        }}
      >
        Estilos en linea 1 (atributo: style)
      </h3>
      <h3 className="bg-react" style={myStyles}> Estilos en linea 2 (style como variable let)</h3>
      
      <h3 className="bg-react">Agregando Normalize con
        <br /*@import-normalize se llama en una hoja CSS superior, la hoja CSS que rige la aplicacion: index.css */ />
        <code>@import-normalize;</code>
      </h3>

      <h3>Estilos con Modulos</h3>
      <h4 className={moduleStyles.error}>Error</h4>
      <h4 className={moduleStyles.success}>Success</h4>

      <h3 className="bg-sass">Estilos con SASS</h3>

    </div>
  );
}