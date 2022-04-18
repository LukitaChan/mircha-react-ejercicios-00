import React from 'react';
import { useFetch } from '../hooks/useFetch';
//useFetch es el hook que hicimos en el archivo useFetch.jsx
//no es mas que abstraer la logica de programacion de algo que se esta trabajando contantemente y en vez de repetirlo. extraes la funcionalidad en un archivo, retornas los datos correspondientes y los estados de los mismos.

export default function HooksPersonalizados() {
  let url = "https://pokeapi.co/api/v2/pokemon/";
  //url="http://jsonplaceholder.typicode.com/users";
  //console.log(useFetch());
  
  //hay que desestructurar el objeto que retorna el hook,(useFetch).
  let {data, estaPendiente, error} = useFetch(url);



  //EL poder abstraer una funcionalidad y retornar los objetos que se esten trabajando internamente en ese hook.
  return(
    <div>
      <h2>Hooks Personalizados</h2>
      <h3>{JSON.stringify(estaPendiente)}</h3>
      <h3><mark>{JSON.stringify(error)}</mark></h3>
      <h3><pre style={{whiteSpace:"pre-wrap"}}><code>{JSON.stringify(data)}</code></pre></h3>
    </div>
  );
}

//se imprimen las 3 las variables de estado que arroja el hook useFetch
//Como el useFetch devuelve un objeto, para poder mostrarlos se convierte a cadena de texto con JSON.stringify