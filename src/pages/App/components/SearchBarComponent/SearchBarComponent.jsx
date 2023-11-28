import "./SearchBarComponent.css";
import { useState} from "react";
import axios from "axios";


// Variable outside of SearchBarComponent - location does not change
// goFetch variable used to prevent useEffect from fetchingAstroData prematurely
// goFetch === true, once COORDINATES are fetched
// let goFetch = false;


export default function SearchBarComponent({ setCityLocation, setWeatherAstroData, setFlipAB }) {
    const [zipcode, setZipcode] = useState("");
    // const [lat, setLat] = useState();
    // const [lon, setLon] = useState();
    // const [city, setCity] = useState("");

    const appid = '023431cfe3cf64071acaac1e6f01b225';
    // let COORDINATES = `https://api.openweathermap.org/geo/1.0/zip?zip=${zipcode}&appid=${appid}`;
    // let OPENWEATHERMAP = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${process.env.REACT_APP_OWM}`;
    const url = 'https://api.openweathermap.org/data/2.5/weather?';
    // -- step 4 --> step 5 is "BSideWeatherAstro". passing setWeatherAstroData -> "BSideWeatherAstro"
    const fetchWeatherAstroData = async() => {
        console.log("entering fetch function");
        setCityLocation(zipcode)
        // try{
        //     await fetch(OPENWEATHERMAP)
        //     .then(res => res.json())
        //     .then(data => {
        //         setWeatherAstroData(data);
        //         setFlipAB(true);
        //     })
        // } catch(err){
        //     console.log("error fetching openweathermap data", err);
        // };
        await axios
        .get(url
          , {
            params: {
              q: zipcode,
              units: 'metric',
              appid: appid,
            },
          }
        )
        .then((res) => {
          console.log("response recieved")
          console.log('res', res);
          setWeatherAstroData(res.data);
          setFlipAB(true);
        //   setWeather({ data: res.data, loading: false, error: false });
        })
        .catch((error) => {
        //   setWeather({ ...weather, data: {}, error: true });
            console.log("error fetching openweathermap data", error);
        });
    };

    // -- step 3
    // useEffect(()=>{
    //     if(goFetch){
    //         console.log("calling fetch function");
    //         fetchWeatherAstroData()
    //     };
    //     // eslint-disable-next-line
    // },[lat])

    // -- step 1
    // const fetchCoordinatesByZip = async() => {
    //     console.log("fetching city through coordinates");
    //     try{
    //         await fetch(COORDINATES)
    //         .then(res => res.json())
    //         .then(data => {
    //             setCity(data.name);
    //             setCityLocation(data.name);
    //             setLat(data.lat);
    //             setLon(data.lon);
    //             goFetch = true;
    //         });
    //     } catch(error){
    //         console.log("error fetching geo-api data", error);
    //     };      
    // };

    // -- start
    // -- step 2
    const handleFormSubmit = async(evt) =>{
        evt.preventDefault();
        console.log("calling coordinates to city");
        await fetchWeatherAstroData();
        setZipcode("");
    };

    const handleFormInput = (evt) => {
        console.log("zipcode set");
        setZipcode(evt.target.value);
    };


    return (
        <div className="zip-search-container">
            <form onSubmit={handleFormSubmit} autoComplete="off">
                <input className="zip-search-input"
                    type="text"
                    placeholder="enter zip only"
                    value={zipcode}
                    onChange={handleFormInput}
                    required />
            </form>
        </div>
    )
};