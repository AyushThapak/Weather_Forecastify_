import { useEffect } from "react";
import MoonImages from "../../assets/MoonImages/0000index";
import topImageDayNumber from "../DayDateFunc/DayDateFunc";


export default function PreLoadImagesFunc(){
    useEffect(()=>{
       
        const preloadFrame = (frame, frameIterator) => {
            let preimg = new Image();
            preimg.src = MoonImages[frame].imgRef;
            };

        
        for(let i = 0; i <= 91; i++){ 
            var precheck = topImageDayNumber - i; 
            
            if(precheck >= 0){
                preloadFrame(topImageDayNumber - i, i);
            } else if(precheck < 0){
                var preTop = topImageDayNumber + 365;
                preloadFrame(preTop - i, i);
            };
        };
    },[]);
};