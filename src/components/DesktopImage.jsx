import React from 'react';
import '../App.css'
import './Image.css'

function DesktopImage(isMobile) {

   if (!isMobile) {
   return (
      <div className="image-wrapper">
         <img src="https://raw.githubusercontent.com/katarzyna-kw/landing-page-preview/main/public/images/hero-desktop.jpg" alt="closeup of a woman in an orange shirt and a gold bracelet looking at the camera with a large green plant behind her"/>
      </div>
   )
   }
   else return null;
}

export default DesktopImage