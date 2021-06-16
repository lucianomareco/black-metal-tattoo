import React from 'react';
import '../assets/styles/components/OutlineButton.scss';

const OutlineButton = ({text}) => (
  <button className="outlineButton" type="button">{text}</button>
);

export default OutlineButton;