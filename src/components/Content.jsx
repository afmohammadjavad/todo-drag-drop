import React from "react";
import ToDo from "./ToDo";

function Content() {
  return (
    <div className="container p-0" style={{ marginTop: "132px" }}>
      <div className="row m-0 justify-content-center">
        <div className="col-8 p-0">
          <ToDo />
        </div>
      </div>
      <div className="row mx-0 mb-5"></div>
    </div>
  );
}

export default Content;
