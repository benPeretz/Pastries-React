import React from "react";
import GridItem from "./GridItem";


function Tasty() {


    const shakeImage = "./img/shake.jpg";
    const cookiesImage = "./img/cookies.jpg";
    const cateringImage = "./img/Catering.jpg";
    const breadImage = "./img/bread.jpg";
    const foodTraysImage = "./img/food-trays.jpg";
    const linearDarkImage = "linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50))"

    return (
        <div>

            <div className="container sectionTasty section">

                <h1>! הכי טעים</h1>

                <div className="grid">

                    <GridItem
                        title="לחמים"
                        img={breadImage}
                    />
                    <GridItem
                        title="עוגיות"
                        img={cookiesImage}
                    />
                    <GridItem
                        title="שייקים"
                        img={shakeImage}
                        class="gridItem3"
                    />
                    <GridItem
                        title="קייטרינג"
                        img={cateringImage}
                    />
                    <GridItem
                        title="מגשי אירוח"
                        img={foodTraysImage}
                    />





                </div>


            </div>

        </div>
    );


}

export default Tasty;




