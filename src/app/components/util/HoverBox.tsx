import React from "react";
import style from "../../styles/util/HoverInfo.module.css";
import Image from "next/image";
type HoverBoxProps = {
  textRows: string[];
};

export const HoverBox: React.FC<HoverBoxProps> = ({ textRows }) => {
  function processSmallItems(arr: string[]) {
    return arr.map((item) => {
      if (item.startsWith("[small]")) {
        const newItem = item.replace("[small]", "").trim();
        return [true, newItem];
      } else {
        return [false, item];
      }
    });
  }

  const res = processSmallItems(textRows);

  return (
    <div className={style.hoverInfoBox}>
      <div className={`${style.hoverText} strokedWhiteText`}>
        <Image src="/frame_horizontal.png" alt="" fill />
        {res.map((row, idx) => (
          <React.Fragment key={idx}>
            <h3
              className={style.hoverInfoText}
              style={{ fontSize: row[0] ? "calc(min(2vh, 2vw))" : "" }}
            >
              {row[1]}
            </h3>
            {row[1] === "" && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
