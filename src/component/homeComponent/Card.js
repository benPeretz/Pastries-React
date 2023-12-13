import React from "react";

// public\img\first-cake.jpg
function Card(props) {

    return (
        <div>

            <div class="card text-center ">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src={props.cardImage} class="img-fluid" />
                    <a href="#!">
                        <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15"}}></div>
                    </a>
                </div>

                <div class="card-body">
                    <h5 class="card-title">{props.cardTitle}</h5>
                    <p class="card-text">{props.cardContent} </p>


                </div>
            </div>

        </div>
    );



}

export default Card;
