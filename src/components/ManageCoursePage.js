import React from "react";
import { Prompt } from "react-router-dom";

const ManageCoursePage = (props) => {
  // debugger;
  return (
    <>
      <h2>Manage Course</h2>
      <Prompt when={true} message="Are you sure you want to leave?" />
      {/* This will read the slug placeholder from the URL */}
      {props.match.params.slug}
    </>
  );
};

export default ManageCoursePage;
