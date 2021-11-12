import React from 'react';
import Header from './Header.component'
import Image from './Image.component'
import Form from './Form.component'
import Text from './Text.component'
import '../App.css';

function Card() {
   return (
      <div className="wrapper">
         <Header />
         <Image />
         <Text />
         <Form />
      </div>
   )
}

export default Card