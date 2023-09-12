import React from "react";
import avataaars from "./avataaars.svg";
export default function Home() {
  return (
    <section className="w-100 vh-100 home d-flex justify-content-center align-items-center ">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="">
          <img src={avataaars} className="w-100" alt="img" />
        </div>
        <h1 className="text-white fw-bold">START FRAMEWORK</h1>
        <div className="d-flex">
          <span className="line mx-3"></span>
          <i className="fa-solid fa-star"></i>
          <span className="line mx-3"></span>
        </div>
        <p className="text-white">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </section>
  );
}
