import React from "react";




function Footer() {


    return (
        <div>

            <div class="footer text-center  bg-primary justify-content-center py-5 mt-5" >

                <div class="contact-us container" >


                    <h1 class=""> הדברים הטובים מתחילים כאן </h1>
                    <p>

                        לנשים בהריון מומלץ מאוד להימנע מטיפול מיקרובליידינג, הטיפול כולל פציעה של העור וקיים סיכון, גם אם הקלוש
                        ביותר להתפתחות של תגובה אלרגית או זיהום אשר ידרשו טיפול תרופתי. סיבה נוספת היא חוסר באיזון הורמונלי, דבר
                        היכול לפגוע בתוצאה הסופית.

                    </p>


                </div>


                <div id="section-contact-us" class="contact-us container mt-5">


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







