import React from 'react';
import 'index.entry.pcss';

const ProductIcon = (props) => {
  return (
    <a href={props.url}><img src={props.allProductPackImage} className={props.clsName} id="icons-ides" /></a>
  );
}
export default ProductIcon;
