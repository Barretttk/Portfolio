import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();


    useEffect(() => {
        init(textRef.current, {
          showCursor: false,
          backDelay: 1500,
          backSpeed: 60,
        //   showCursor: true,
          strings: [ " Junior Full Stack ", " Junior Software "],
        });
    }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="images/profilepic.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Hello There, Im </h2>
          <h1> Timothy Barrett</h1>
          <h3>
            {" "}
            Freelance 
            <span ref={textRef}></span>    
            Engineer
          </h3>
        </div>
        <a href="#about">
          <img src="images/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
