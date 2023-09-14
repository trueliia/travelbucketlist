import { useState } from "react";
import { dataCarousel } from "./dataCarousel";
import iconPrevious from './previous.png';
import iconNext from './next.png';
import './App.css'

function Carousel(){
    const [photo, setPhoto] = useState(0);
    const { photoNature} = dataCarousel[photo];

    const previousPhoto = () =>{
        setPhoto((photo=>{
            photo --;
            if (photo < 0){
                return dataCarousel.length-1
            }
            return photo;
        }))
    }

    const nextPhoto = () =>{
        setPhoto((photo =>{
            photo ++;
            if (photo > dataCarousel.length-1){
                photo = 0;
            }
            return photo;
        }))
    }
    return(
        <div>
            <div className="container">
                <button className="arrows" onClick={ previousPhoto }><img src={iconPrevious} width="55px" alt="arrow"/></button>
                <img src={ photoNature } width="600px" alt="landscape"/>
                <button className="arrows" onClick={ nextPhoto }><img src={iconNext} width="55px" alt="arrow"/></button>
            </div>
    </div>
    )
}

export default Carousel