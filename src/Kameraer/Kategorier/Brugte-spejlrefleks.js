import React, { Component } from "react";
import "./Kategorier.css";
import cam1 from '../../assets/Produktbilleder/canon-ae-1.jpg';
import cam2 from '../../assets/Produktbilleder/pentax lx.jpg';
import cam3 from '../../assets/Produktbilleder/Pentax KX.jpg';
import model from '../../assets/Diverse/Billeder der kan bruges i tekster/slr funktion.gif';
import { Link } from "react-router-dom";




class Spejlrefleks extends Component {
  render() {
    return (
      <div className="gridlayout">
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
              Brugte spejlrefleks
            </p>

        <h1 style={{paddingTop: 20, paddingBottom: 20}}>Brugte spejlrefleks</h1>

        <p>Spejlrefleks-kameraet er nok det de fleste kender til i dag. Med et spejlrefleks-kamera kommer lyset igennem objektivet og sendes via et spejl og et prisme til søgeren. Det betyder at fotografen ser næsten samme billedudsnit, som det der rammer filmen når spejlet lukkes op.</p>

        <p className="italic">Her er lidt grafik der viser spejlreflekskameraets principper:</p>

        <img src={model} alt=""/>


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
      </div>
    );
  }
}

export default Spejlrefleks;
