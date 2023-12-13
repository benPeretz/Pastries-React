import React from "react";
import Card from "./Card";



function Cakes() {

    const ribaCake = "./img/cake-3219851_1280.jpg";
    const cheeseCake = "./img/first-cake.jpg";
    const fruitCake = "./img/second-cake.jpg";

    return (
        <div>

            <div className="section sectionCakes">
            <a href="s">
                <h1>עוגות</h1>
                </a>




                <div id="carouselCakes" class="carousel slide">
                    <div class="carousel-inner container">
                        <div class="carousel-item active">
                            <div className="cakesRow">
                                <Card
                                    cardTitle="עוגת ריבה"
                                    cardContent="עוגת ריבה משהו טוב חבל על הזמן "
                                    cardImage={ribaCake}
                                />
                                <Card
                                    cardTitle="עוגת גבינה"
                                    cardContent="עוגת גבינה משהו טוב חבל על הזמן "
                                    cardImage={fruitCake}
                                />
                                <Card
                                    cardTitle="עוגת פירות"
                                    cardContent="עוגת פירות משהו טוב חבל על הזמן "
                                    cardImage={cheeseCake} />
                                <Card
                                    cardTitle="עוגת פירות"
                                    cardContent="עוגת פירות משהו טוב חבל על הזמן "
                                    cardImage={cheeseCake} />

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="cakesRow">
                                <Card
                                    cardTitle="עוגת ריבה"
                                    cardContent="עוגת ריבה משהו טוב חבל על הזמן "
                                    cardImage={ribaCake}
                                />
                                <Card
                                    cardTitle="עוגת גבינה"
                                    cardContent="עוגת גבינה משהו טוב חבל על הזמן "
                                    cardImage={fruitCake}
                                />
                                <Card
                                    cardTitle="עוגת פירות"
                                    cardContent="עוגת פירות משהו טוב חבל על הזמן "
                                    cardImage={cheeseCake} />
                                <Card
                                    cardTitle="עוגת גבינה"
                                    cardContent="עוגת גבינה משהו טוב חבל על הזמן "
                                    cardImage={fruitCake}
                                />

                            </div>
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselCakes" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselCakes" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>



            </div>
        </div>
    );


}

export default Cakes;



