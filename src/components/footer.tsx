import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
export default function Footer() {
    return (
        <footer className="footer">


            <div>
                <img src={require('../img/logo-jcv.png')} alt="" />
                <div>
                    <span>Liens rapide</span>
                    <span>Accueil</span>
                    <span>Produits</span>
                    <span>Devis</span>
                </div>
                <div>
                    <span>Thèmes</span>
                    <span>Ecologie</span>
                    <span>Sécurité</span>
                    <span>Lorem</span>
                    <span>Lorem</span>
                </div>
                <div>
                    <span>Information</span>
                    <span>06 92 01 02 03</span>
                    <span>JCV@gmail.com</span>
                    <span>La reunion 97410</span>
                </div>
                <div>
                    <span className="followMe">Suivez moi</span>
                    <img src={require('../img/logo-facebook.png')} alt="logo de facebook" />
                </div>
            </div>
            <section>
                <span>
                    <img src={require('../img/logo_region.png')} alt="" />
                    <img src={require('../img/europe.png')} alt="" />
                </span>
                <span className="copyright">
                    Copyright JCV Consulting 2022
                </span>
                <div>
                    <span> Thème</span>
                    <img className="btn__light" src={require('../img/light-theme-btn.png')} alt="bouton thème clair" />
                    <img className="btn__dark"  src={require('../img/dark-theme-btn.png')} alt="bouton thème sombre" />
                </div>
                
            </section>
        </footer>
    );
}
