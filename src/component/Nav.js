import React from "react";


function Nav() {

    return (

        <div>

            <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Patisserie</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="cakes">עוגות</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/pastries">מאפים</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#section-contact-us">צור קשר</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    הזמנות
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">ימי הולדת</a></li>
                                    <li><a class="dropdown-item" href="#">Take away</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>


        </div>


    );
}

export default Nav;

