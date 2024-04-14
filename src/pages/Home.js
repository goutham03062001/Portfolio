import React from 'react'
import Profile from "../Assets/Profile.jpg";
import Resume from "../Assets/GouthamPolapally_Resume (1).pdf"
import "./Home.css"
const Home = () => {
    const handleDownload = ()=>{
        const link = document.createElement('a');
  link.download = 'Goutham_Polapally_Resume';
  link.href = Resume;
  link.click();
    }
  return (
    <>
        <div className='container'>
     
     <div className='row mt-5 '>
        <div className = "col-lg-6 profile-pic">
             <img src= {Profile} className="img img-thumbnail profile" alt="profile"/>
        </div>
        <div className='col-lg-6'>
         <h3 className = "home-heading">Hello Developers</h3>
         <h6 className='my-3 bit-about-me'>A bit about me</h6>
         <p className='profile-description'>
         An Enthusiastic Full stack web developer seeking to explore world with new intention. I'm experienced with HTML, CSS, JS, Bootstrap, React,Node,Express,SQL,MongoDB.
         </p>

         <div className='d-flex flex-row justify-content-between mt-5 intro-btn-section'>
             <button className='btn btn-dark btn-md intro' onClick = {handleDownload}>Resume</button>
             <button className='btn btn-primary btn-md intro'>
                <a href="/Projects" className=' projects-btn'>Projects</a>
             </button>
             <button className='btn btn-warning btn-md intro '>
             <a href="/Contact" className='contact-btn'>Contact</a>
             </button>
         </div>
        </div>
     </div>
 </div>

 <div className='container mt-5' id = "#education">
 <h3 className='text text-center mt-5'>Education</h3>
    <div className='row mt-5'>
        <div className='col-lg-4 my-3 col-sm-12 col-12 col-md-6'>
            <div className='card'>
                <div className='card-body'>
                    <p>School</p>
                    <p>Triveni High School</p>
                    <p>From : 2016-17</p>
                </div>
            </div>
        </div>
        <div className='col-lg-4 my-3 col-sm-12 col-12 col-md-6'>
        <div className='card'>
                <div className='card-body'>
                    <p>Intermidiate</p>
                    <p>Sandeepani Junior College</p>
                    <p>From : 2017-19</p>
                </div>
            </div>
        </div>
        <div className='col-lg-4 my-3 col-sm-12 col-12 col-md-6'>
        <div className='card'>
                <div className='card-body'>
                    <p>Engineering</p>
                    <p>CMR College Of Engineering and Technology</p>
                    <p>From : 2019-23</p>
                </div>
            </div>
        </div>
    </div>
 </div>
    </>
  )
}

export default Home