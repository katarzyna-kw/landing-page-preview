import React from 'react';
import '../App.css'
import './Image.css'

function Image(isMobile) {

   if (isMobile) {
   return (
      <div className="image-wrapper">
         <picture className="image">
            <source srcSet="https://raw.githubusercontent.com/katarzyna-kw/landing-page-preview/main/public/images/hero-desktop.jpg" media="(min-width: 376px)"/>
           <img src="https://raw.githubusercontent.com/katarzyna-kw/landing-page-preview/main/public/images/hero-mobile.jpg" alt="closeup of a woman in an orange shirt and a gold bracelet looking at the camera with a large green plant behind her"/>
         </picture>
      </div>
   )
   }
}

export default Image