import React from "react";
import Card from "./Card";
import Carousel from "../Carousel";
import { carouselCakes } from "../../Data";



function Cakes() {

    const { firstRow, secondeRow } = carouselCakes;

    const cardList1 = Object.values(firstRow).map(item =>
       <a href={`cakes/${item.name}`}>
        <Card
            key={item.id}
            cardTitle={item.title}
            cardContent={item.content}
            cardImage={item.img}
        />
        </a>
    );
    const cardList2 = Object.values(secondeRow).map(item =>

        <a href={`cakes/${item.name}`}>
        <Card
            key={item.id}
            cardTitle={item.title}
            cardContent={item.content}
            cardImage={item.img}
        />
        </a>
    );

    return (
        <div>

            <div className="section sectionCakes">
                <a href="cakes">
                    <h1>עוגות</h1>
                </a>

                <Carousel
                    carouselItemActiv={
                        <div className="cakesRow">
                            {cardList1}
                        </div>

                    }
                    carouselItem={
                        <div className="cakesRow">
                            {cardList2}
                        </div>
                    }

                    carouselId="carouselCakes"
                />

            </div>
        </div>
    );


}

export default Cakes;



