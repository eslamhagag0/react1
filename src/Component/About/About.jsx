import React from "react";

export default function About() {
  return (
    <>
      <section className="about w-100 vh-100 home d-flex justify-content-center align-items-center ">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-white fw-bold my-4">ABOUT COMPONENT</h1>
          <div className="d-flex">
            <span className="line mx-3"></span>{" "}
            <i className="fa-solid fa-star"></i>
            <span className="line mx-3"></span>
          </div>
          <div className="row my-4 ">
            <div className="col-md-6 ">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 " >
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
