import React, { useEffect, useState } from "react";
import colorsCss from "../styles/_settings.scss";

const PercentChange = ({ percent }) => {
  const [color, setColor] = useState();

  useEffect(() => {
    if (percent) {
      if (percent >= 0) {
        setColor(colorsCss.green1);
      } else {
        setColor(colorsCss.red1);
      }
    } else {
      setColor(colorsCss.white1);
    }
  }, [percent]);

  return (
    <p className="percent-change-container" style={{ color }}>
      {percent ? percent.toFixed(1) + "%" : "-"}
    </p>
  );
};

export default PercentChange;
