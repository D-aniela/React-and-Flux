import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";

//Router
import { BrowserRouter as Router } from "react-router-dom";

//render acepta dos argumentos
//el primero es el componente que queremos renderizar
/**el segundo, necesitamos especificar el elemento del dom donde queremos
 acomodar nuestra aplicación**/
render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
