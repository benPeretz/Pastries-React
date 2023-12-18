import React from "react";




function Footer() {


    return (
        <div>

            <div class="footer text-center  bg-primary justify-content-center py-5 mt-5" id="section-contact-us" >

                <div class="contact-us container" >


                    <h1 class=""> הדברים הטובים מתחילים כאן </h1>
                    <p>

                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>


                </div>


                <div  class="contact-us container mt-5">


                    <h1>ליצירת קשר</h1>


                    <div class="instegram">

                        <div class="row mt-3 ">
                            <div class="col-md-4">
                                <div class="card-body text-center">
                                    <a href="https://www.instagram.com/limorgurion/" target="_blank">
                                        <i class="fa-brands fa-instagram icons" style={{color:"#bd047a"}}></i>
                                    </a>
                                    <h4 >INSTEGRAM</h4>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card-body text-center">
                                    <i class="fa-solid fa-phone icons" style={{color:"#ffffff"}}></i>
                                    <h4>050-320-4629</h4>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card-body text-center">
                                    <i class="fa-brands fa-facebook icons" style={{color:"#7358ff"}}></i>
                                    <h4>FACEBOOK</h4>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>




            </div>


        </div>
    );
}

export default Footer;







