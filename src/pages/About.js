import React from "react";

const About = () => {
  return (
    <div className="container">
      <h4 className="mt-5 about-me">About Me</h4>
      <div className="row mt-5">
        <div className="col-lg-6 about-description">
          <p>
            An Enthusiastic Full stack web developer seeking to explore world
            with new intention. I'm experienced with HTML, CSS, JS, Bootstrap,
            React,Node,Express,SQL,MongoDB.
          </p>
        </div>

        <div className="col-lg-6 about-card">
            <div className = "card">
                <div className="card-body">
                    <p>Front End : HTML,CSS, JS, React.js, Bootstrap, Material Ui</p>
                    <p>Back End : Node.js, Express.js, Spring boot</p>
                    <p>DataBase : MongoDB, MYSQL</p>
                    <div className="d-flex flex-row justify-content-between my-3 mt-5">
                    <button className="btn btn-dark btn-sm">
                        <a href="https://github.com/goutham03062001">Github</a>
                    </button>
                    <button className="btn btn-dark btn-sm">Instagram</button>
                    <button className="btn btn-dark btn-sm">Youtube</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
