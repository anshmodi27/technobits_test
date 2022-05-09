import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg_img p-5">
        <div
          className="container my-5 p-5 text-center bg_clr1"
          style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
        >
          <form>
            <h2 className="mb-3 card-title text-light">Contact Us</h2>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email address"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="mb-3">
              <textarea
                type="text"
                className="form-control"
                placeholder="Enter Your Message"
              />
            </div>
            <button type="submit" className="btn btn-outline-light fs-4">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
