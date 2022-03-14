import React, {Component, useEffect, useRef } from "react";
// import React, {useRef,useEffect,Component } from "react";
// import lottie from 'lottie-web';
import lottie from 'lottie-web';

import data from "./web.svg"
// export default function FullStackImg(){
//     const container = useRef(null)
//     useEffect(() => {
//       lottie.loadAnimation({
//         container: container.current,
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         animationData: require('./htmldev.json')
//       })
//     }, [])
//     return (
//       <div className="App">
//         <div className="container" ref={container}></div>
//       </div>
//     );
// }


//for static images
const FullStackImg = () => {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./web development.json')
    })
  }, [])
  
      return (
        <div className="App">
          <div className="container " style={{transform: 'translateY(-15%)'}} ref={container}>
        {/* <img src={data} alt="" width="450"/> */}
        </div>
        </div>
      );
    }
  
  
  export default FullStackImg;