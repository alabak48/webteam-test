import React from 'react';
function HeadingTextLink(props) {
  return (
    <>
      <h2 id='heading-text'>{props.headingTxt}</h2>
      <h5 id='second-heading'>{props.simpleTxt}</h5>
      <p id='text-line'>{props.txt}</p>
      <a href={props.linkToSmt} id='link-learn-more'>{props.txtToLink}</a>
    </>
  );
}
export default HeadingTextLink;