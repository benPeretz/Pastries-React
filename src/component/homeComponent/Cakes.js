import React from "react";
import CustomCarousel from "../CustomCarousel";

function Cakes() {

    return (
        <div>

            <div className="section sectionCakes container">
                <a href="cakes">
                    <h1>עוגות</h1>
                </a>

                <CustomCarousel subject="cakes" />

            </div>
        </div>
    );


}

export default Cakes;



