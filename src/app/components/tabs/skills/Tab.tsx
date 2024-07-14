import React, { ReactNode } from "react";
import style from "../../../styles/tabs/Tab.module.css";

type AttributesProp = {
  tab: string;
  children: ReactNode;
};

export const Tab: React.FC<AttributesProp> = ({ tab, children }) => {
  return (
    <div
      className={style.backgroundImage}
      style={{
        borderBottomLeftRadius: tab === "Frontend" ? "0px" : "",
        borderBottomRightRadius: tab === "General" ? "0px" : "",
      }}
    >
      {children}
    </div>
  );
};
