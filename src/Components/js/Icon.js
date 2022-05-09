import React from "react";
import { BsCodeSlash, BsBrush } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";

const Icon = () => {
  return (
    <>
      <div class="container me-auto ms-auto row row-cols-1 row-cols-md-4 g-4 m-5">
        <div class="col">
          <div class="card h-100 border-0 text-center">
            <span className="icons fs-3 align-middle text-light">
              <BsCodeSlash />
            </span>
            <div class="card-body">
              <h5 class="card-title">Web Design</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0 text-center">
            <span className="icons fs-3 align-middle text-light">
              <BsBrush />
            </span>
            <div class="card-body">
              <h5 class="card-title">Graphic Design</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0 text-center">
            <span className="icons fs-3 align-middle text-light">
              <MdOutlineDesignServices />
            </span>
            <div class="card-body">
              <h5 class="card-title">UI Design</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0 text-center">
            <span className="icons fs-3 align-middle text-light">
              <AiOutlineCopy />
            </span>
            <div class="card-body">
              <h5 class="card-title">Copywriting</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Icon;
