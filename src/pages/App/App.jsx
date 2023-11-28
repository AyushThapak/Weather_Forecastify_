import './App.css';
import { useState } from 'react';



import PreLoadImagesFunc from "./utilities/PreLoadImagesFunc/PreLoadImagesFunc";
import BackgroundComponent from "./components/BackgroundComponent/BackgroundComponent";
import MoonSection from "./sections/MoonSection/MoonSection";
import FormSection from "./sections/FormSection/FormSection";
import FlipDisplaySection from "./sections/FlipDisplaySection/FlipDisplaySection";
import SettingScrollFunc from "./utilities/SettingScrollFunc/SettingScrollFunc";
import ConstructionDisplay from "./utilities/ConstructionDisplay/ConstructionDisplay";

export default function App() {
  const [indexForDate, setIndexForDate] = useState();
  const [currMoonPhase, setCurrMoonPhase] = useState();
  const [flipAB, setFlipAB] = useState(false);
  const [cityLocation, setCityLocation] = useState("no city");
  const [weatherAstroData, setWeatherAstroData] = useState(false);

  
  return (
    <>
      <PreLoadImagesFunc />
      <main id="main-moon">
        <BackgroundComponent />
        <section className="leftside-moon">
          <MoonSection 
            setIndexForDate={setIndexForDate}
            setCurrMoonPhase={setCurrMoonPhase}/>
        </section> 
        <section className="rightside-moon">
          <FormSection 
            setCityLocation={setCityLocation} 
            setWeatherAstroData={setWeatherAstroData} 
            setFlipAB={setFlipAB}/>
          <FlipDisplaySection 
            flipAB={flipAB} 
            setFlipAB={setFlipAB} 
            indexForDate={indexForDate} 
            currMoonPhase={currMoonPhase} 
            cityLocation={cityLocation} 
            weatherAstroData={weatherAstroData}/>
        </section>
      </main>
      <ConstructionDisplay />
      <SettingScrollFunc />
      </>
  );
};
