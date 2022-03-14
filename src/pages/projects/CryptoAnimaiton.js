import React, {useRef,useEffect } from "react";
import lottie from 'lottie-web';



export function CryptoAnimation({lottiePath}){
    
    const container = useRef(null)
    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require(`./CryptoCAnimation.json`)
      })
    }, [])
    return (
      <div className="App">
        <div className="container" ref={container}></div>
      </div>
    );
  
}


export function MovieWatchingAnimation(){
    
    const container = useRef(null)
    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require(`./movieWatchingAnimations.json`)
      })
    }, [])
    return (
      <div className="App">
        <div className="container" ref={container}></div>
      </div>
    );
  
}
