"use client";
import React, { ReactNode, useRef, useState } from "react";
import Image from "next/image";

import style from "./../../../app/styles/util/HoverInfo.module.css";
import { HoverBox } from "./HoverBox";

type HoverInfoprops = {
  children: ReactNode;
  hoverText: string[];
};

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
      className={style.hoverInfoContainer}
      onMouseMove={(e) => setBoxCoordinates(e)}
    >
      <div
        className={style.hoverInfoText}
        style={{ left: coordinates.xOffset, top: coordinates.yOffset }}
      >
        <HoverBox textRows={hoverText} />
      </div>
      <div style={{ pointerEvents: "none" }}> {children}</div>
    </div>
  );
};
