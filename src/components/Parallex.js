import "../css/Parallex.css";
import Button from 'react-bootstrap/Button';

import { ParallaxBanner, Parallax } from "react-scroll-parallax";
const Parallex = (title, image) => {
 
    return (
      <div className="Parallax-container-body">
        <ParallaxBanner
          layers={[
            { image: require("../assets/IMG_4727.jpeg"), speed: -20 },
            {
              speed: -15,
              children: (
                <div className="">
                  {/* <h1 className="text">check out my </h1> */}
                </div>
              ),
            },
            { image: "/images/mountain.png", speed: -10 },
          ]}
          className="bg-container"
        >
          <div className="bg-container">
            <h1 className="">travels</h1>
          </div>
        </ParallaxBanner>

      </div>
                
  );
};
export default Parallex;