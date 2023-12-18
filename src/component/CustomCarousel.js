import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { allProducts } from "../Data";

function CustomCarousel(props) {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        desktop2: {
            breakpoint: { max: 3000, min: 1200 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1200, min: 800 },
            items: 3
        },
        tablet2: {
            breakpoint: { max: 800, min: 500 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1
        }
    };

    const { subject } = props;
    const subjectList = allProducts[subject];



    const cardList3 = Object.values(subjectList).map(item =>

        // href={`cakes/${item.name}`}

        <a href={`${subject}/${item.name}`} key={item.id}>
            <div className="cardd">
                <img className="product--image" src={item.img} alt="product image" />

                <p className="cardd-title">{item.title}</p>
                <p>{item.content}</p>

            </div>
        </a>
    

    );


    return (

        <Carousel responsive={responsive}>

            {cardList3}

        </Carousel>

    );


}

export default CustomCarousel;




