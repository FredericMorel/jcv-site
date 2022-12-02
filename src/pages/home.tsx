import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ApiGetAllCategories } from "../api/apiRequest";
import Api from "../api/conf";
import { apiCategories } from "../interface";





export default function Home() {
    const [loading, setLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<apiCategories[]>([]);


    useEffect(() => {
        ApiGetAllCategories().then((data: apiCategories[]) => {
            setCategories(data);
            setLoading(false);

        })

    }, []);





    return (

        <div className="home" >
            <section className="home__hero">
                <span className="homeHero__filter">
                    <h1 className="homeHero__title" >JCV CONSULT</h1>

                    <p className="homeHero__text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dignissim sit tincidunt non. Laoreet at nibh elit, ridiculus ultrices pellentesque tincidunt ut nunc.</p>
                </span>



            </section>

            <section className="home__about">
                <div className="homeAbout__content" >
                    <h2>JCV Consulting</h2>
                    <span>Lorem ipsum dolor sit amet consectetur.</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Faucibus vitae ornare eu mattis pellentesque morbi et duis condimentum. Sollicitudin risus enim felis nunc vitae. Hac molestie feugiat ipsum faucibus tempor vulputate eu. Ac sed interdum cursus proin.
                    </p>
                    <img src={require('../img/About-pic.png')} alt="Apropos image représentation" />

                </div>

                <Link type="button" to={'/About'}>En savoir plus</Link >

            </section>


            <section className="home__products">

                <h3 className="homeProducts__title">Catégorie de produits</h3>
                <p className="homeProducts__text">Lorem ipsum dolor sit amet consectetur.</p>
                {loading === true ? <p>Chargement...</p> : categories.map((category: apiCategories) => {
                    return (
                        <Link key={category.id} className="card" to={'/products/' + category.id} >
                            <div className="card__image" style={{
                                backgroundImage: `url(${Api.url + category.attributes.pic.data.attributes.url
                                    })`
                            }}
                            > </div>

                            <h4 className="card__title">{category.attributes.name}</h4
                            >
                            <button className="card__button">Voir Produit</button>
                        </Link>
                    )
                })}



            </section>



        </div>
    );

}








