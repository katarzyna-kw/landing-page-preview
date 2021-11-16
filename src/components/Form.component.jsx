import React, { useState, useEffect, useRef } from 'react';
import '../App.css'
import './Form.css'

function Form() { 

   const firstRender= useRef(true);
   const [disable, setDisable] = useState(true);
   const [error, setError] = useState(null);
   const [email, setEmail] = useState("");

   const onSubmit = (e) => {
      e.preventDefault();

      if (!error) {
         console.log("submitting form with", email);
      }
   };

   useEffect(() => {
      if (firstRender.current) {
         firstRender.current = false;
         return;
      }

      const formValidation = () => {
         const emailValidation = !/\S+@\S+\.\S+/.test(email);
   
         if (emailValidation) {
           setError("Please provide a valid email");
         } else {
           setError(null);
         }
       };
   
      setDisable(formValidation());
   }, [email]);
 
   return (
      <div className="form-wrapper">
         <form onSubmit={onSubmit}>
            <input 
               placeholder="Email Address"
               type="email" 
               name="email"
               value={email}
               onChange={e => setEmail(e.target.value)}
            />
            <button
               type="submit">
               <img src="https://raw.githubusercontent.com/katarzyna-kw/landing-page-preview/d39487d8743a0fb56e66db0dc6f974936e478f71/public/images/icon-arrow.svg" alt="click to submit email address" />
               </button>
            </form>
            {error && <p className="error">{error}</p>}
      </div>
   )
}

export default Form