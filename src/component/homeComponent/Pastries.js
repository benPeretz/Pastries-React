import React from "react";
import Card from "./Card";
import Carousel from "../Carousel";
import { carouselPastries } from "../../Data";


function Pastries(props) {

    
    const orangePastries = "./img/pateries-orang.jpg"
    const cheesePastries = "./img/pastries-corason.jpg"
    const potatoPastries = "./img/pastries-corason2.jpg"

    const { firstRow, secondeRow } = carouselPastries;
    console.log("================carouselPastries=================");
    console.log(carouselPastries);
    console.log("==============firstRow===================");
    console.log(firstRow);
    console.log("==============secondRow===================");
    console.log(secondeRow);








    const cardList1 = Object.values(firstRow).map(item =>
        <Card
            key={item.id}
            cardTitle={item.title}
            cardContent={item.content}
            cardImage={item.Img}
        />
    );
    const cardList2 = Object.values(secondeRow).map(item =>
        <Card
            key={item.id}
            cardTitle={item.title}
            cardContent={item.content}
            cardImage={item.Img}
        />
    );




    return (
        <div>
            <div className="section sectionPastries">
                <a href="s">
                    <h1>מאפים</h1>
                </a>


                {/* 
                <div id="carouselPastries" class="carousel slide">
                    <div class="carousel-inner container">
                        <div class="carousel-item active">
                        <div className="cakesRow">
                                <Card
                                    cardTitle="מאפה ריבה"
                                    cardContent="עוגת ריבה משהו טוב חבל על הזמן "
                                    cardImage={orangePastries}
                                />
                                <Card
                                    cardTitle="עוגת גבינה"
                                    cardContent="עוגת גבינה משהו טוב חבל על הזמן "
                                    cardImage={cheesePastries}
                                />
                                <Card
                                    cardTitle="עוגת פירות"
                                    cardContent="עוגת פירות משהו טוב חבל על הזמן "
                                    cardImage={potatoPastries}
                                />
                                <Card
                                    cardTitle="עוגת גבינה"
                                    cardContent="עוגת גבינה משהו טוב חבל על הזמן "
                                    cardImage={cheesePastries}
                                />

                            </div>

                        </div>
                        <div class="carousel-item">
                            <div className="cakesRow">
                                <Card
                                    cardTitle="עוגת ריבה"
                                    cardContent="עוגת ריבה משהו טוב חבל על הזמן "
                                    cardImage={potatoPastries}
                                />
                                <Card
                                    cardTitle="עוגת גבינה"
                                    cardContent="עוגת גבינה משהו טוב חבל על הזמן "
                                    cardImage={cheesePastries}
                                />
                                <Card
                                    cardTitle="עוגת פירות"
                                    cardContent="עוגת פירות משהו טוב חבל על הזמן "
                                    cardImage={orangePastries} />
                                <Card
                                    cardTitle="עוגת גבינה"
                                    cardContent="עוגת גבינה משהו טוב חבל על הזמן "
                                    cardImage={cheesePastries}
                                />


                            </div>
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselPastries" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselPastries" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> */}


                <Carousel
                    carouselItemActiv={
                        <div className="cakesRow">
                            {/* <Card
                                    cardTitle="מאפה ריבה"
                                    cardContent="עוגת ריבה משהו טוב חבל על הזמן "
                                    cardImage={orangePastries}
                                />
                                <Card
                                    cardTitle="עוגת גבינה"
                                    cardContent="עוגת גבינה משהו טוב חבל על הזמן "
                                    cardImage={cheesePastries}
                                />
                                <Card
                                    cardTitle="עוגת פירות"
                                    cardContent="עוגת פירות משהו טוב חבל על הזמן "
                                    cardImage={potatoPastries}
                                />
                                <Card
                                    cardTitle="עוגת גבינה"
                                    cardContent="עוגת גבינה משהו טוב חבל על הזמן "
                                    cardImage={cheesePastries}
                                /> */}
                            {cardList1}


                        </div>

                    }
                    carouselItem={
                        <div className="cakesRow">

                            {cardList2}
                        </div>
                    }

                    carouselId="carouselPastries"
                />




            </div>
        </div>
    );

}

export default Pastries;




