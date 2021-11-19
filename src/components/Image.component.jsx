import React from 'react';
import '../App.css'
import './Image.css'

function Image() {

   // if (isMobile) {

   return (
      <div className="image-wrapper">
         {/* <picture className="image"> */}
           <img className="image" src="https://raw.githubusercontent.com/katarzyna-kw/landing-page-preview/main/public/images/hero-mobile.jpg" alt="closeup of a woman in an orange shirt and a gold bracelet looking at the camera with a large green plant behind her"/>
         {/* </picture> */}
      </div>
   )
}

export default Image