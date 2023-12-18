import React from "react";
import CustomCarousel from "../CustomCarousel";



function Pastries(props) {



    return (



        <div>
            <div className="section sectionPastries container">
                <a href="pastries">
                    <h1>מאפים</h1>
                </a>

                <CustomCarousel subject="pastries" />


            </div>
        </div>

    );

}

export default Pastries;




