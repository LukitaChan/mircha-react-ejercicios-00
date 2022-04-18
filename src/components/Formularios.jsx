import React, {useState} from "react";

/* Primer codigo de ejemplo 
export default function Formularios() {

  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  //inicia en false, cuando se chequea el checkbox se cambia a true.
  const [terminos, setTerminos] = useState(false);

  const manejarSubmit = (evento) => {
    //preventDefault evita que se recargue la pagina a la hora de procesar el formulario.
    evento.preventDefault();
    alert("El formulario se ha enviado");
  };

  return (
    <div>
      <h2>Formularios</h2>

      <form onSubmit={manejarSubmit}>
        <label htmlFor="">Nombre:</label>
        <input 
        type="text" 
        id="nombre" 
        name="nombre" 
        //esto genera un input controlado por el estado.
        value={nombre}
        //ejecutamos la funcion que va a actualizar el nombre; setNombre.
        //evento es el objeto que origina el evento en este caso el evento onChange del input. evento.target es el objeto/elemento que origina el evento y value es el valor que el usuario esta escribiendo/ingresado.
        onChange={(evento) => setNombre(evento.target.value)}
        />

        <p>Elige tu sabor JS favorito:</p>
        <input 
        type="radio"
        id="vanilla"
        name="sabor"
        value="vanilla"
        onChange={(evento) => setSabor(evento.target.value)}
        //primer valor seleccionado por defecto con defaultChecked.
        defaultChecked={true}
        />
        <label htmlFor="vanilla" >Vanilla</label>

        <input 
        type="radio"
        id="react"
        name="sabor"
        value="react"
        onChange={(evento) => setSabor(evento.target.value)}
        />
        <label htmlFor="react" >React</label>

        <input 
        type="radio"
        id="angular"
        name="sabor"
        value="angular"
        onChange={(evento) => setSabor(evento.target.value)}
        />
        <label htmlFor="angular" >Angular</label>

        <input 
        type="radio"
        id="vue"
        name="sabor"
        value="vue"
        onChange={(evento) => setSabor(evento.target.value)}
        />
        <label htmlFor="vue" >Vue</label>

        <input 
        type="radio"
        id="svelte"
        name="sabor"
        value="svelte"
        onChange={(evento) => setSabor(evento.target.value)}
        />
        <label htmlFor="svelte" >Svelte</label>

        <br />

        <p>Elige tu lenguaje de programacion favorito</p>
        <select 
        name="lenguaje" 
        onChange={(evento)=> setLenguaje(evento.target.value)}
        defaultValue=""
        >

          <option value="">- - -</option>
          <option value="js">Javascript</option>
          <option value="ph">PHP</option>
          <option value="py">Python</option>
          <option value="ja">Java</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>

        <br /><br />

        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input 
        type="checkbox" 
        id="terminos" 
        name="terminos"
        onChange={(evento) => setTerminos(evento.target.checked)} //ckecked es valor boolean.
        />

        <br /><br />

        <input type="submit" />
        
      </form>
    </div>
  );
}
*/


export default function Formularios() {

  const [form, setForm] = useState({});

  //sera la funcion que se le asigna al evento onChange de todos los eventos del formulario que decida vincular a alguna de las propiedades de esa variable formulario.
  const manejarCambio = (evento) => {
    setForm({
      //lo que ya tiene el formulario(...form) se le suma lo que se convierta a propiedad del valor que tenga evento.target.name. Si esta propiedad ya existia en el form del objeto que viene, la actualizara con el valor que tenga evento.target.value.
      ...form,
      [evento.target.name]: evento.target.value
    });
  };

  //en vez de manejar el value, evaluamos el ckecked, como en el caso de los checkbox.
  const manejarChecked = (evento) => {
    setForm({
      ...form,
      [evento.target.name]: evento.target.checked
    });
  }

  const manejarSubmit = (evento) => {
    //preventDefault evita que se recargue la pagina a la hora de procesar el formulario.
    evento.preventDefault();
    alert("El formulario se ha enviado");
  };

  return (
    <div>
      <h2>Formularios</h2>

      <form onSubmit={manejarSubmit}>
        <label htmlFor="">Nombre:</label>
        <input 
        type="text" 
        id="nombre" 
        name="nombre" 
        //esto genera un input controlado por el estado.
        value={form.nombre}
        //ejecutamos la funcion que va a actualizar el nombre; setNombre.
        //evento es el objeto que origina el evento en este caso el evento onChange del input. evento.target es el objeto/elemento que origina el evento y value es el valor que el usuario esta escribiendo/ingresado.
        onChange={manejarCambio}
        />

        <p>Elige tu sabor JS favorito:</p>
        <input 
        type="radio"
        id="vanilla"
        name="sabor"
        value="vanilla"
        onChange={manejarCambio}
        //primer valor seleccionado por defecto con defaultChecked.
        defaultChecked={true}
        />
        <label htmlFor="vanilla" >Vanilla</label>

        <input 
        type="radio"
        id="react"
        name="sabor"
        value="react"
        onChange={manejarCambio}
        />
        <label htmlFor="react" >React</label>

        <input 
        type="radio"
        id="angular"
        name="sabor"
        value="angular"
        onChange={manejarCambio}
        />
        <label htmlFor="angular" >Angular</label>

        <input 
        type="radio"
        id="vue"
        name="sabor"
        value="vue"
        onChange={manejarCambio}
        />
        <label htmlFor="vue" >Vue</label>

        <input 
        type="radio"
        id="svelte"
        name="sabor"
        value="svelte"
        onChange={manejarCambio}
        />
        <label htmlFor="svelte" >Svelte</label>

        <br />

        <p>Elige tu lenguaje de programacion favorito</p>
        <select 
        name="lenguaje" 
        onChange={manejarCambio}
        defaultValue=""
        >

          <option value="">- - -</option>
          <option value="js">Javascript</option>
          <option value="ph">PHP</option>
          <option value="py">Python</option>
          <option value="ja">Java</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>

        <br /><br />

        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input 
        type="checkbox" 
        id="terminos" 
        name="terminos"
        onChange={manejarChecked} //ckecked es valor boolean.
        />

        <br /><br />

        <input type="submit" />
        
      </form>
    </div>
  );
}