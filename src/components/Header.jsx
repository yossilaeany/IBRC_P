import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {
  return (
    <>
     <div className="container-fluid bg bg-light mb-5">
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/"><img src="images/logo-removebg-preview.png" alt="logo" width="75" height="70" /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item nav-item ">
                <NavLink className="na nav-link  nav_text btn " aria-current="page" to="/"><i className="fa fa-home" aria-hidden="true"></i>דף הבית</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="na nav-link nav_text btn" to="/About"><i className="fa fa-asterisk" aria-hidden="true"></i>אודותנו</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="na nav-link nav_text btn" to="/Gallery"><i className="fa fa-camera" aria-hidden="true"></i> גלריה</NavLink>
            </li>
              <li className="nav-item">
                <NavLink className="na nav-link nav_text btn" to="/Q_and_A"><i className="fa fa-question" aria-hidden="true"></i>אז מה זה טיבוע? שאלות ותשובות</NavLink>
              </li>
              <li className="nav-item  ">
                <NavLink className="na nav-link btn  nav_text" to="/ContectUs"><i className="fa fa-phone" aria-hidden="true"></i>צור קשר</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Header