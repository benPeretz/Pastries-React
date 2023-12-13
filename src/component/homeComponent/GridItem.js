import React from "react";


function GridItem(props) {

    const linearDarkImage = "linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50))"

    return (



        <a href="/s" className={`${props.class}`}>
            <div className="gridItem" style={{ background: `${linearDarkImage},url(${props.img}) center/cover` }}>
                <h4>{props.title} </h4>
            </div>
        </a>

    );


}

export default GridItem;


