import React from 'react';
function IconLink(props) {
  return (
    <>
      <h5>{props.txtHeading}</h5>
      <img src={props.linkImage} alt="Link icons" style={{width: 17, height: 14}}/>
      <a href={props.linkToMedia} id='link-url'>{props.txtLink}</a>
    </>
  );
}
export default IconLink;