import React from 'react';
function FaqContainer(props) {
  return (
    <>
      <h2 id='main'>{props.headingTxt}</h2>
      <h5 id='second'>{props.simpleTxt}</h5>
      <p id='txt'>{props.txt}</p>
    </>
  );
}
export default FaqContainer;