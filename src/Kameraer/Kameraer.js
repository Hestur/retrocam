import React, { Component } from 'react';
import pro1 from '../assets/Produktbilleder/Pentax KX.jpg'
import pro2 from '../assets/Produktbilleder/olympus mju.jpg'
import pro3 from '../assets/Produktbilleder/olympus trip 35.jpg'
import pro4 from '../assets/Produktbilleder/leica m3.jpg'
import './Kameraer.css';
import { Link } from "react-router-dom";




class Kameraer extends Component {
    
    render() { 
        return ( <div className="gridlayout">
        <div className="middle">
            <div className="kameracontent" style={{backgroundColor: 'white'}}>
        <a className="link2" style={{textDecoration: "underline"}} href="google.com">da</a><p style={{display: "inline"}}> / Kameraer</p>

        <h1>Kameraer</h1>

        <p style={{paddingTop: 20, paddingBottom: 20}}>Her får du overblik over vores produktkategorier, hvor du finder mange forskellige ting til dit analoge kamera.</p>

        <p style={{fontWeight: "bold", fontSize: 18}}>Klik på en kategori:</p>

        <ul>
            <li><Link className="link" style={{textDecoration: "underline"}} to="spejlrefleks">Brugte spejlrefleks (3 produkter)</Link></li>
            <li><Link className="link" style={{textDecoration: "underline"}} to="rangefinders">Brugte rangefinders (1 produkt)</Link></li>
            <li><Link className="link" style={{textDecoration: "underline"}} to="kompakt-zonefokus">Kompakte og zonefokus (2 produkter)</Link></li>
        </ul>



        <div className="line"></div>

        <p className="Title">Vores 4 nyeste kameraer:</p>

        <div className="produkter">
            <div>
        <img src={pro1} alt=""/>
        <p className="Title">Pentax KX</p>
        <p>Robust spejlrefleks fra Pentax, til den erfarene fotograf</p>
        <p className="pris">Pris: DKK 650,-</p>
    </div>

    <div>
        <img src={pro2} alt=""/>
        <p className="Title">Olympus Mju-II</p>
        <p>Lille kavlitetskamera med integreret objektivdæksel</p>
        <p className="pris">Pris: DKK 60,-</p>
    </div>

    <div>
        <img src={pro3} alt=""/>
        <p className="Title">Olympus Trip 35</p>
        <p>Lille lommekamera med rigtig<br/>godt objektiv</p>
        <p className="pris">Pris: DKK 100,-</p>
    </div>


    <div>
        <img src={pro4} alt=""/>
        <p className="Title">Leica</p>
        <p>Af mange anset som verdens <br/> bedste kamera</p>
        <p className="pris">Pris: DKK 12.500,-</p>
    </div>

    

    
</div>





            
            
            
            
            
            
            
            
            
            
</div>
            </div>
            
            </div> );
    }
}
 
export default Kameraer;