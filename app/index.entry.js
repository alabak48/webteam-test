import 'reset-css';
import './exterrnal-libs/layout/index.css'
import fallbackStylesheetUrl from '!!file-loader!./exterrnal-libs/layout/layout-without-css-vars.css';
import {supportsCssVars, createLink} from './exterrnal-libs/layout/utils';
import './index.entry.pcss';
import './exterrnal-libs/breakpoints/index.css';
import {createRoot} from "react-dom/client";
import NavigationBar from "./components/NavigationBar";
import ProductPackImage from "./components/ProductPackImage";
import React from "react";
import TypesExample from "./components/Buttons";
import MainHeading from "./components/MainHeading";
import TableIDE from "./components/TenIdeS";
import IdeLanguages from "./components/IdeLanguages";
import tag from "assets/tag.png";
import flexiblity from "assets/flexibility.png";
import toggle from "assets/slider.png";
import  skills from "assets/skills.png";
import IconHeaderText from "./components/IconHeaderText";
import allProductPackImage from 'assets/img-1-copy.png';
import imageComputer from 'assets/img-4.png';
import screenProductImage from 'assets/productImage.png';
import HeadingTextLink from "./components/HeadingTextLink";
import twitter from "assets/twitter.svg";
import google from "assets/google.svg";
import hp from "assets/hp.svg";
import expedia from "assets/expedia.svg";
import samsung from "assets/samsung.svg";
import salesForce from "assets/salesforce.svg";
import FaqContainer from "./components/FaqContainer";
import waveImage from "assets/img-2.png";
import IconLink from "./components/IconLink";
import downloadImage from "assets/download.svg";
import EmailForm from "./components/EmailForm";



