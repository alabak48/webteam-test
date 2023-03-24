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

  const tableIde = document.getElementById('ide-table');
  const ideTable = createRoot(tableIde);
  ideTable.render(<TableIDE/>);

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

});
