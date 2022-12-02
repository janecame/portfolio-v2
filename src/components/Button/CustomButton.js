
import React from 'react';
import './CustomButton.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

const TYPE = ['btn--rounded', 'btn--secondary'];

const CustomButton = ({children, type, onClick, buttonStyle, buttonSize, buttonType }) => {
  
const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

const checkButtonType = TYPE.includes(buttonType) ? buttonType : SIZES[0];


  return (
    
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonType}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    
  );
};

export default CustomButton;