import React from "react";

//Los componentes de clase solo tienen un método que es requerido y es RENDER
class AboutPage extends React.Component {
  render() {
    return (
      //En lugar de utilizar div podemos utilizar React.Fragment
      //Envuelve elementos inmediatos
      //   <React.Fragment>

      //Podemos utilizarlos en modo vacío porque ya viene implícito React Fragment
      <>
        <h2>About</h2>
        <p>This app uses React.</p>
      </>
      // </React.Fragment>
    );
  }
}

export default AboutPage;
