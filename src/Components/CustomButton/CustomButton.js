import React from 'react';
import './CustomButtonStyles.scss';

//accepts props and conditionally applies the styles based on what component it is in
const CustomButton = ({ children, inverted, isGoogleSignIn, ...otherProps }) => (
  <button className= {`${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;