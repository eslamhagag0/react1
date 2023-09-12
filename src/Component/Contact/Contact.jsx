import React, { useEffect } from "react";

export default function Contact() {
  //   let [moveLabel, setMoveLabel] = useState(false);

  // function moving(){
  // // if()
  // }
  useEffect(() => {
    let inp = document.querySelectorAll("input");
    let label = document.querySelectorAll("label");

    for (let i = 0; i < inp.length; i++) {
      inp[i].addEventListener("keyup", function () {
        if (this.value == "") {
          console.log("fady");
          label[i].classList.add('fady')
          label[i].classList.remove('feeh')
          // label[i].classList.add('f')
          // setMoveLabel(false)
          // this.style.color='#fff'
          // console.log(this);
        }//if
         else {
          // this.style.color='blue'
          label[i].classList.add('feeh')
          label[i].classList.remove('fady')

          console.log("feeh");
          // console.log(this);
        }//else
      });//end keyuo
    }//end for



    return () => {};
  }, []);

  // }
  return (
    <>
      <section className="w-100 vh-100 contact d-flex justify-content-center align-items-center ">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <h1 className=" fw-bold">CONTACT SECTION</h1>
          <div className="d-flex">
            <span className=" mx-3"></span>
            <i className="fa-solid fa-star"></i>
            <span className=" mx-3"></span>
          </div>
          <div className="d-flex flex-column  w-50 ">
            <label className="fady" htmlFor="usname">
              user name :
            </label>
            <input
              id="usname"
              className="py-2 my-3 form-control border border-start-0 border-top-0 border-end-0 rounded-3"
              type="text"
              placeholder="User Name"
            />
          </div>
          <div className="d-flex flex-column  w-50">
            <label className="fady" htmlFor="usAge">
              user age :
            </label>
            <input
              id="usname"
              className="py-2 my-3 form-control border border-start-0 border-top-0 border-end-0 rounded-3"
              type="text"
              placeholder="Age"
            />
          </div>
          <div className="d-flex flex-column  w-50">
            <label className="fady" htmlFor="usEmail">
              Email :
            </label>
            <input
              id="usEmail"
              className="py-2 my-3 form-control border border-start-0 border-top-0 border-end-0 rounded-3"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="d-flex flex-column  w-50">
            <label className="fady" htmlFor="usPass">
              password :
            </label>
            <input
              id="usPass"
              className="py-2 my-3 form-control border border-start-0 border-top-0 border-end-0 rounded-3"
              type="text"
              placeholder="Password"
            />
          </div>
          <button className="btn btn-lg ">send</button>
        </div>
      </section>
    </>
  );
}
