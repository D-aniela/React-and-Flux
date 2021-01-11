import React from "react";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";

// npm install react-toastify@5.1.1
import { ToastContainer } from "react-toastify";
//import css from this toast
import "react-toastify/dist/ReactToastify.css";

import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        {/* Debe estar debajo de la ruta slug sino no funcionará */}
        <Route path="/course" component={ManageCoursePage} />

        <Redirect from="/about-page" to="about" />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
