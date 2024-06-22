import React from "react";
import "./Section.css";
import "./LeftSection.css";
import Image from "next/image";

const LeftSection = () => {
  return (
    <div className="section container">
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
      <div className="content">
        <h2 className="strokedWhiteText">Left Section</h2>
        <p>This section does not change.</p>
      </div>
    </div>
  );
};

export default LeftSection;
