import React from 'react';

import '/home/michael/crwn-clothing/src/Components/CustomButton/CustomButtonStyles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className= {`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;