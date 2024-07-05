import React from "react";
import style from "../../styles/util/HoverInfo.module.css";
import Image from "next/image";
type HoverBoxProps = {
  textRows: string[];
};

export const HoverBox: React.FC<HoverBoxProps> = ({ textRows }) => {
  return (
    <div className={style.hoverInfoBox}>
      <div className={`${style.hoverText} strokedWhiteText`}>
        <Image src="/frame_horizontal.png" alt="" fill />
        {textRows.map((row, idx) => (
          <React.Fragment key={idx}>
            <h3 className={style.hoverInfoText}>{row}</h3>
            {idx !== textRows.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
