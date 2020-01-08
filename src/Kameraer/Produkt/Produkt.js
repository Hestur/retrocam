import React, { Component } from "react";
import "../Kategorier/Kategorier.css";
import "./Produkt.css";
import { Link } from "react-router-dom";
import pic from '../../assets/Produktbilleder/pentax lx.jpg'

import pic1 from '../../assets/Galleri billeder/dias.jpg';
import pic2 from '../../assets/Galleri billeder/castle.jpg';
import pic3 from '../../assets/Galleri billeder/negativ.jpg';
import pic4 from '../../assets/Galleri billeder/film.jpg';


class Produkt extends Component {
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
            <Link to="spejlrefleks" className="inline" style={{ textDecoration: "underline" }}>
              {" "}
              Brugte spejlrefleks
            </Link>
            <p className="inline"> / </p>
            <p className="inline">Pentax LX</p>


            <img src={pic} className="img" style={{width: 500, display: 'block'}} alt=""/>

            <h1>Pentax LX</h1>


<div className="flex">
            <p className="pris">Pris: DKK 650.00</p>
            <div className="køb">KØB</div>
            </div>
            <p>Pentax LX er en del af LX-serien (super LX, MXL, XXXL) og et et populært kamera på grund af alle de gode features.</p>

            <p>Sælges inkl. 50mm 2.0 objektiv.</p>

            <p className="Title">Billeder taget med LX</p>

            <div className="galleri">
                <div className="bo2">
                <img src={pic1} alt=""/></div>
                <div className="box2">
                <img src={pic2} alt=""/></div>
                <div className="box2">
                <img src={pic3} alt=""/></div>
                <div className="box2">
                <img src={pic4} alt=""/></div>
            </div>

            <div className="produktinfo">
                <p>Produkt ID</p>
                <p className="bold">1115</p>
                <p>Mærke</p>
                <p className="bold">Asahi Pentax</p>
                <p>Model/type</p>
                <p className="bold">LX</p>
                <p>Vejl.pris</p>
                <p className="bold">DKK 650.00</p>
                <p>Lagerstatus</p>
                <p className="bold">På lager (100 stk)</p>


            </div>










          </div>







        </div>
      </div>
    );
  }
}

export default Produkt;
