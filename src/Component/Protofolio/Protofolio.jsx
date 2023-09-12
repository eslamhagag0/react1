import React, { useEffect } from "react";
import poert1 from "./poert1.png";
import poert2 from "./port2.png";
import poert3 from "./port3.png";
export default function Protofolio() {
  var x = "";
  useEffect(() => {
    let imgSibling = document.querySelectorAll(".position-absolute ");
    let showDiv = document.querySelector(".showDiv");
    // console.log(showDiv);
    for (let i = 0; i < imgSibling.length; i++) {
      imgSibling[i].addEventListener("click", function () {
        let theImg = imgSibling[i].nextElementSibling;
        x = theImg.getAttribute("src");
        showDiv.classList.remove("hides");
        showDiv.classList.add("shows");
        let showImg = document.querySelector(".showDiv img");
        showImg.setAttribute("src", x);
      });
    }//end for
    let ex=document.querySelector('.showDiv')
    console.log(ex);
    ex.addEventListener('click',function(){
      showDiv.classList.remove("shows");
      showDiv.classList.add("hides");
    console.log(ex);

    })
    
    return () => {};
  }, []);

  return (
    <section className="protofolio  w-100 vh-100 home  pt-5 ">
      <div className="container pt-3 d-flex flex-column align-items-center ">
        <div className="showDiv hides justify-content-center align-items-center position-fixed w-100  z-3 vh-100">
          <img src='' className="rounded-3 w-50" alt="" />
        </div>
        <h1 className="text-white fw-bold mt-5">PORTFOLIO COMPONENT</h1>

        <div className="d-flex">
          <span className="line mx-3"></span>
          <i className="fa-solid fa-star"></i>
          <span className="line mx-3"></span>
        </div>
        <div className="row g-2">
          <div className="col-md-4 ">
            <div className="m-3 rounded-2 overflow-hidden position-relative">
              <div className="w-100 h-100 proto-layer d-flex justify-content-center fw-bold fa-6x align-items-center position-absolute ">
                <i className="fa-solid fa-plus  text-white"></i>
              </div>
              <img src={poert1} className="w-100 " alt="" />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="m-3 rounded-2 overflow-hidden position-relative">
              <div className="w-100 h-100 proto-layer d-flex justify-content-center fw-bold fa-6x align-items-center position-absolute ">
                <i className="fa-solid fa-plus  text-white"></i>
              </div>
              <img src={poert2} className="w-100 " alt="" />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="m-3 rounded-2 overflow-hidden position-relative">
              <div className="w-100 h-100 proto-layer d-flex justify-content-center fw-bold fa-6x align-items-center position-absolute ">
                <i className="fa-solid fa-plus  text-white"></i>
              </div>
              <img src={poert3} className="w-100 " alt="" />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="m-3 rounded-2 overflow-hidden position-relative">
              <div className="w-100 h-100 proto-layer d-flex justify-content-center fw-bold fa-6x align-items-center position-absolute ">
                <i className="fa-solid fa-plus  text-white"></i>
              </div>
              <img src={poert3} className="w-100 " alt="" />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="m-3 rounded-2 overflow-hidden position-relative">
              <div className="w-100 h-100 proto-layer d-flex justify-content-center fw-bold fa-6x align-items-center position-absolute ">
                <i className="fa-solid fa-plus  text-white"></i>
              </div>
              <img src={poert2} className="w-100 " alt="" />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="m-3 rounded-2 overflow-hidden position-relative">
              <div className="w-100 h-100 proto-layer d-flex justify-content-center fw-bold fa-6x align-items-center position-absolute ">
                <i className="fa-solid fa-plus  text-white"></i>
              </div>
              <img src={poert1} className="w-100 " alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
