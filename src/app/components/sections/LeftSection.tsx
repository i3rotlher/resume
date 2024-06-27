import React from "react";
import styles from "../../styles/sections/LeftSection.module.css";
import Section from "./Section";

const LeftSection = () => {
  function name() {
    return (
      <div className={styles.nameRow}>
        <h1>Name:</h1>
        <h1 className={styles.field + " strokedWhiteTextHighContrast"}>Max</h1>
      </div>
    );
  }

  return <Section>{name()}</Section>;
};

export default LeftSection;
