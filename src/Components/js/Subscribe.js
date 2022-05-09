import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="me-auto ms-auto row-cols-md-2 bg_img p-5">
        <div className="container">
          <h4 className="text-light">Subscribe to Our Newsletter</h4>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn_clr text-light" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
