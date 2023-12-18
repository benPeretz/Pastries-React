import React from "react";


function Card(props) {

    return (
        <a href={props.href}>
        <div>

            <div class="card text-center ">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src={props.cardImage} alt="..." class="product--image" />
                    <a href={props.href} >
                        <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>

                <div class="card-body">
                    <h5 class="card-title">{props.cardTitle}</h5>
                    <p class="card-text">{props.cardContent} </p>


                </div>
            </div>

        </div>
        </a>
    );



}

export default Card;
