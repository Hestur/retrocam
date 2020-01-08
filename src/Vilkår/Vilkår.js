import React, { Component } from 'react';
import pic1 from '../assets/Slideshow billeder/smadret-kamerazoom.jpg'
import './Vilkår.css';


class Vilkår extends Component {

    render() { 
        return ( <div className="gridlayout">
                <div className="middle">

<img className="hero" src={pic1} alt=""/>

<div className="vilkårcontent" style={{backgroundColor: 'white', padding: 20}}>
<h1 style={{paddingBottom: 20}}>Vilkår og betingelser</h1>

<p>Køb af brugte produkter er ikke underlagt dansk lovgivning omkring produktgaranti. RetroCam giver dog 1 års garanti fra købsdato på alle brugte kameraer.</p>

<p className="bold">Der gives ikke garanti for købt tilbehør, film og andet.</p>

<p>Ved tvivlsspørgsmål er du velkommen til at kontakte os.</p>

<p>Udfyld i så fald formularen på vores <a href="/kontakt">kontaktside</a>.</p>
</div>


















                </div>

        </div> );
    }
}
 
export default Vilkår;