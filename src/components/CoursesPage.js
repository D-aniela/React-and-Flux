import React, { useState, useEffect } from "react";
//Llamara a nuestro mock api para obtener la lista de cursos
import { getCourses } from "../api/courseApi";

function CoursesPage() {
  //useState hook, returns an array with two values
  const [courses, setCourses] = useState([]);

  //useEffect accepts a function that it will call
  useEffect(() => {
    //Obtener cursos desde API, cuando se complete la llamada
    //Alojar el array de cursos en state
    //declare dependency array and tell useEffect when tu rerun[]
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  //setState llama solo actualiza las propiedades que se especifican
  return (
    <>
      <h2>Courses</h2>;
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CoursesPage;
