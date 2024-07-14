import React, { useEffect, useRef } from "react";
import { AttributesRow } from "../../util/AttributesRow";
import style from "../../../styles/tabs/Attributes.module.css";
import attributes from "./AttributesData";

type AttributesProp = {
  tab: string;
};

export const Attributes: React.FC<AttributesProp> = ({ tab }) => {
  tab = tab.toLowerCase();

  const midIndex = Math.ceil(attributes[tab].length / 2); // Calculate the midpoint, rounding up
  const firstRow = attributes[tab].slice(0, midIndex); // First half, larger if the length is odd
  const secondRow = attributes[tab].slice(midIndex); // Second half
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      container.scrollBy({
        left: event.deltaY,
        behavior: "smooth",
      });
    };

    container.addEventListener("wheel", onWheel);

    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div className={style.layout}>
      <h2>Attributes</h2>
      <div
        ref={containerRef}
        className={`${style.attributesContainer} ${style["custom-scrollbar"]}`}
      >
        <AttributesRow attributes={firstRow}></AttributesRow>
        <AttributesRow attributes={secondRow}></AttributesRow>
      </div>
    </div>
  );
};
