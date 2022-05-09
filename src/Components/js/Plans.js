import React from "react";

const Plans = () => {
  return (
    <>
      <div className="container me-auto ms-auto row row-cols-1 row-cols-md-3 g-4 m-5">
        <div className="col">
          <div className="card h-100 border-0 text-center">
            <div className="card-body">
              <div className="p-3">
                <h3 className="card-title">BASIC</h3>
                <h5 className="card-text"> $ 25/Month </h5>
                <button className="btn_clr text-light" type="submit">
                  Buy This Plan
                </button>
              </div>
              <div className="mt-4">
                <h6 className="card-text mt-3">Design Talks</h6>
                <h6 className="card-text mt-3">Drawing</h6>
                <h6 className="card-text mt-3">Wireframes</h6>
                <h6 className="card-text mt-3">2 Revisions</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-0 text-center">
            <div className="card-body">
              <div className="bg_clr p-3">
                <h3 className="card-title">STANDARD</h3>
                <h5 className="card-text"> $ 25/Month </h5>
                <button className="btn_clr1 text-dark" type="submit">
                  Buy This Plan
                </button>
              </div>
              <div className="mt-4">
                <h6 className="card-text mt-3">Design Talks</h6>
                <h6 className="card-text mt-3">Drawing</h6>
                <h6 className="card-text mt-3">Wireframes</h6>
                <h6 className="card-text mt-3">8 Revisions</h6>
                <h6 className="card-text mt-3">Presentation</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-0 text-center">
            <div className="card-body">
              <div className="p-3">
                <h3 className="card-title">PROFESSIONAL</h3>
                <h5 className="card-text"> $ 25/Month </h5>
                <button className="btn_clr text-light" type="submit">
                  Buy This Plan
                </button>
              </div>
              <div className="mt-4">
                <h6 className="card-text mt-3">Design Talks</h6>
                <h6 className="card-text mt-3">Drawing</h6>
                <h6 className="card-text mt-3">Wireframes</h6>
                <h6 className="card-text mt-3">8 Revisions</h6>
                <h6 className="card-text mt-3">Presentation</h6>
                <h6 className="card-text mt-3">Mock Up</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
