import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Created by 
        {' '}
        <a href="https://www.linkedin.com/in/danielurio/" rel="noopener noreferrer" target="_blank" >
        Daniel Urio 
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
