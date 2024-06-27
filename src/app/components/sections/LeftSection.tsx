import React from "react";
import "./Section.css";
import "./LeftSection.css";
import Section from "./Section";

const LeftSection = () => {
  return (
    <Section>
      <h2 className="strokedWhiteText">Left Section</h2>
      <p>This section does not change.</p>
    </Section>
  );
};

export default LeftSection;
