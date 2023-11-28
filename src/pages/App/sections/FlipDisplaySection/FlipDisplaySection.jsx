import "./FlipDisplaySection.css";
import ASideDatePhase from "../../components/ASideDatePhase/ASideDatePhase";
import BSideWeatherAstro from "../../components/BSideWeatherAstro/BSideWeatherAstro";


export default function FlipDisplaySection({flipAB, setFlipAB, indexForDate, currMoonPhase, cityLocation, weatherAstroData}){
    // button is hidden if no weatherAstroData is present
    // flipAB=true
    return(
        <section id="flip-section">
            <div className="button-container">
                <button className={weatherAstroData.current ? "flip-button" : ""} onClick={() => setFlipAB(!flipAB)} />
                {flipAB && weatherAstroData
                    ? 
                    <BSideWeatherAstro 
                        cityLocation={cityLocation} 
                        data={weatherAstroData}/> 
                    : 
                    <ASideDatePhase 
                        indexForDate={indexForDate} 
                        currMoonPhase={currMoonPhase}/>
                }
            </div>
        </section>
    )
}