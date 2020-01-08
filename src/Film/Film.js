import React, { Component } from 'react';
import img from '../assets/Slideshow billeder/filmstrip.jpg';
import './Film.css';

import pro1 from '../assets/Produktbilleder/Rollei Vario Chrome.jpg'
import pro2 from '../assets/Produktbilleder/Fujichrome Velvia 100.jpg'


class Film extends Component {
    render() { 
        return ( <div className="gridlayout">
        
        <div className="middle">


            <img src={img} className="heroimg" alt=""/>


<div className="filmcontent"  style={{padding: 20}}>
            <a className="link2" style={{textDecoration: "underline"}} href="google.com">da</a><p style={{display: "inline"}}> / Film</p>

            <h1 style={{marginBottom: 20}}>Film</h1>

            <p style={{marginBottom: 20}}>Dit kamera skal bruge film. På RetroCam fås to slags film: Diafilm (Positiv film) og negativ film.</p>

            <p style={{marginBottom: 20}}>Det mest almindelige er negativ film, og fås i mange varianter. Positiv film (dia-film) giver bedst billedkvalitet hvad angår korn og farver, men kan være vanskeligere at eksponere korrekt. De er desuden dyrere, og kræver en anden fremkaldelsesproces.</p>

            <p style={{fontWeight: "bold", fontSize: 18}}>Klik på en kategori:</p>

            <ul><li><a className="link" href="film">Positiv film (dias) (2 produkter)</a></li></ul>
            

            <div className="line"></div>

            <p className="Title">Vores 2 nyeste film:</p>
            
            <div className="produkter">
    <div>
        <img src={pro1} alt=""/>
        <p className="Title">Rollei Vario Chrome <br/> Limited Edition</p>
        <p>Vario Chrome, naturlige farver <br/> til konkurrencedygtig pris</p>
        <p className="pris">Pris: DKK 72.50</p>
    </div>


    <div>
        <img src={pro2} alt=""/>
        <p className="Title">Fujichrome Velvia 100</p>
        <p>Diafilm til dagslys, ISO 100</p>
        <p className="pris">Pris: DKK 85.00</p>
    </div>

</div>






            </div>
            
            
            
            
            
            
            
            
            
            </div>
            
            </div> );
    }
}
 
export default Film;