import React from 'react';
import 'index.entry.pcss';
function FaqContainer(props) {
  return (
    <>
      <div id={props.faqId} >
      <h2 id='main'>{props.headingTxt}</h2>
      <h5 id='second'>{props.simpleTxt}</h5>
      <p id='txt'>{props.txt}</p>
      </div>
    </>
  );
}
export default FaqContainer;