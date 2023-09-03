import React from "react";

function HomePageFeed() {
    return (
        <div id="feedContainer">
            <div id="feedColumn">
                <div className="imageContainer">
                    <img src="../images/img10.jpeg" alt="" className="image" onclick="ShowImage(this)" />
                </div>
                <div className="imageContainer">
                    <img src="../images/img8.jpeg" alt="" className="image" onclick="ShowImage(this)" />
                </div>
            </div>
            <div id="feedColumn">
                <div className="imageContainer">
                    <img src="../images/img5.jpeg" alt="" className="image" onclick="ShowImage(this)" />
                </div>
                <div className="imageContainer">
                    <img src="../images/img11.jpeg" alt="" className="image" onclick="ShowImage(this)" />
                </div>
                <div className="imageContainer">
                    <img src="../images/img8.jpeg" alt="" className="image" onclick="ShowImage(this)" />
                </div>
            </div>
            <div id="feedColumn">
                <div className="imageContainer">
                    <img src="../images/img8.jpeg" alt="" className="image" onclick="ShowImage(this)" />
                </div>
                <div className="imageContainer">
                    <img src="../images/img6.jpeg" alt="" className="image" onclick="ShowImage(this)" />
                </div>
            </div>
        </div>
    );
}

export default HomePageFeed;
