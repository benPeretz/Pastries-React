import React from "react";
import { allTopic, allProducts } from "../Data";
import Card from "./homeComponent/Card";
import Footer from "./Footer";


function SubjectProduct(props) {

    const topicName = props.subjectName;
    const topicObject = allTopic[topicName];// id name img
    const allProductsItems = allProducts[topicName]; //id name title img img2 content
    console.log(allProductsItems);



    const allProductsItemsList = Object.values(allProductsItems).map(item =>


        <div key={item.id} className="gridItem gridItemSubjectProduct"  >
            
            <a href={`${topicName}/${item.name}`}>
            <Card
                key={item.id}
                cardTitle={item.title}
                cardContent={item.content}
                cardImage={`.${item.img}`}
            />
            </a>
        </div>



    );






    const linearDarkImage = "linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50))"

    return (
        <div>

            <div className="subjectProduct container mb-5" >

                <div className="gridMainItemSubjectProduct gridItem " style={{ background: `${linearDarkImage},url(.${topicObject.img}) center/cover` }} >

                    <h4>{topicObject.name}</h4>
                </div>

                {allProductsItemsList}


            </div>
            <Footer />

        </div>
    );




}

export default SubjectProduct;



