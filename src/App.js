import  { useState } from "react";
import { data } from "./data";
import './App.css';
import Carousel from "./carousel";


function App(){
        const [places, setPlaces] = useState(data);
    const [showText, setShowText] = useState(false);
    const removePlace = (id)=>{
        let newPlaces = places.filter(place => place.id !== id);
        setPlaces(newPlaces);
    }
    const showTextClick = (item) =>{
        item.showMore = !item.showMore
        setShowText(!showText)
    }

    return(
        <div>
            <Carousel/>
            <div className="container">
                <h1>BUCKET LIST TRAVEL</h1>
            </div>
           
                {places.map((item => {
                const{id, placeName, description, image, source, showMore}=item;
                return(
                    <div key={id}>
                        <div className="container">
                            <h2>{id} - {placeName}</h2>
                        </div>
                        <div className="container">
                            <img src={image} width="500px" alt="landscape"/>
                        </div>
                        <div className="container">
                            <p>{showMore ? description : description.substring(0,190) + "..."}
                            <button className="showText" onClick={()=>showTextClick(item)}>{showMore ? "Show less" : "Show more"}</button>
                            </p>
                        </div>
                        <div className="container">
                            <p>{source}</p>
                        </div>
                        <div className="container">
                            <button className="btn" onClick={()=>removePlace(id)}>Remove from list</button>
                        </div>
                    </div>
                )
            }))}
            <div className="container">
                    <button className="btn" onClick={()=>setPlaces([])}>Remove All</button>
            </div>
        </div>
    )
}

export default App