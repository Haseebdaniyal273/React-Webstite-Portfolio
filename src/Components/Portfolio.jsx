import React from "react";
import "./style.css";
import images from './images/Dani.png'
import "./style-switcher.css"

/////////switcher//////////
function switcher(){



const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",() =>{
    document.querySelector(".style-switcher").classList.toggle("open")
})

//////hide on scroll/////

window.addEventListener("scroll",() => {

if(document.querySelector(".style-switcher").classList.contains("open"))
{
    document.querySelector(".style-switcher").classList.remove("open");
}
})

}


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


const Portfolio = () => {
  return (
    <div>
    <div className="main-content">
      <section className="portfolio section">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-heading padd-15">
              <h2>My Last Projects :</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                    <img src={images} alt="image" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                    <img src={images} alt="image" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                    <img src={images} alt="image" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                    <img src={images} alt="image" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                    <img src={images} alt="image" />
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
            <i className="fas "></i>
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

export default Portfolio;
