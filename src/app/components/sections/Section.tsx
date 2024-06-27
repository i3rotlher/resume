import React, { ReactNode } from "react";
import Image from "next/image";
import style from "../../styles/sections/Section.module.css";

type SectionProps = {
  children: ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className={style.section}>
      <div className={style.corners}>
        <div className={style["top-left"]}>
          <Image src="/corner.svg" alt="" layout="fill" />
        </div>
        <div className={style["top-right"]}>
          <Image src="/corner.svg" alt="" layout="fill" />
        </div>
        <div className={style["bottom-left"]}>
          <Image src="/corner.svg" alt="" layout="fill" />
        </div>
        <div className={style["bottom-right"]}>
          <Image src="/corner.svg" alt="" layout="fill" />
        </div>
      </div>
      {children}
    </section>
  );
};

export default Section;
