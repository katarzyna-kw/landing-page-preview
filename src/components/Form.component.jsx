import React, { useState } from 'react';
import '../App.css'
import './Form.css'

function Form() {

   const [email, setEmail] = useState('');
   const [errors, setErrors] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);
 

   const validateEmail = (e) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
   }
  
   return (
      <div class="form-wrapper">
         <form>
            <input 
               value={email}
               placeholder="Email Address"
               type="text" 
               name="email"
               onChange={e => setEmail(e.target.value)}
            /> 
            <button>
               <img src="https://raw.githubusercontent.com/katarzyna-kw/landing-page-preview/d39487d8743a0fb56e66db0dc6f974936e478f71/public/images/icon-arrow.svg" alt="click to submit email address" placeholder={email} />
            </button>        
            </form>
      </div>
   )
}

export default Form