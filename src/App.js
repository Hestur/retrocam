import React from 'react';
import Header from './Header/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Film from './Film/Film';
import Kameraer from './Kameraer/Kameraer';
import Kontakt from './Kontakt/Kontakt';
import Vilkår from './Vilkår/Vilkår';
import KompakteZonefokus from './Kameraer/Kategorier/Kompakte-zonefokus';
import Spejlrefleks from './Kameraer/Kategorier/Brugte-spejlrefleks';
import Rangefinders from './Kameraer/Kategorier/Brugte-rangefinders';
import Produkt from './Kameraer/Produkt/Produkt';
import Søg from './Søg/Søg';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Header/>

<Route exact path="/" component={Home}/>
<Route path="/film" component={Film}/>
 <Route path="/kameraer" component={Kameraer}/>
 <Route path="/spejlrefleks" component={Spejlrefleks}/>
 <Route path="/rangefinders" component={Rangefinders}/>
 <Route path="/kompakt-zonefokus" component={KompakteZonefokus}/>
 <Route path="/Pentax-LX" component={Produkt} />
<Route path="/kontakt" component={Kontakt}/>
<Route path="/vilkår" component={Vilkår}/>
<Route path="/søg" component={Søg}/> 

<Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
