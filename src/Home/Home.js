import React, { Component } from 'react';
import './Home.css';
import BasicSlider from '../Silder/Slide';
import cam1 from '../assets/Produktbilleder/pentax lx.jpg'
import pro1 from '../assets/Produktbilleder/Rollei Vario Chrome.jpg'
import pro2 from '../assets/Produktbilleder/Fujichrome Velvia 100.jpg'
import pro3 from '../assets/Produktbilleder/Pentax KX.jpg'
import pro4 from '../assets/Produktbilleder/olympus mju.jpg'

class Home extends Component {
    render() { 
        return ( <div className="gridlayout">
            <div className="middle">   
     <BasicSlider/>

     <div className="homespot">
        
        <h1>Full frame til spotpriser!</h1>

        <h3>Brugte analoge kameraer og tilbehør</h3>

        <p>Med et analogt kamera får du full-frame billeder til meget billige priser.</p>

<p>Samtidig oplever du en helt anden stemning når du tager billeder, både ved<br/> håndteringen af et analogt kamera, men også ved de færdige billeder.</p>

<p>Et billede skannet fra et negativ i dag, vil om 10år sikkert kunne skannes i en<br/> endnu højere opløsning og kvalitet.</p>

<h3>Vi har sikkert det rigtige analoge kamera til dig</h3>

<p>Kameraer fås i mange varianter, lige fra spejlrefleks-kameraet til point-and-shoot kameraet. Du finder nemt ét der passer til dit humør. <br/> Og samtidig er de så billige, at du sagtens kan købe flere!</p>

     

<div className="feature">
        <p className="bold">Se f.eks. dette kamera:</p>

        <div className="box">
            <div className="fokus"><p>I FOKUS:</p></div>
            <img src={cam1} alt=""/>
            <div className="right">
            <p className="Title">Pentax LX</p>
            <p className="desc">Professionelt spejlrefleks med tidernes bedste lysmåler</p>

            <p className="pris" style={{display: 'inline', lineHeight: 5}}>Pris: DKK 2499.98</p>
                <br/>
            <a className="link" href="Pentax-LX">Klik her for yderligere information...</a>
            </div>
        </div>
        <p>Hvis ovenstående model ikke falder i din smag, kan du finde andre brugte analoge kamera ved at <a href="kameraer">klikke her</a>, eller film til kameret ved at <a href="film">klikke her</a>.</p>

<div className="line"></div>

<p className="mid">Vores 4 nyeste produkter:</p>

<div className="produkter">
    <div>
        <img src={pro1} alt=""/>
        <p className="Title">Rollei Vario Chrome <br/> Limited Edition</p>
        <p>Vario Chrome, naturlige farver <br/> til konkurrencedygtig pris</p>
        <p className="pris2">Pris: DKK 72.50</p>
    </div>


    <div>
        <img src={pro2} alt=""/>
        <p className="Title">Fujichrome Velvia 100</p>
        <p>Diafilm til dagslys, ISO 100</p>
        <p className="pris2">Pris: DKK 85.00</p>
    </div>

    <div>
        <img src={pro3} alt=""/>
        <p className="Title">Pentax KX</p>
        <p>Robust spejlrefleks fra Pentax, til den erfarene fotograf</p>
        <p className="pris2">Pris: DKK 6500.00</p>
    </div>

    <div>
        <img src={pro4} alt=""/>
        <p className="Title">Olympus Mju-II</p>
        <p>Lille kavlitetskamera med integreret objektivdæksel</p>
        <p className="pris2">Pris: DKK 60.00</p>
    </div>
</div>

</div>
</div>

            </div>
        </div> );
    }
}
 
export default Home;