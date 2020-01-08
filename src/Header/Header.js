import React, { Component } from 'react';
import logo from '../assets/Diverse/retrocam-logo.png';
import søg from '../assets/Diverse/søg.png';
import home from '../assets/Diverse/white-house.svg';
import './Header.css';
import { Link } from "react-router-dom";
class Header extends Component {

    render() { 
        return ( <div className="gridlayout">
            <div className="middle">
                <div className="top">
            <img src={logo} alt=""/>
<div className="søg"> 
            <input type="text" defaultValue="Find kamera/film"/><Link to="Søg"><img src={søg} style={{background: 'teal'}} alt=""/></Link>
            </div>
            </div>

            <div className="navbaren">
            <nav className="navbar-default">
  <div className="container-fluid">

    <ul className="nav navbar-nav">
      <li><Link to="/"><img src={home} alt="" style={{minWidth: 30, height:25}}/></Link></li>
      <li><Link to="/kameraer" className="list-item">
                  KAMERAER
                </Link></li>
             <li><Link to="/film" className="list-item">
                  FILM
                </Link></li>
               <li> <Link to="/kontakt" className="list-item">
                  KONTAKT OS
                </Link></li>
              <li>  <Link to="/vilkår" className="list-item">
                  VILKÅR & BETINGELSER
                </Link></li>
    </ul>
    
  </div>
</nav>
</div>
            </div>
        </div> );
    }
}
 
export default Header;