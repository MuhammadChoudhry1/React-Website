import React from 'react';
import './App.css';
import Header from "./Website/pages/Header";
import Footer from "./Website/pages/Footer";
import SPage from "./Website/pages/SPage";
import Homepage from "./Website/pages/Homepage";
import Brands from './Website/pages/Brands';
import Trousers from './Website/pages/trousers';
import T_shirts from './Website/pages/t_shirts';
import Polo_shirts from './Website/pages/polo_shirts';
import Jackets from "./Website/pages/jackets";
import Foot_wear from "./Website/pages/foot_wear";
import BYO from './Website/pages/BYO';
import footerPage1 from './Website/pages/footerPage1';
import footerPage2 from './Website/pages/footerPage2';
import footerPage3 from './Website/pages/footerPage3';
import footerPage4 from './Website/pages/footerPage4';
import footerPage5 from './Website/pages/footerPage5';
import footerPage6 from './Website/pages/footerPage6';
import footerPage7 from './Website/pages/footerPage7';
import footerPage8 from './Website/pages/footerPage8';
import footerPage9 from './Website/pages/footerPage9';
import footerPage10 from './Website/pages/footerPage10';
import footerPage11 from './Website/pages/footerPage11';
import footerPage12 from './Website/pages/footerPage12';
import footerPage13 from './Website/pages/footerPage13';
import footerPage14 from './Website/pages/footerPage14';
import footerPage15 from './Website/pages/footerPage15';
import buyPage from './Website/pages/buyPage';
import { cart } from "./Website/cart/cart";
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // Import BrowserRouter, Route, and Switch

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/HomePage" exact component={Homepage} />
        <Route path="/brands" component={Brands} />
        <Route path="/trousers" component={Trousers} />
        <Route path="/t_shirts" component={T_shirts} />
        <Route path="/polo_shirts" component={Polo_shirts} />
        <Route path="/SPage" component={SPage} />
        <Route path="/Jackets" component={Jackets} />
        <Route path="/Foot_wear" component={Foot_wear} />
        <Route path="/BYO" component={BYO} />
        <Route path="/footerPage1" component={footerPage1} />
        <Route path="/footerPage2" component={footerPage2} />
        <Route path="/footerPage3" component={footerPage3} />
        <Route path="/footerPage4" component={footerPage4} />
        <Route path="/footerPage5" component={footerPage5} />
        <Route path="/footerPage6" component={footerPage6} />
        <Route path="/footerPage7" component={footerPage7} />
        <Route path="/footerPage8" component={footerPage8} />
        <Route path="/footerPage9" component={footerPage9} />
        <Route path="/footerPage10" component={footerPage10} />
        <Route path="/footerPage11" component={footerPage11} />
        <Route path="/footerPage12" component={footerPage12} />
        <Route path="/footerPage13" component={footerPage13} />
        <Route path="/footerPage14" component={footerPage14} />
        <Route path="/footerPage15" component={footerPage15} />
        <Route path="/buyPage" component={buyPage} />
        <Route path="/cart" element={<cart />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;