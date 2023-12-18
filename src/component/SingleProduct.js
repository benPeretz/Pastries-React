import React from "react";
//import Carousel from "./CustomCarousel";
import Footer from "./Footer";
import { allProducts } from "../Data";
import SingleProductCarousel from "./homeComponent/SingleProductCarousel";

function SingleProduct(props) {

    const productName = props.productName; // cheese
    const productSubject = props.productSubject;//cakes

    const subjectList = allProducts[productSubject];
    const product = subjectList[productName];

    console.log(product);
    console.log(subjectList);



    return (
        <div>

            <div className="singleProduct container">

                <div className="singleProducFlex">

                    <div className="productCarouselImages">
                        <div className="align-self-center w-100">
                            <SingleProductCarousel
                                carouselId="carouselSingleProduct"
                                carouselItemActiv={
                                    <img src={`.${product.img}`} className="d-block w-100" alt="..." />//fix this - the path
                                }
                                carouselItem={
                                    <img src={`.${product.img}`} className="d-block w-100" alt="..."></img>

                                }

                            />
                        </div>

                    </div>

                    <div className="productContent">


                        <h1>{product.title}</h1>

                        <p>
                            עוגה משהו משהו שעשויה ממשהו ומשהו
                        </p>

                        <h5>{product.content}</h5>

                    </div>


                </div>


            </div>

            <hr />

            <Footer />

        </div>
    );


}


export default SingleProduct;


