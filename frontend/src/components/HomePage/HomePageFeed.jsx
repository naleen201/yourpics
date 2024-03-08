import {React,useState, useEffect} from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
function HomePageFeed() {
    const [images, setImages] = useState([]);
    const [items, setItems] = useState(Array.from({ length: 20 }));
    const fetchData = () => {
        axios.get(import.meta.env.VITE_API_URL + "/images", { withCredentials: true })
            .then((response) => {
                setImages(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        fetchData();
    }, []);

    const images1 = [];
    const images2 = [];
    const images3 = [];

    // Distribute the images across the columns
    images.forEach((image, index) => {
        switch (index % 3) {
            case 0:
                images1.push(image);
                break;
            case 1:
                images2.push(image);
                break;
            case 2:
                images3.push(image);
                break;
            default:
                break;
        }
    });

    

    return (
        <InfiniteScroll
            dataLength={images.length} //This is important field to render the next data
            next={fetchData}
            hasMore={false}
            scrollableTarget="root"
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }>
        <div id="feedContainer">
            
            <div id="feedColumn">
                {images1.map((image) => {
                    return (
                        <div id="imageContainer">
                            <img key={image._id} src={image.imageURL} alt="" className="image" onclick="ShowImage(this)" />
                            <div id="imageOverlay">
                                <a href={`/profile/${image.userId._id}`} id="imageDetails">{image.userId.username}</a>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div id="feedColumn">
                {images2.map((image) => {
                    return (
                        <div id="imageContainer">
                            <img key={image._id} src={image.imageURL} alt="" className="image" onclick="ShowImage(this)" />
                            <div id="imageOverlay">
                                <a href={`/profile/${image.userId._id}`} id="imageDetails">{image.userId}</a>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div id="feedColumn">
                {images3.map((image) => {
                    return (
                        <div id="imageContainer">
                            <img key={image._id} src={image.imageURL} alt="" className="image" onclick="ShowImage(this)" />
                            <div id="imageOverlay">
                                <a href={`/profile/${image.userId._id}`} id="imageDetails">{image.userId}</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        </InfiniteScroll>
    );
}

export default HomePageFeed;
