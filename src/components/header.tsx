import React, { useState } from "react";
import { Link } from "react-router-dom";





export default function Header() {


    return (
        <header className="header">
            <span className="header__burger">
                <img src={require('../img/burger.png')} alt="" width="28.19px" height="25.62px" />
            </span>
            <div className="header__logo">
                <img src={require('../img/logo-jcv.png')} alt=""/>
            </div>
            <nav className="header__nav">    
                <ul className="headerNav__list">
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <span>Service <img src={require('../img/list-icon.png')} alt="" width="25px" height="25px"/></span>
                    <ul>
                        <li>Chauffe-eau</li>
                        <li>Photovoltaïque</li>
                        <li>Sécurité</li>
                    </ul>
                    <li>
                        <Link to="/contact">Demander un devis</Link>
                    </li>
                </ul>
            </nav>
            <span className="header__phone">0262&nbsp;01 &nbsp;02&nbsp;03</span>
            
        </header>
    );
}


