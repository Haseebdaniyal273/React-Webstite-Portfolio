import React from "react";
import "./style.css";
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


const About = () => {
  return (
    <div>
    <div className="main-content">
      <section className="about section">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Us</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h3>
                    I'm Haseeb Daniyal <span>Hope you like this site. </span>
                  </h3>
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati, quisquam consequuntur itaque facere labore, sit dolorum reiciendis nobis similique mollitia perspiciatis in commodi minima temporibus quas alias, vel deleniti!
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Birthday: <span>20 March 1999</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Age: <span>23</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Website: <span>This is my portfolio site</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email: <span>Haseeb273daniyal@gamil.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Whatsapp: <span>03074566042</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City: <span>Lahore</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree: <span>Computer Science</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance: <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a href="#" className="btn">
                        Download CV
                      </a>
                      <a href="#contact" className="btn hire-me">
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>HTML</h5>
                      <div className="progress">
                        <div className="progress-in a1"></div>
                        <div className="skill-percentage">98%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>CSS</h5>
                      <div className="progress">
                        <div className="progress-in"></div>
                        <div className="skill-percentage">76%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>JS</h5>
                      <div className="progress">
                        <div className="progress-in"></div>
                        <div className="skill-percentage">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>React</h5>
                      <div className="progress">
                        <div className="progress-in"></div>
                        <div className="skill-percentage">88%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Bootstrap</h5>
                      <div className="progress">
                        <div className="progress-in"></div>
                        <div className="skill-percentage">90%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i> 2008 - 2013
                            </h3>
                            <h4 className="timeline-title">Master in Cs</h4>
                            <p className="timeline-text">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Neque obcaecati, quisquam consequuntur
                              itaque facere labore, sit dolorum reiciendis nobis
                              similique mollitia perspiciatis in commodi minima
                              temporibus quas alias, vel deleniti!
                            </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i> 2008 - 2013
                            </h3>
                            <h4 className="timeline-title">Master in Cs</h4>
                            <p className="timeline-text">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Neque obcaecati, quisquam consequuntur
                              itaque facere labore, sit dolorum reiciendis nobis
                              similique mollitia perspiciatis in commodi minima
                              temporibus quas alias, vel deleniti!
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i> 2008 - 2013
                            </h3>
                            <h4 className="timeline-title">Master in Cs</h4>
                            <p className="timeline-text">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Neque obcaecati, quisquam consequuntur
                              itaque facere labore, sit dolorum reiciendis nobis
                              similique mollitia perspiciatis in commodi minima
                              temporibus quas alias, vel deleniti!
                            </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i> 2008 - 2013
                            </h3>
                            <h4 className="timeline-title">Master in Cs</h4>
                            <p className="timeline-text">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Neque obcaecati, quisquam consequuntur
                              itaque facere labore, sit dolorum reiciendis nobis
                              similique mollitia perspiciatis in commodi minima
                              temporibus quas alias, vel deleniti!
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default About;
