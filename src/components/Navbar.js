import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Goutham</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
     
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Projects
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/Projects">Prospect-Leads</a>
          <a class="dropdown-item" href="/Projects">Slowly</a>
          <a class="dropdown-item" href="/Projects">E-web</a>
          <a class="dropdown-item" href="/Projects">valueTech</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="/About">About Me</a>
      </li>
    </ul>
    <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
            <a href="/" className='nav-link'>
               Email :  gouthamp0306@gmail.com
            </a>
        </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar