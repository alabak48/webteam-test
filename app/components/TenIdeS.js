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
import image10 from "@jetbrains/logos/intellij-idea/intellij-idea.svg";
import image11 from "@jetbrains/logos/resharper-cpp/resharper-cpp.svg";
import image12 from "@jetbrains/logos/dotcover/dotcover.svg";
import image13 from "@jetbrains/logos/dotmemory/dotmemory.svg/";
import image14 from "@jetbrains/logos/dottrace/dottrace.svg";


const data = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const secondData = [
  image3,
  image11,
  image12,
  image13,
  image14,
];

const TableIDE = (props) => {
  const rows = [];
  if (props.isIdeTable) {
    for (let i = 0; i < 4; i++) {
      const cells = [];
      for (let j = 0; j < 4; j++) {
        const index = i * 4 + j;
        if (index < data.length) {
          cells.push(<img style={{paddingLeft: 37, height: 72}} key={index} src={data[index]} alt={`Image ${index}`}/>);
        } else {
          cells.push(<td key={j}></td>);
        }
      }
      rows.push(<tr style={{lineHeight: 7}} key={i}>{cells}</tr>);
    }
  } else {
    for (let i = 0; i < 2; i++) {
      const cells = [];
      for (let j = 0; j < 3; j++) {
        const index = i * 3 + j;
        if (index < secondData.length) {
          cells.push(<img style={{paddingLeft: 37, height: 72}} key={index} src={secondData[index]}
                          alt={`Image ${index}`}/>);
        } else {
          cells.push(<td key={j}></td>);
        }
      }
      rows.push(<tr style={{lineHeight: 7}} key={i}>{cells}</tr>);
    }
  }

  return (
    <table id='abc'>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default TableIDE;
