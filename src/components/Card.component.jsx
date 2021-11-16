import React, { useState } from 'react';
import Header from './Header.component'
import Image from './Image.component'
import Form from './Form.component'
import Text from './Text.component'
import DesktopImage from './DesktopImage'
import '../App.css'
import './Card.css';

function Card() {

   const [isMobile, setIsMobile] = useState(true);

   return (
      <div className="wrapper">
         <div className="wrapper-content">
            <Header />
            <Image isMobile={isMobile}/>
            <div className="wrapper-content-message">
               <Text />
               <Form />
            </div>
            <DesktopImage isMobile={isMobile}/>
         </div>
      </div>
   )
}

export default Card