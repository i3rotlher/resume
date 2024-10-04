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

  return (
    <div className={style.layout}>
      <h2>Attributes</h2>
      <div
        className={`${style.attributesContainer} ${style["custom-scrollbar"]}`}
      >
        <AttributesRow attributes={firstRow}></AttributesRow>
        <AttributesRow attributes={secondRow}></AttributesRow>
      </div>
    </div>
  );
};
