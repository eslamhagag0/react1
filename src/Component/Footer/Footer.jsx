import React from "react";

export default function Footer() {
  return (
    <>
    <footer className=" w-100 py-3 text-center">
      <div className="container ">
        <div className="row">
          <div className="col-md-4   py-5">
            <h3>Location</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4  py-5">
            <h3>AROUND THE WEB</h3>
            <div className="d-flex justify-content-center   ">
              <div className="icon rounded-circle d-flex justify-content-center mx-2 align-items-center ">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="icon rounded-circle d-flex justify-content-center mx-2 align-items-center">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="icon rounded-circle d-flex justify-content-center mx-2 align-items-center">
                <i className="fa-brands fa-github"></i>
              </div>
              <div className="icon rounded-circle d-flex justify-content-center mx-2 align-items-center">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4  py-5">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      
      </div>
    </footer>
      <div className="footfoot d-flex py-4 justify-content-center">
        Copyright © Your Website 2021
        </div>
  </>
  );
}
