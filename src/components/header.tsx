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
                    <li className="NavList_li" >
                        <Link className="listLi_a" to="/">Accueil</Link>
                    </li>
                    <span className="headerNavList_span">Services  <img className="listSpan__img" src={require('../img/list-icon.png')} alt="" width="25px" height="25px"/></span>
                    <ul className="headerNavList_ul">
                        <li>Chauffe-eau</li>
                        <li className="listUl_li--margin-left">Photovoltaïque</li>
                        <li className="listUl_li--margin-left">Sécurité</li>
                    </ul>
                    <li className="headerNavList_contact">
                        <Link className="listContact_a" to="/contact">Demander un devis</Link>
                    </li>
                </ul>
            </nav>
            <span className="header__phone">0262&nbsp;01 &nbsp;02&nbsp;03</span>
            
        </header>
    );
}


