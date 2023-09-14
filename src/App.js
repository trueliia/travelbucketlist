import './App.css';
import Carousel from "./carousel";
import Bucket from "./bucketlist";


function App(){
    //     const [places, setPlaces] = useState(data);
    // const [showText, setShowText] = useState(false);
    // const removePlace = (id)=>{
    //     let newPlaces = places.filter(place => place.id !== id);
    //     setPlaces(newPlaces);
    // }
    // const showTextClick = (item) =>{
    //     item.showMore = !item.showMore
    //     setShowText(!showText)

    return(
        <div>
            <Carousel/>
            <Bucket/>
            
        </div>
    )
}

export default App