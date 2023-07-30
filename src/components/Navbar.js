import './Navbar.css'
import { useState, useEffect } from 'react'

export default function Navbar(){

  function showSearch(e){
    e.preventDefault()
    document.getElementById('navbar-toggler').style.display = 'none'
    document.getElementById('search-icon').style.display = 'none'
    document.getElementById('navbar-brand').style.display = 'none'
    document.getElementById('search-form').style.display = 'flex'
  }

  function hideSearch(e){
    e.preventDefault()
    document.getElementById('navbar-toggler').style.display = 'block'
    document.getElementById('search-icon').style.display = 'block'
    document.getElementById('navbar-brand').style.display = 'block'
    document.getElementById('search-form').style.display = 'none'
  }

    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
        <div className="container-fluid nav-top">
          <button id="navbar-toggler" className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand brand-first fw-bold" id="navbar-brand" href="/">MATIA</a>
          <button id="search-icon" onClick={e=>showSearch(e)} className="btn btn-link search-btn search-icon text-dark" style={{borderLeft: "none", borderBottom: "none"}}><i className="bi bi-search"></i></button>
          <div className="collapse navbar-collapse d-md-flex justify-content-md-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Designs
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Pambo picaso</a></li>
                  <li><a className="dropdown-item" href="#">Mermaid gowns</a></li>
                  <li><a className="dropdown-item" href="#">Peplum dresses</a></li>
                  <li><a className="dropdown-item" href="#">Pleated skirts</a></li>
                  <li><a className="dropdown-item" href="#">Cocktail dresses</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                  <i className="bi bi-cart4"></i> Cart
                </a>
              </li>
            </ul>
          </div>

          <div className="search-form" id="search-form">
            <form>
              <input type="text" placeholder="Search" spellcheck="false" className="" />
              <button className="btn btn-link search-btn text-dark"><i className="bi bi-search"></i></button>
            </form>

            <button onClick={e=>hideSearch(e)} className="btn btn-link close-search text-dark fw-bold d-md-none" id="close-search">
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
    </nav>
    )
}