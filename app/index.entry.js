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
import MainHeading from "./components/MainHeading";
import TableIDE from "./components/TenIdeS";
import IdeLanguages from "./components/IdeLanguages";
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
import twitterPack from "assets/twitterPack.svg";
import bug from "assets/bug.svg";
import blog from "assets/blog.svg";
import jetbrains from "assets/jb.svg";
import About from "./components/About";
import SmHeading from "./components/SmHeading";
import Buttons from "./components/Buttons";
import Fb from "assets/fb.svg";
import Twt from "assets/twt.svg";
import Lnkd from "assets/lnkd.svg";
import Yt from "assets/yt.svg";
import GreatValue from "assets/discount.svg";
import Flexibility from "assets/flex.svg";
import UseAccount from "assets/use-account.svg";
import Learn from "assets/learn.svg";
import ideIj from "@jetbrains/logos/intellij-idea/intellij-idea.svg";
import ideWs from "@jetbrains/logos/webstorm/webstorm.svg";
import ideRe from "@jetbrains/logos/resharper/resharper.svg";
import ideRi from "@jetbrains/logos/rider/rider.svg";
import ideAp from "@jetbrains/logos/appcode/appcode.svg";
import ideCl from "@jetbrains/logos/clion/clion.svg";
import ideRu from "@jetbrains/logos/rubymine/rubymine.svg";
import ideDa from "@jetbrains/logos/datagrip/datagrip.svg";
import idePh from "@jetbrains/logos/phpstorm/phpstorm.svg";
import idePy from "@jetbrains/logos/pycharm/pycharm.svg";
import extRs from "@jetbrains/logos/resharper-cpp/resharper-cpp.svg";
import extDc from "@jetbrains/logos/dotcover/dotcover.svg";
import extDm from "@jetbrains/logos/dotmemory/dotmemory.svg/";
import extDt from "@jetbrains/logos/dottrace/dottrace.svg";
import ProductIcon from "./components/ProductIcon";








