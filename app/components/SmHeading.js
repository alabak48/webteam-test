import React from 'react';
import 'index.entry.pcss';

const SmHeading = (props) => {
  return (
    <>
      <h6 id={props.idSmallestHeading}>{props.smallestHeadingTxt}</h6>
    </>
  );
};

export default SmHeading;