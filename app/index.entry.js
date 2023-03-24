import 'reset-css';
import './exterrnal-libs/layout/index.css'
import fallbackStylesheetUrl from '!!file-loader!./exterrnal-libs/layout/layout-without-css-vars.css';
import { supportsCssVars, createLink } from './exterrnal-libs/layout/utils';
import './index.entry.pcss';
import './exterrnal-libs/breakpoints/index.css';
import {createRoot} from "react-dom/client";
import NavigationBar from "./components/NavigationBar";
import ProductPackImage from "./components/ProductPackImage";
import React from "react";
import TypesExample from "./components/Buttons";
import MainHeading from "./components/MainHeading";



if (!supportsCssVars()) {
  createLink(fallbackStylesheetUrl);
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('navigation-bar');
  const root = createRoot(container);
  root.render(<NavigationBar/>);

  const imageContainer = document.getElementById('product-pack-image');
  const allPackImage = createRoot(imageContainer);
  allPackImage.render(<ProductPackImage/>);

  const btnWantAll = document.getElementById('want-it-all-button');
  const wantItAllBtn = createRoot(btnWantAll);
  wantItAllBtn.render(<TypesExample/>);

  const mainHeading = document.getElementById('main-heading');
  const mainHeadingTitle = createRoot(mainHeading);
  mainHeadingTitle.render(<MainHeading/>);
});
