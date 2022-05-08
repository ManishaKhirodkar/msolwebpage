import React from 'react';
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <div>
    <div className="header">
      <div className="container">
        <div className="item">
          <div className="row">
            <div className="col-2"><i className="fas fa-phone-alt icon" />(+91) 9926897955</div>
            <div className="col-3"><i className="fa fa-envelope fa-x icon" /><a href="mailto:info@msoltechnology.com">info@msoltechnology.com</a></div>
            <div className="col-7">
              <a href="https://www.facebook.com/MSolTechnologiesltd/"><i className="bi bi-facebook icon1" /></a>
              <a href="https://twitter.com/MSolTechnologi2"><i className="bi bi-twitter icon1" /></a>
              <a href="https://www.linkedin.com/company/msol-technologies-pvt-ltd"><i className="bi bi-linkedin icon1" /></a>
              <a href="https://join.skype.com/XjFcO7sxi4LV"><i className="bi bi-skype icon1" /></a>
              <a href="https://www.instagram.com/msoltechnologiespvt.ltd/?igshid=5fv8qat9b7iu"><i className="bi bi-instagram icon1" /></a>
              <a href="https://wa.me/919926897955"><i className="bi bi-whatsapp icon1" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav className="navbar navbar-expand-sm sticky-top" style={{backgroundColor: 'white'}}>
      <div className="container">
        <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
        <div className="color-me">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="Home.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="services.html">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="porfolio.html">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Career</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  );
}
