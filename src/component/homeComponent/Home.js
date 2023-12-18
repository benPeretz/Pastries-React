import React from "react";
import SectionTop from "./SectionTop";
import Cakes from "./Cakes";
import Pastries from "./Pastries";
import Footer from "../Footer";
import Tasty from "./Tasty";


function Home() {


    return (
        <div>

            <SectionTop />
            <Cakes />
            <hr />
            <Pastries />
            <hr />

            <Tasty />
            <hr />
            <Footer />


        </div>
    );
}

export default Home;






