import React from 'react';
import 'index.entry.pcss';

const IconHeaderText = (props) => {
  return (
    <>

        <img src={props.iconSimbol} alt="Icon Simbol" style={{width: 48, height: 48, margin: 10 }} />
        <h5 style={{maxWidth: 200}}>{props.iconHeading}</h5>
        <p className='desc-paragraph'>{props.paragraphDescr}</p>

    </>
  );
};

export default IconHeaderText;