import React from "react";
import Card from "./Card";
import Carousel from "../Carousel";
import { carouselPastries } from "../../Data";


function Pastries(props) {

    

    const { firstRow, secondeRow } = carouselPastries;
    console.log("================carouselPastries=================");
    console.log(carouselPastries);
    console.log("==============firstRow===================");
    console.log(firstRow);
    console.log("==============secondRow===================");
    console.log(secondeRow);

    const cardList1 = Object.values(firstRow).map(item =>
        <a href={`pastries/${item.name}`}>
        <Card
            key={item.id}
            cardTitle={item.title}
            cardContent={item.content}
            cardImage={item.img}
        />
        </a>
    );
    const cardList2 = Object.values(secondeRow).map(item =>
        <a href={`pastries/${item.name}`}>
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
            <div className="section sectionPastries">
                <a href="pastries">
                    <h1>מאפים</h1>
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

                    carouselId="carouselPastries"
                />


            </div>
        </div>
    );

}

export default Pastries;