if (!supportsCssVars()) {
  createLink(fallbackStylesheetUrl);
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('navigation-bar');
  const root = createRoot(container);
  root.render(<NavigationBar/>);




  createRoot(document.getElementById('want-it-all-button')).render(React.createElement(Buttons,{btnTxt: "I want it all"}));


  createRoot(document.getElementById('product-pack-image')).render(React.createElement(ProductPackImage,{allProductPackImage: allProductPackImage, clsName:"mainImage" }));
  createRoot(document.getElementById('product-pack-image-two')).render(React.createElement(ProductPackImage,{allProductPackImage: imageComputer,clsName:"secondImage" }));
  createRoot(document.getElementById('image-third')).render(React.createElement(ProductPackImage,{allProductPackImage: waveImage, clsName: "thirdImage" }));
  createRoot(document.getElementById('screen-product-page')).render(React.createElement(ProductPackImage,{allProductPackImage: screenProductImage, clsName: "screenImage" }));

  createRoot(document.getElementById('ide-table')).render(React.createElement(TableIDE, {isIdeTable: true}));
  createRoot(document.getElementById('ext-table')).render(React.createElement(TableIDE, {isIdeTable: false}));


  createRoot(document.getElementById('intellij')).render(React.createElement(IdeLanguages, {headerText: "IntelliJ IDEA Ultimate", buttonText: "Kotlin", buttonText2: "Java"}));
  createRoot(document.getElementById('webstorm')).render(React.createElement(IdeLanguages, {headerText: "WebStorm", buttonText: "HTML", buttonText2: ""}));
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

  createRoot(document.getElementById('great-value')).render(React.createElement(IconHeaderText, {iconSimbol: GreatValue, iconHeading: "Great value", paragraphDescr: "Get 10 IDEs for the price of 2."}));
  createRoot(document.getElementById('flexibility')).render(React.createElement(IconHeaderText, {iconSimbol: Flexibility, iconHeading: "Flexibility", paragraphDescr: "Use different tools for different projects on multiple machines as and when you need them. Easily switch between the tools under the All Products Pack license."}));
  createRoot(document.getElementById('toggle')).render(React.createElement(IconHeaderText, {iconSimbol: UseAccount, iconHeading: "Simple license management", paragraphDescr: "One unique license includes all the JetBrains desktop tools. Get unlimited access to all of them."}));
  createRoot(document.getElementById('skill')).render(React.createElement(IconHeaderText, {iconSimbol: Learn, iconHeading: "Further your skills", paragraphDescr: "Advance your programming skills with the best professional tools."}));
  createRoot(document.getElementById('maintain-tools')).render(React.createElement(HeadingTextLink,{headingTxt: "Maintain your tools with the Toolbox App", simpleTxt: "Simple installations, updates, and more", linkToSmt: "", txtToLink: "Learn More"}));


  createRoot(document.getElementById('google')).render(React.createElement(ProductPackImage,{allProductPackImage: google, clsName:"google-media"}));
  createRoot(document.getElementById('hp')).render(React.createElement(ProductPackImage,{allProductPackImage: hp, clsName:"hp-media" }));
  createRoot(document.getElementById('samsung')).render(React.createElement(ProductPackImage,{allProductPackImage: samsung, clsName:"samsung-media" }));
  createRoot(document.getElementById('sales-force')).render(React.createElement(ProductPackImage,{allProductPackImage: salesForce, clsName: "sales-media" }));
  createRoot(document.getElementById('expedia')).render(React.createElement(ProductPackImage,{allProductPackImage: expedia, clsName: "expedia-media" }));
  createRoot(document.getElementById('twitter')).render(React.createElement(ProductPackImage,{allProductPackImage: twitter,  clsName:"twitter-media" }));
  createRoot(document.getElementById('faq-container')).render(React.createElement(FaqContainer,{headingTxt: "FAQ", simpleTxt: "Can I upgrade my existing IntelliJ IDEA, PyCharm, WebStorm or ReSharper Ultimate or any other JetBrains IDE license to the All Products Pack?", txt: "Yes, your existing licenses to any JetBrains desktop product make you eligible to purchase new All Products Pack subscriptions with an additional discount." }));
  createRoot(document.getElementById('faq-second-container')).render(React.createElement(FaqContainer,{simpleTxt: "How to upgrade to the All Products Pack?", txt: "You can upgrade your current subscription to All Products Pack license from your JetBrains account using the “Upgrade” link, which is displayed next to all the licenses that can be upgraded. You can click this link to go to JetBrains eStore and complete the order. If you have any questions, please contact Sales."}));

  createRoot(document.getElementById('main-heading')).render(React.createElement(MainHeading,{mainHeading: "All Products Pack" }));
  createRoot(document.getElementById('enhance-productivity')).render(React.createElement(FaqContainer,{headingTxt: "Enhance your productivity and speed up coding with JetBrains tools!" }));

  createRoot(document.getElementById('download-packs')).render(React.createElement(IconLink,{linkImage: downloadImage,  txtLink: "Download the All Products Pack infographics" }));
  createRoot(document.getElementById('stay-updated')).render(React.createElement(FaqContainer,{headingTxt: "Stay updated"}));

  createRoot(document.getElementById('email-form')).render(<EmailForm/>);


  createRoot(document.getElementById('follow-us')).render(React.createElement(SmHeading,{idSmallestHeading: "flwUs", smallestHeadingTxt: "Follow Us"}));
  createRoot(document.getElementById('twitter-pack')).render(React.createElement(IconLink,{linkImage: twitterPack, txtLink: "@AllProductsPack on Twitter"}));
  createRoot(document.getElementById('blog')).render(React.createElement(IconLink,{linkImage: blog, txtLink: "JetBrains Blog"}));
  createRoot(document.getElementById('bug')).render(React.createElement(IconLink,{linkImage: bug, txtLink: "Bug and Issue Tracker"}));

  createRoot(document.getElementById('sm-heading')).render(React.createElement(SmHeading,{idSmallestHeading: "get-access", smallestHeadingTxt: "Get access to all JetBrains desktop tools including 10 IDEs, 2 extensions and 3 profilers"}));
  createRoot(document.getElementById('upgrade-switch')).render(React.createElement(SmHeading,{idSmallestHeading: "switch", smallestHeadingTxt: "An upgrade and switch option available"}));


  createRoot(document.getElementById('jb-logo')).render(React.createElement(ProductPackImage,{allProductPackImage: jetbrains }));

  createRoot(document.getElementById('follow-jb')).render(React.createElement(SmHeading,{idSmallestHeading: "flw-us", smallestHeadingTxt: "Follow Jetbrains"}));
  createRoot(document.getElementById('fb')).render(React.createElement(IconLink,{linkImage: Fb, clsName:"f-b" }));
  createRoot(document.getElementById('twt')).render(React.createElement(IconLink,{linkImage: Twt, clsName:"t-w" }));
  createRoot(document.getElementById('lnkd')).render(React.createElement(IconLink,{linkImage: Lnkd, clsName:"ln-kd" }));
  createRoot(document.getElementById('yt')).render(React.createElement(IconLink,{linkImage: Yt, clsName:"y-t" }));

  createRoot(document.getElementById('about')).render(<About/>);

  createRoot(document.getElementById('rights')).render(React.createElement(SmHeading,{idSmallestHeading: "rghts", smallestHeadingTxt: "© 2000—2017 JetBrains s.r.o. All rights reserved."}));
  createRoot(document.getElementById('drive')).render(React.createElement(SmHeading,{idSmallestHeading: "drv", smallestHeadingTxt: " Developed with drive and IntelliJ IDEA"}));
  createRoot(document.getElementById('privacy')).render(React.createElement(SmHeading,{idSmallestHeading: "prv", smallestHeadingTxt: "Privacy & Security  l  Terms of Use"}));


  createRoot(document.getElementById('trust')).render(React.createElement(FaqContainer,{headingTxt: "Trusted by 320,083 businesses worldwide" }));


  createRoot(document.getElementById('ij-ide')).render(React.createElement(ProductIcon,{allProductPackImage: ideIj, clsName:"ide-ij", url:"https://www.jetbrains.com/idea/"}));
  createRoot(document.getElementById('ws-ide')).render(React.createElement(ProductIcon,{allProductPackImage: ideWs, clsName:"ide-ws", url:"https://www.jetbrains.com/webstorm/"}));
  createRoot(document.getElementById('ri-ide')).render(React.createElement(ProductIcon,{allProductPackImage: ideRi, clsName:"ide-ri", url:"https://www.jetbrains.com/rider/"}));
  createRoot(document.getElementById('ru-ide')).render(React.createElement(ProductIcon,{allProductPackImage: ideRu, clsName:"ide-ru", url:"https://www.jetbrains.com/ruby/"}));
  createRoot(document.getElementById('re-ide')).render(React.createElement(ProductIcon,{allProductPackImage: ideRe, clsName:"ide-re", url:"https://www.jetbrains.com/resharper/"}));
  createRoot(document.getElementById('ap-ide')).render(React.createElement(ProductIcon,{allProductPackImage: ideAp, clsName:"ide-ap", url:"https://www.jetbrains.com/objc/"}));
  createRoot(document.getElementById('da-ide')).render(React.createElement(ProductIcon,{allProductPackImage: ideDa, clsName:"ide-da", url:"https://www.jetbrains.com/datagrip/"}));
  createRoot(document.getElementById('cl-ide')).render(React.createElement(ProductIcon,{allProductPackImage: ideCl, clsName:"ide-cl", url:"https://www.jetbrains.com/clion/"}));
  createRoot(document.getElementById('ph-ide')).render(React.createElement(ProductIcon,{allProductPackImage: idePh, clsName:"ide-ph", url:"https://www.jetbrains.com/phpstorm/"}));
  createRoot(document.getElementById('py-ide')).render(React.createElement(ProductIcon,{allProductPackImage: idePy, clsName:"ide-py", url:"https://www.jetbrains.com/pycharm/"}));


  createRoot(document.getElementById('rs-ext')).render(React.createElement(ProductIcon,{allProductPackImage: extRs, clsName:"ext-rs", url:"https://www.jetbrains.com/resharper/"}));
  createRoot(document.getElementById('rsu-ext')).render(React.createElement(ProductIcon,{allProductPackImage: ideRe, clsName:"ext-rsu", url:"https://www.jetbrains.com/resharper-cpp/"}));
  createRoot(document.getElementById('dc-ext')).render(React.createElement(ProductIcon,{allProductPackImage: extDc, clsName:"ext-dc", url:"https://www.jetbrains.com/dotcover/"}));
  createRoot(document.getElementById('dm-ext')).render(React.createElement(ProductIcon,{allProductPackImage: extDm, clsName:"ext-dm", url:"https://www.jetbrains.com/dotmemory/"}));
  createRoot(document.getElementById('dt-ext')).render(React.createElement(ProductIcon,{allProductPackImage: extDt, clsName:"ext-dt", url:"https://www.jetbrains.com/profiler/"}));





});
