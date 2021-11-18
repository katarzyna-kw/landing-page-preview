import React, { useState, useEffect } from 'react';
import Header from './Header.component'
import Image from './Image.component'
import Form from './Form.component'
import Text from './Text.component'
import DesktopImage from './DesktopImage.component'
import '../App.css'
import './Card.css';

function Card() {

   // const [isMobile, setIsMobile] = useState(true);
   const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

   const updateMedia = () => {
      setIsMobile(window.innerWidth < 500);
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
            {isMobile && <Image />}
            <div className="wrapper-content-message">
               <Text />
               <Form />
            </div>
            {!isMobile && <DesktopImage />}
         </div>
      </div>
   )
}

export default Card