import React from "react";

const HeaderButtons = (props) => {
  return (
    <div style={{maxWidth: 200}}>
      <a href={props.url} id="link-hover">
        <h5 style={{maxWidth: 200}} id="txtIconHover">{props.headerText}</h5>
      </a>
      <button className='button-languages'>{props.buttonText}</button>
      {props.buttonText2.length !== 0 && <button className='button-languages'>{props.buttonText2}</button>}
    </div>
  );
};

export default HeaderButtons;