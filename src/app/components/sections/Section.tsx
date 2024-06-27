import React, { ReactNode } from "react";
import Image from "next/image";

type SectionProps = {
  children: ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className="section container">
      <div className="corners">
        <div className="corner top-left">
          <Image src="/corner.svg" alt="" layout="fill" />
        </div>
        <div className="corner top-right">
          <Image src="/corner.svg" alt="" layout="fill" />
        </div>
        <div className="corner bottom-left">
          <Image src="/corner.svg" alt="" layout="fill" />
        </div>
        <div className="corner bottom-right">
          <Image src="/corner.svg" alt="" layout="fill" />
        </div>
      </div>
      {children}
    </section>
  );
};

export default Section;
