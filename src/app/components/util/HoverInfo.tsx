"use client";
import React, { ReactNode, useState } from "react";

import style from "./../../../app/styles/util/HoverInfo.module.css";
import { HoverBox } from "./HoverBox";

type HoverInfoprops = {
  children: ReactNode;
  hoverText: string[];
};

/**
 * A component that makes the child hoverable with a info box.
 * @param hoverText The text to be diplayed. Each element in the array represents an individual line
 */
export const HoverInfo: React.FC<HoverInfoprops> = ({
  children,
  hoverText,
}) => {
  const [coordinates, setCordinates] = useState({ xOffset: 0, yOffset: 0 });

  function setBoxCoordinates(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    var x = e.nativeEvent.offsetX + 45;
    var y = e.nativeEvent.offsetY;

    setTimeout(
      () =>
        setCordinates({
          xOffset: x,
          yOffset: y,
        }),
      0
    );
  }

  return (
    <div
      className={style.hoverInfoElement}
      onMouseMove={(e) => setBoxCoordinates(e)}
    >
      <div
        style={{
          left: coordinates.xOffset,
          top: coordinates.yOffset,
          position: "relative",
        }}
      >
        <HoverBox textRows={hoverText} />
      </div>
      <div
        style={{ pointerEvents: "none", height: "inherit", width: "inherit" }}
      >
        {" "}
        {children}
      </div>
    </div>
  );
};
