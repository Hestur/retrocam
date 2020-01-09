import React, { Component } from 'react';
import pic1 from '../assets/Slideshow billeder/contact.jpg';
import './Kontakt.css';


class Kontakt extends Component {
    render() { 
        return ( <div className="gridlayout">

<div className="middle">
<img className="hero" src={pic1} alt=""/>

<div className="kontaktcontent" style={{backgroundColor: 'white', padding: 20}}>

        <h1 style={{paddingBottom: 20}}>Kontakt os</h1>

        <p>Du er velkommen til at kontakte os, hvis du har spørgsmål til vores hjemmeside eller til et af vores produkter.</p>

        <p style={{paddingBottom: 20}}>Udfyld blot formularen herunder, eller skriv en mail ved at klikke her:</p>

        <div className="formdiv">
        <form>
	<fieldset>
	<label for="name">NAVN</label><br /> 
	<input className="inputform" name="name" type="text"/> <br /> 

    <label for="email">EMAIL</label><br /> 
	<input className="inputform" name="email" type="text"/> <br /> 

    <label for="age">ALDER</label><br /> 
	<input className="inputform" name="age" type="text" /> <br /> 


    <label for="age">BESKED</label><br />
	<textarea className="inputform" cols="30" rows="5"></textarea><br /> 
	
	<button type="submit" value="Submit">Send</button>
	</fieldset>
</form>
        </div>




        <p style={{paddingTop: 20}}>Når du sender os en mail, så svarer vi tilbage hurtigst muligt.</p>

</div>














</div>
        </div> );
    }
}
 
export default Kontakt;