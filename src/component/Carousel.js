import React from "react";


function Carousel(props) {




    return (
        <div>

            <div id={props.carouselId} class="carousel slide">
                <div class="carousel-inner container">
                    <div class="carousel-item active">
                        {props.carouselItemActiv}

                    </div>
                    <div class="carousel-item">
                    {props.carouselItem}
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target={`#${props.carouselId}`} data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target={`#${props.carouselId}`} data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    );


}

export default Carousel;




