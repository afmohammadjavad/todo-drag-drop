import React from "react";

function Image() {
  return (
    <div className="container-fluid p-0 fixed-top pl-4 pt-3">
      <div className="row m-0">
        <div className="col-1 p-0">
          <a href="https://github.com/afmohammadjavad" target="_blank">
            <img
              src="image/me/me.jpg"
              alt="afmohammadjavad"
              className="img-fluid rounded-circle float-left"
              style={{ zIndex: "10", minWidth: "65px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Image;
