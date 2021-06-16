import React from 'react';
import '../assets/styles/components/RedButton.scss';

const RedButton = ({text}) => (
  <button className="buttonRed"  role="link" >
    <a href="https://goo.gl/maps/m8fAHVFojEc55ky69" target="_blank">{text}</a></button>
);

export default RedButton;