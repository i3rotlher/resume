import React, { ReactNode } from "react";
import Image from "next/image";
import style from "../../styles/util/TextWithFrame.module.css";

type TextProps = {
  children: ReactNode;
};

export const TextWithFrame: React.FC<TextProps> = ({ children }) => {
  return (
    <div className={`${style.textContainer} strokedWhiteText`}>
      <div className={`${style.paddedText}  ${style["custom-scrollbar"]}`}>
        {children}
      </div>
      <Image src="/frame_horizontal.png" alt="" fill className={style.frame} />
    </div>
  );
};
