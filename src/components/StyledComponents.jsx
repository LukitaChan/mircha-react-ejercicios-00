import React from "react";
//styled css es una libreria que nos permite crear estilos en css.
//styled keyframes nos permite crear animaciones en css.
//styled themeProvider nos permite crear un nuevo tema en css. Es como un contenedor. En este caso las usamos para modo claro y nocturno de la app.
//createGlobalStyle nos permite crear una hoja de estilos global.
import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from "styled-components";

export default function StyledComponents() {
  //como esto usa template strings, podemos usar la interpolacion y crear una variable, en este caso para las trancisiones. Para background-color:

  let mainColor = "#db7093",
  mainAlphaColor80 = "#db709380"

  //Creamos una funcion para la transcicion de los estilos en myH3.
  const setTransitionTime = (time) => `all ${time} ease-in-out`;

  //animacion con keyframes
  const fadeIn = keyframes`
  0% {opaity: 0;}
  100% {opacity: 1;}
  `;

  //styled-components ya trae integrado un grapper de las etiquetas react basadas en los elementos html para generear. Creamos en una variable y asignamos una etiqueta de la libreria styled-components.
  const MyH3 = styled.h3`
  padding: 2rem;
  text-align: center;
  color: ${(props) => props.color};
  color: ${({color}) => color || "cyan"};
  background-color: ${mainColor};
  transition: ${setTransitionTime("1s")};
  animation: ${fadeIn} 5s ease-out;
  
  ${(props) => props.isButton && css`
    margin: auto;
    max-width: 50%;
    border-radius: 0.25rem;
    cursor: pointer;
    color: white;
    `}

  &:hover {
    background-color: ${mainAlphaColor80};
  }
  `;

  const light = {
    color: "#222",
    bgColor:"#DDD"
  };

  const dark = {
    color: "#DDD",
    bgColor:"#222"
  };

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({theme}) => theme.color};
    background-color: ${({theme}) => theme.bgColor};
  `;

  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

  const GlobalStyle = createGlobalStyle`
    h2 {
      padding: 2rem;
      background-color: #E4BADA;
      color: #68335B;
      text-transform: uppercase;
    }
  `;

  return(
    <>
    <GlobalStyle/>
      <h2>Styled-Components</h2>
      <MyH3>Hola soy un h3 estilizado con styled-components</MyH3>
      <MyH3 color="#61dafb">
        Hola soy un h3 estilizado con styled-components
      </MyH3>
      {/*para el MyH3 es un componente (codigo css en la misma logica), podemos pasarle variables como una propiedad (color), que sera el color que queremos que tenga el h3. Eso lo podemos hacer en el MyH3 con una props en color. Este hereda esa prop.*/}
      <MyH3 isButton >Soy un H3 estilizado como boton</MyH3>

      <ThemeProvider theme={light}>
        <Box>Soy una cajita light</Box>
        <BoxRounded>Soy una cajita redondeadita light</BoxRounded>
      </ThemeProvider>

      <ThemeProvider theme={dark}>
        <Box>Soy una cajita dark</Box>
        <BoxRounded>Soy una cajita redondeadita dark</BoxRounded>
      </ThemeProvider>

    </>
  );
}