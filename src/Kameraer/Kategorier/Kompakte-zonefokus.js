import React, { Component } from 'react';
import model from '../../assets/Diverse/Billeder der kan bruges i tekster/filmkassette.jpg';
import cam1 from '../../assets/Produktbilleder/olympus trip 35.jpg';
import cam2 from '../../assets/Produktbilleder/olympus mju.jpg';
import cam3 from '../../assets/Produktbilleder/leica m3.jpg';
import { Link } from "react-router-dom";


class KompakteZonefokus extends Component {
    render() { 
        return ( <div className="gridlayout">
        <div className="middle">

        <div className="content">
           <Link style={{ textDecoration: "underline" }} to="/">
              da
            </Link>
            <p className="inline"> / </p>
            <Link to="/kameraer" className="inline" style={{ textDecoration: "underline" }}>
              Kameraer
            </Link>
            <p className="inline"> / </p>
            <p className="inline">
              Kompakte og Zonefokus
            </p>

        <h1 style={{paddingTop: 20, paddingBottom: 20}}>Brugte Kompakte Kamera og Zonefokus </h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <p className="italic">Her er lidt grafik der viser en gammeldavs filmrulle:</p>

        <img src={model} style={{width: 500}} alt=""/>


        <div className="line"></div>

        <p className="Title">Vores 3 nyeste kameraer:</p>
<div className="produkter">
    <div>
        <img src={cam1} alt=""/>
        <p className="Title">Canon AE-1</p>
        <p className="pris">Pris: DKK 800,-</p>
    </div>


    <div>
        <img src={cam2} alt=""/>
        <p className="Title">Pentax LX</p>
        <p className="pris">Pris: DKK 2.500,-</p>
    </div>

    <div>
        <img src={cam3} alt=""/>
        <p className="Title">Pentax KX</p>
        <p className="pris">Pris: DKK 650,-</p>
    </div>


</div>



          </div>

            
        </div>
    </div> );
    }
}
 
export default KompakteZonefokus;