import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";

//render acepta dos argumentos
//el primero es el componente que queremos renderizar
/**el segundo, necesitamos especificar el elemento del dom donde queremos
 acomodar nuestra aplicación**/
render(<App />, document.getElementById("root"));
