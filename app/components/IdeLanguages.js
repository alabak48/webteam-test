import React from "react";

const HeaderButtons = (props) => {
  return (
    <div style={{maxWidth: 200}}>
      <h5 style={{maxWidth: 200}}>{props.headerText}</h5>
      <button className='button-languages'>{props.buttonText}</button>
      {props.buttonText2.length !== 0 && <button className='button-languages'>{props.buttonText2}</button>}
    </div>
  );
};

export default HeaderButtons;