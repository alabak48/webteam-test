import React from "react";
import image1 from "@jetbrains/logos/intellij-idea/intellij-idea.svg";
import image2 from "@jetbrains/logos/webstorm/webstorm.svg";
import image3 from "@jetbrains/logos/resharper/resharper.svg";
import image4 from "@jetbrains/logos/rider/rider.svg";
import image5 from "@jetbrains/logos/appcode/appcode.svg";
import image6 from "@jetbrains/logos/clion/clion.svg";
import image7 from "@jetbrains/logos/rubymine/rubymine.svg";
import image8 from "@jetbrains/logos/datagrip/datagrip.svg";
import image9 from "@jetbrains/logos/phpstorm/phpstorm.svg";
import image10 from "@jetbrains/logos/pycharm/pycharm.svg";
import image11 from "@jetbrains/logos/resharper-cpp/resharper-cpp.svg";
import image12 from "@jetbrains/logos/dotcover/dotcover.svg";
import image13 from "@jetbrains/logos/dotmemory/dotmemory.svg/";
import image14 from "@jetbrains/logos/dottrace/dottrace.svg";
import 'index.entry.pcss';



const data = [
  {img: image1, headerText: "IntelliJ IDEA Ultimate", buttonText: "Kotlin", buttonText2: "Java", url:"https://www.jetbrains.com/idea/"},
  {img: image2, headerText: "WebStorm", buttonText: "HTML", buttonText2: "", url:"https://www.jetbrains.com/webstorm/"},
  {img: image4, headerText: "Rider", buttonText: "C#", buttonText2: ".NET", url:"https://www.jetbrains.com/rider/"},
  {img: image7, headerText: "RubyMine", buttonText: "Ruby", buttonText2: "", url:"https://www.jetbrains.com/ruby/"},
  {img: image3, headerText: "ReSharper Ultimate", buttonText: "C++", buttonText2: "", url:"https://www.jetbrains.com/resharper/"},
  {img: image5, headerText: "AppCode", buttonText: "mysql", buttonText2: "database", url:"https://www.jetbrains.com/objc/"},
  {img: image8, headerText: "DataGrip", buttonText: "C", buttonText2: "", url:"https://www.jetbrains.com/datagrip/"},
  {img: image6, headerText: "CLion", buttonText: "Ruby", buttonText2: "", url:"https://www.jetbrains.com/clion/"},
  {img: image9, headerText: "PhpStorm", buttonText: "mysql", buttonText2: "database", url:"https://www.jetbrains.com/phpstorm/"},
  {img: image10, headerText: "PyCharm", buttonText: "mysql", buttonText2: "database", url:"https://www.jetbrains.com/pycharm/"},
];

const secondData = [
  {img: image3, headerText: "ReSharper Ultimate", buttonText: "C++", buttonText2: "", url:"https://www.jetbrains.com/resharper/"},
  {img: image11, headerText: "ReSharper C++", buttonText: "C++", buttonText2: "", url:"https://www.jetbrains.com/resharper-cpp/"},
  {img: image12, headerText: "dotCover", buttonText: "mysql", buttonText2: "", url:"https://www.jetbrains.com/dotcover/"},
  {img: image13, headerText: "dotMemory", buttonText: "c", buttonText2: "", url:"https://www.jetbrains.com/dotmemory/"},
  {img: image14, headerText: "dotTrace", buttonText: "Ruby", buttonText2: "", url:"https://www.jetbrains.com/profiler/"},
];

const TableIDE = (props) => {
  const rows = [];
  if (props.isIdeTable) {
    for (let i = 0; i < 5; i++) {
      const cells = [];
      for (let j = 0; j < 2; j++) {
        const index = i * 2 + j;
        if (index < data.length) {
          cells.push(
            <td key={i + j}>
              <a href={data[index].url}><img id="img-mobile" key={index} src={data[index].img}
                   alt={`Image ${data[index].headerText}`}/></a>
              <h5 id="header-mobile">{data[index].headerText}</h5>
              <button className='button-languages'>{data[index].buttonText}</button>
              {data[index].buttonText2.length !== 0 && <button className='button-languages'>{data[index].buttonText2}</button>}
            </td>
          );
        } else {
          cells.push(<td key={i + j}></td>);
        }
      }
      rows.push(<tr key={i}>{cells}</tr>);
    }
  } else {
    for (let i = 0; i < 3; i++) {
      const cells = [];
      for (let j = 0; j < 2; j++) {
        const index = i * 2 + j;
        if (index < secondData.length) {
          cells.push(
            <td key={i + j}>
              <a href={secondData[index].url}> <img id="img-mobile" key={index} src={secondData[index].img} alt={`Image ${secondData[index].headerText}`}/></a>
              <h5 id="header-mobile">{secondData[index].headerText}</h5>
              <button className='button-languages'>{secondData[index].buttonText}</button>
              {secondData[index].buttonText2.length !== 0 && <button className='button-languages'>{secondData[index].buttonText2}</button>}
            </td>);
        } else {
          cells.push(<td key={i + j}></td>);
        }
      }
      rows.push(<tr key={i}>{cells}</tr>);
    }
  }

  return (
    <table id='abc'>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default TableIDE;
