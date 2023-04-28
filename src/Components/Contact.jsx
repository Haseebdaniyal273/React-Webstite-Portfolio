import { click } from "@testing-library/user-event/dist/click";
import React,{useState} from "react";

import "./style-switcher.css"

/////////////////////////////////////////switcher//////////////////////////////////////////
function switcher(){

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",() =>{
    document.querySelector(".style-switcher").classList.toggle("open")
})

///////////////////////////////////////hide on scroll/////////////////////////////////////

window.addEventListener("scroll",() => {

if(document.querySelector(".style-switcher").classList.contains("open"))
{
    document.querySelector(".style-switcher").classList.remove("open");
}
})
}
////////////////////////////////////////Day-Nigth//////////////////////////////////////////


// const dayNight = document.querySelector(".day-night");

//   dayNight.addEventListener("click",() =>{
//     dayNight.querySelector("i").classList.toggle("fa-sun");
//     dayNight.querySelector("i").classList.toggle("fa-moon");
//     document.body.classList.toggle("dark");
//   })

// window.addEventListener("load", () =>{
// if(document.body.classList.contains("dark"))
// {
//   dayNight.querySelector("i").classList.add("fa-sun");
// }
// else
// {
//   dayNight.querySelector("i").classList.add("fa-moon");
// }

// })


// chnge();

////////////////////////////////////////colors//////////////////////////////////////////
const a1 = () =>{

  const root = document.querySelector(':root');

  // set css variable
  root.style.setProperty('--skin-color', '#ec1839');
  
  // to get css variable from :root
  const color = getComputedStyle(root).getPropertyValue('--skin-color'); 
}
const a2 = () =>{

  const root = document.querySelector(':root');

  // set css variable
  root.style.setProperty('--skin-color', '#fa5b0f');
  
  // to get css variable from :root
  const color = getComputedStyle(root).getPropertyValue('--skin-color'); 
}
const a3 = () =>{

  const root = document.querySelector(':root');

  // set css variable
  root.style.setProperty('--skin-color', '#37b182');
  
  // to get css variable from :root
  const color = getComputedStyle(root).getPropertyValue('--skin-color'); 
}
const a4 = () =>{

  const root = document.querySelector(':root');

  // set css variable
  root.style.setProperty('--skin-color', '#1854b4');
  
  // to get css variable from :root
  const color = getComputedStyle(root).getPropertyValue('--skin-color'); 
}
const a5 = () =>{

  const root = document.querySelector(':root');

  // set css variable
  root.style.setProperty('--skin-color', '#f021b2');
  
  // to get css variable from :root
  const color = getComputedStyle(root).getPropertyValue('--skin-color'); 
}
//////////////////////////////////////////////////////////////////////////////////


const Contact = () => {
  return (
    <div>
      <div className="main-content">
        <section className="contact section">
          <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact</h2>
            </div>
          </div>
          <h3 className="contact-title padd-15">Have you any Question ?</h3>
          <h4 className="contact-sub-title padd-15">I'm at your Service</h4>
          <div className="row">
            <div className="contact-info-item padd-15">
                <div className="icon"><i className="fa fa-phone"></i></div>
            <h4>Call Us On</h4>
            <p>+92 3074566042</p>
            </div>
            <div className="contact-info-item padd-15">
                <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
            <h4>Office</h4>
            <p>Lahore</p>
            </div>
            <div className="contact-info-item padd-15">
                <div className="icon"><i className="fa fa-envelope"></i></div>
            <h4>Email</h4>
            <p>Haseeb273daniyal@gmail.com</p>
            </div>
            <div className="contact-info-item padd-15">
                <div className="icon"><i className="fa fa-globe-europe"></i></div>
            <h4>website</h4>
            <p>www.domian.com</p>
            </div>
          </div>
          <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
          <h4 className="contact-sub-title padd-15">I WILL RESPOND YOU SOON</h4>
          <div className="row">
            <div className="contact-form padd-15">
                <div className="row">
                    <div className="form-item col-6 padd-15">
                    <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    </div>

                    <div className="form-item col-6 padd-15">
                    <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    </div>

                    <div className="form-item col-12 padd-15">
                    <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" />
                    </div>
                    </div>

                    <div className="form-item col-12 padd-15">
                    <div className="form-group">
                    <textarea name="" className="form-control" id="" placeholder="Message"></textarea>
                    </div>
                    </div>

                    <div className="form-item col-12 padd-15">
                    <button type="submit" className="btn">Send Message</button>
                    </div>
                </div>
            </div>
          </div>
          </div>
        </section>
      </div>
      <div>
        <div className="style-switcher">
          <div className="style-switcher-toggler s-icon">
          <i className="fas fa-cog fa-spin" onClickCapture={switcher} ></i>
          </div>
          <div className="day-night s-icon">
            <i className="fas" ></i>
            </div>
            <h4>Theme Changer</h4>
            <div className="colors">
              <span className="color-1" onClick={a1} ></span>
              <span className="color-2" onClick={a2} ></span>
              <span className="color-3" onClick={a3} ></span>
              <span className="color-4" onClick={a4} ></span>
              <span className="color-5" onClick={a5} ></span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
// switcher();
