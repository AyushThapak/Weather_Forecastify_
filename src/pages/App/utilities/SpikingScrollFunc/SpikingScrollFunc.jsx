// import { useEffect, useRef } from "react";

// export default function SpikingScrollFunc() {
//     const mshRef = useRef(0); 
//     const scrollCenterFrameRef = useRef(0);

//     const intializeSpikeScrollTwo = () => {
//         window.scroll({
//             top: mshRef.current,
//             left: 0,
//         });
//         window.scroll({
//             top: 0,
//             left: 0,
//         });
//         setTimeout(() => {
//             window.scroll({
//                 top: scrollCenterFrameRef.current,
//                 left: 0,
//                 behavior: "smooth"
//             });
//         }, 1800);
//     };

//     useEffect(() => {
//         var h = document.documentElement;
//         mshRef.current = h.scrollHeight - h.clientHeight;
//         var scrollFrameRate = Number((mshRef.current / 91).toFixed(2));
//         scrollCenterFrameRef.current = scrollFrameRate * 30.5;


//         window.scroll({
//             top: mshRef.current,
//             left: 0,
//         });
//         window.scroll({
//             top: 0,
//             left: 0,
//         });
//         intializeSpikeScrollTwo();
//     }, []);
// };