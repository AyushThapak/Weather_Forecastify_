import { useState } from "react";

export default function ConstructionDisplay() {
    const [hideCSign, setHideCSign] = useState(false);

    let text = document.lastModified;

    const scrollDown = () => {
        var h = document.documentElement;
        var msh = h.scrollHeight - h.clientHeight;
        var sft = (msh / 91) * 30.5; // 91 is the frame count // 30.5 is the 30th frame
        var sft2 = Number(sft.toFixed(2));
        window.scroll({
            top: 0,
            left: 0,
        });
        // console.log("button - top out");
        window.scroll({
            top: sft2,
            left: 0,
            behavior: "smooth"
        });
        // console.log("button - to today");
    };


    return (
        <div className={"c-coin-hide"}>
            <button className="hide-c-button" onClick={() => setHideCSign(true)}> HIDE </button>
            <div className="c-border">
                <div className="c-signpost">

                    <span className="c-header">Completed - February 2023</span>
                    <p className="c-update">LAST MODIFIED - {text}</p> 
                    <p>Website is best experienced through the Chrome Browser</p>
                    <p>Basic Heroku Dyno - Slow on Load</p>
                    <br/>
                    <div className="c-links">
                        <a href="https://github.com/aahx/LunarThoughts-Moon-and-Weather-App-and-Journal" target="_blank" rel="noreferrer">GitHub</a>
                        <button onClick={scrollDown}>Refresh Scroll</button>
                    </div>
                </div>
            </div>
        </div>
    )
};