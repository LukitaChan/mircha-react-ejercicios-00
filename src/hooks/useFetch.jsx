import {useState, useEffect} from 'react';
//hooks personalizado para hacer peticiones a una API. Operaciones asincronas con fetch.

//no se va a crear un componente funcional, si no una funcion que despues se usara en el archivo HookPersonalizados.jsx.
//este useFetch  recibe peticiones por get (defecto), al fetch no se le estan pasando el objeto de parametros por que no se estan mandando datos. Se podria tene run useFetch para peticiones get y otro para enviar datos y hacer peticiones post, put, delete.
export const useFetch = (url) => {
  //Se van a manejar 3 variables useState, una para los data de entrada de la peticion, otra para cuando se haga una peticion (la variable) se controle el ingreso de la peticion, y otra por si hay algun error.
  const [data, setData] = useState(null);
  const [estaPendiente, setEstaPendiente] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Se va a hacer una peticion a la url que se le pase por parametro.
    const getDataPok = async (url) => {
      //el try catch es para manejar el error.
      try {
        let respuesta = await fetch(url);
        //validacion para manupular el error.
        //En caso de respuesta FALSE.
        if (!respuesta.ok) {
          //se manda un error throw, que es como el return de los errores. Se crea un objeto.}
          //Si se crea el error (true). fetch tiene una propiedad status que viene el objeto AJAX y un statusText que es el posible mensaje que nos devuelve el servidor (API).
          throw {
            err:true, 
            status:respuesta.status, 
            statusText:!respuesta.statusText ? "Ocurrio un PokeError" : respuesta.statusText,
          };
        }
        //En caso de respuesta TRUE. no hay error.
        let data = await respuesta.json();

        //actualizacion de los estados de las variables que el hook va a retornar.
        //Se manda de true a false por que ya no esta pendiente el resultado.
        setEstaPendiente(false);
        //Actualiza el estado de la variable data.
        setData(data);
        setError({err:false});
      } catch (err){
        //Se actualizaran los hooks en caso de error.
        setEstaPendiente(true);
        //setData(null);
        setError(err);
      }
    };
    getDataPok(url);
  }, [url]);
    //Hay que determinar el valor de url, porque si no se va a hacer una peticion, no se va a ejecutar el useEffect.

    //se retorna un objeto con los datos de la peticion, la variable de estaPendiente, y el error.
    return {data, estaPendiente, error};

};