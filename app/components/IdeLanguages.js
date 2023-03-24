import React from "react";

const HeaderButtons = (props) => {
  return (
    <div>
      <h1>{props.headerText}</h1>
      <button>{props.buttonText}</button>
      {props.buttonText2.length !== 0 && <button>{props.buttonText2}</button>}

    </div>
  );
};

export default HeaderButtons;