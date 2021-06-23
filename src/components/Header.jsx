import React from "react";

function Header() {
  return (
    <div
      className="container-fluid px-0 pt-2 fixed-top rounded bg-light"
      style={{
        background: "url(image/bgimage.jpg) no-repeat center fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="row mx-0 d-block text-center">
        <br />
        <h1>ToDo</h1>
        <p>A web application for storing your to-do list </p>
      </div>
    </div>
  );
}

export default Header;
