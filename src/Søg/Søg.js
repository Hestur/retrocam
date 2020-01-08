import React, { Component } from 'react';
import pic from '../assets/Slideshow billeder/search.jpg';
import './Søg.css';
import '../Film/Film.css';



class Søg extends Component {
    render() { 
        return ( <div className="gridlayout">
        <div className="middle">
            

            <img className="heroimg" src={pic} alt=""/>

            <div className="søgcontent">

            <h1 style={{paddingTop: 20, paddingBottom: 20}}>Din søgning på <h1 className="inline" style={{color: 'turquoise'}}>pentax</h1></h1>
            
            <p className="bold">Gav 2 resultater:</p>

            <ul><li><p className="url">Pentax LX</p></li>
            <li><p className="url">Pentax KX</p></li></ul>
            
            
            
            
            
            
            
            
            </div>
            
            
            
            
            
            
            
            
            
            
            </div></div> );
    }
}
 
export default Søg;