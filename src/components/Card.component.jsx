import React, { useState, useEffect } from 'react'
import Header from './Header.component'
import HeroSmall from './HeroSmall.component'
import Text from './Text.component'
import HeroLarge from './HeroLarge.component'
import '../App.css'
import './Card.css';

function Card() {

   const [isMobile, setIsMobile] = useState(window.innerWidth < 550);

   const updateMedia = () => {
      setIsMobile(window.innerWidth < 550);
   }

   useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
   });

   return (
      <div className="wrapper">
         <div className="wrapper-content">
            <Header />
            {/* {isMobile ? (
                  <div>I show on mobile</div>
            ) : (
                  <div>I show on non mobile</div>
            )} */}
            {isMobile && <HeroSmall />}
            <Text />
         </div>
         {!isMobile && <HeroLarge />}
      </div>
   )
}

export default Card