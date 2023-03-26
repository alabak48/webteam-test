import React from 'react';
import 'index.entry.pcss';

const ProductPackImage = (props) => {
  return (
    <img src={props.allProductPackImage} className={props.clsName} />
);
}
export default ProductPackImage;