if (!supportsCssVars()) {
  createLink(fallbackStylesheetUrl);
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('navigation-bar');
  const root = createRoot(container);
  root.render(<NavigationBar/>);


  const btnWantAll = document.getElementById('want-it-all-button');
  const wantItAllBtn = createRoot(btnWantAll);
  wantItAllBtn.render(<TypesExample/>);


  createRoot(document.getElementById('product-pack-image')).render(React.createElement(ProductPackImage,{allProductPackImage: allProductPackImage }));
  createRoot(document.getElementById('product-pack-image-two')).render(React.createElement(ProductPackImage,{allProductPackImage: imageComputer }));



  createRoot(document.getElementById('ide-table')).render(React.createElement(TableIDE, {isIdeTable: true}));
  createRoot(document.getElementById('ext-table')).render(React.createElement(TableIDE, {isIdeTable: false}));

  createRoot(document.getElementById('intellij')).render(React.createElement(IdeLanguages, {headerText: "IntelliJ IDEA Ultimate", buttonText: "Kotlin", buttonText2: "Java"}));
  createRoot(document.getElementById('webstorm')).render(React.createElement(IdeLanguages, {headerText: "WebStorm", buttonText: "mysql", buttonText2: ""}));
  createRoot(document.getElementById('rider')).render(React.createElement(IdeLanguages, {headerText: "Rider", buttonText: "C#", buttonText2: ".NET"}));
  createRoot(document.getElementById('rubymine')).render(React.createElement(IdeLanguages, {headerText: "RubyMine", buttonText: "Ruby", buttonText2: ""}));
  createRoot(document.getElementById('resharper')).render(React.createElement(IdeLanguages, {headerText: "ReSharper Ultimate", buttonText: "C++", buttonText2: ""}));
  createRoot(document.getElementById('appcode')).render(React.createElement(IdeLanguages, {headerText: "AppCode", buttonText: "mysql", buttonText2: "database"}));
  createRoot(document.getElementById('datagrip')).render(React.createElement(IdeLanguages, {headerText: "DataGrip", buttonText: "C", buttonText2: ""}));
  createRoot(document.getElementById('clion')).render(React.createElement(IdeLanguages, {headerText: "CLion", buttonText: "Ruby", buttonText2: ""}));
  createRoot(document.getElementById('phpstorm')).render(React.createElement(IdeLanguages, {headerText: "PhpStorm", buttonText: "mysql", buttonText2: "database"}));
  createRoot(document.getElementById('pycharm')).render(React.createElement(IdeLanguages, {headerText: "PyCharm", buttonText: "mysql", buttonText2: "database"}));

  createRoot(document.getElementById('re-sharp')).render(React.createElement(IdeLanguages, {headerText: "ReSharper", buttonText: "mysql", buttonText2: "database"}));
  createRoot(document.getElementById('dot-trace')).render(React.createElement(IdeLanguages, {headerText: "dotTrace", buttonText: "Ruby", buttonText2: ""}));
  createRoot(document.getElementById('dot-memory')).render(React.createElement(IdeLanguages, {headerText: "dotMemory", buttonText: "c", buttonText2: ""}));
  createRoot(document.getElementById('re-sharp-cpp')).render(React.createElement(IdeLanguages, {headerText: "ReSharper C++", buttonText: "C++", buttonText2: ""}));
  createRoot(document.getElementById('dot-cover')).render(React.createElement(IdeLanguages, {headerText: "dotCover", buttonText: "mysql", buttonText2: ""}));

  createRoot(document.getElementById('great-value')).render(React.createElement(IconHeaderText, {iconSimbol: tag, iconHeading: "Great value", paragraphDescr: "Get 10 IDEs for the price of 2."}));
  createRoot(document.getElementById('flexibility')).render(React.createElement(IconHeaderText, {iconSimbol: flexiblity, iconHeading: "Flexibility", paragraphDescr: "Use different tools for different projects on multiple machines as and when you need them. Easily switch between the tools under the All Products Pack license."}));
  createRoot(document.getElementById('toggle')).render(React.createElement(IconHeaderText, {iconSimbol: toggle, iconHeading: "Simple license management", paragraphDescr: "One unique license includes all the JetBrains desktop tools. Get unlimited access to all of them."}));
  createRoot(document.getElementById('skill')).render(React.createElement(IconHeaderText, {iconSimbol: skills, iconHeading: "Further your skills", paragraphDescr: "Advance your programming skills with the best professional tools."}));

  createRoot(document.getElementById('screen-product-page')).render(React.createElement(ProductPackImage,{allProductPackImage: screenProductImage }));
  createRoot(document.getElementById('maintain-tools')).render(React.createElement(HeadingTextLink,{headingTxt: "Maintain your tools with the Toolbox App", simpleTxt: "Simple installations, updates, and more", linkToSmt: "", txtToLink: "Learn More"}));
  createRoot(document.getElementById('screen-product-page')).render(React.createElement(ProductPackImage,{allProductPackImage: screenProductImage }));


  createRoot(document.getElementById('google')).render(React.createElement(ProductPackImage,{allProductPackImage: google }));
  createRoot(document.getElementById('hp')).render(React.createElement(ProductPackImage,{allProductPackImage: hp }));
  createRoot(document.getElementById('samsung')).render(React.createElement(ProductPackImage,{allProductPackImage: samsung }));
  createRoot(document.getElementById('sales-force')).render(React.createElement(ProductPackImage,{allProductPackImage: salesForce }));
  createRoot(document.getElementById('expedia')).render(React.createElement(ProductPackImage,{allProductPackImage: expedia }));
  createRoot(document.getElementById('twitter')).render(React.createElement(ProductPackImage,{allProductPackImage: twitter }));
  createRoot(document.getElementById('trust')).render(React.createElement(HeadingTextLink,{headingTxt: "Trusted by 320,083 businesses worldwide"}));
  createRoot(document.getElementById('trust')).render(React.createElement(HeadingTextLink,{headingTxt: "Trusted by 320,083 businesses worldwide"}));
  createRoot(document.getElementById('faq-container')).render(React.createElement(FaqContainer,{headingTxt: "FAQ", simpleTxt: "Can I upgrade my existing IntelliJ IDEA, PyCharm, WebStorm or ReSharper Ultimate or any other JetBrains IDE license to the All Products Pack", txt: "Yes, your existing licenses to any JetBrains desktop product make you eligible to purchase new All Products Pack subscriptions with an additional discount." }));
  createRoot(document.getElementById('faq-second-container')).render(React.createElement(FaqContainer,{simpleTxt: "How to upgrade to the All Products Pack?", txt: "You can upgrade your current subscription to All Products Pack license from your JetBrains account using the “Upgrade” link, which is displayed next to all the licenses that can be upgraded. You can click this link to go to JetBrains eStore and complete the order. If you have any questions, please contact Sales."}));

  createRoot(document.getElementById('image-second')).render(React.createElement(ProductPackImage,{allProductPackImage: waveImage }));
  createRoot(document.getElementById('trust')).render(React.createElement(HeadingTextLink,{headingTxt: "Trusted by 320,083 businesses worldwide"}));
  createRoot(document.getElementById('main-heading')).render(React.createElement(MainHeading,{mainHeading: "All Products Pack" }));
  createRoot(document.getElementById('enhance-productivity')).render(React.createElement(FaqContainer,{headingTxt: "Enhance your productivity and speed up coding with JetBrains tools!" }));

  createRoot(document.getElementById('download-packs')).render(React.createElement(IconLink,{linkImage: downloadImage,  txtLink: "Download the All Products Pack infographics" }));
  createRoot(document.getElementById('stay-updated')).render(React.createElement(FaqContainer,{headingTxt: "Stay updated"}));

  createRoot(document.getElementById('email-form')).render(<EmailForm/>);


});
