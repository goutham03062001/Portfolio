import React from 'react'
import project from "../Assets/project-1.png";
import Education from "../Assets/education.png";
import slowly from "../Assets/slowly.png";
import valueTech from "../Assets/valueTech.png"
const Projects = () => {
  return (
    <div className='container'>
        <div className='row my-5'>
            <div className='col-lg-4'>
                <div className='card project-card'>
                <img alt="first-project" className='img img-thumbnail project-image' src = {project}/>
                    <div className='card-body'>
                        <p className='text'>Prospect-Leads</p>
                        <p className='text from'>From : 06-02-23</p>
                        <p className='text to'>To : 11-02-23</p>
                        <hr/>
                        <p className='text'>
                            Technologies Used 
                           
                        </p>
                        <p className='text '>
                        HTML, CSS, React.js , Bootstrap
                        </p>
                        <p className='text website text-right'>
                            <a className='nav-link' href="http://www.prospect-leads.com">view website</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4'>
            <div className='card project-card'>
                <img alt="first-project" className='img img-thumbnail project-image' src = {Education}/>
                    <div className='card-body'>
                        <p className='text'>E-WEB</p>
                        <p className='text from'>From : 10-11-22</p>
                        <p className='text to'>To : 11-12-22</p>
                        <hr/>
                        <p className='text'>
                            Technologies Used  
                           
                        </p>

                        <p>Front End : HTML, CSS, React.js, Bootstrap, Ant Design, MaterialUI</p>
                        <p>Back End : Node.js, Express.js</p>
                        <p>Database: MongoDB</p>
                        <p className='text website text-right'>
                            <a className='nav-link' href="https://github.com/goutham03062001/E-web">Github Repo</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4'>
            <div className='card project-card'>
                <img alt="first-project" className='img img-thumbnail project-image' src = {slowly}/>
                    <div className='card-body'>
                        <p className='text'>Slowly</p>
                        <p className='text from'>From : 23-10-22</p>
                        <p className='text to'>To : 23-11-22</p>
                        <hr/>
                        <p className='text'>
                            Technologies Used  
                           
                        </p>

                        <p>Front End : HTML, CSS, React.js, Bootstrap, Ant Design, MaterialUI</p>
                        <p>Back End : Node.js, Express.js</p>
                        <p>Database: MongoDB</p>
                        <p className='text website text-right text-dark'>
                            <a className='nav-link' href="https://github.com/goutham03062001/slowly">Github Repo</a>
                        </p>
                    </div>
                </div>
            </div>


            <div className='col-lg-4 my-5'>
                <div className='card project-card'>
                <img alt="first-project" className='img img-thumbnail project-image' src = {valueTech}/>
                    <div className='card-body'>
                        <p className='text'>ValueTech</p>
                        <p className='text from'>From : 10-01-23</p>
                        <p className='text to'>To : 11-02-23</p>
                        <hr/>
                        <p className='text'>
                            Technologies Used 
                           
                        </p>
                        <p className='text '>
                        HTML, CSS, React.js , Bootstrap
                        </p>
                        <p className='text website text-right'>
                            <a className='nav-link' href="https://valuetech.netlify.app/">view website</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects