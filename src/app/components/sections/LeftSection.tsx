import React from "react";
import styles from "../../styles/sections/LeftSection.module.css";
import Section from "./Section";
import Image from "next/image";

const LeftSection = () => {
  function nameRow() {
    return (
      <div className={styles.nameRow}>
        <h1>Name:</h1>
        <h1 className={styles.field + " strokedWhiteTextHighContrast"}>Max</h1>
      </div>
    );
  }

  function levelRow() {
    return (
      <div className={styles.levelRow}>
        <h2>Level:</h2>
        <h2>here is going to the Progressbar</h2>
      </div>
    );
  }

  function classRow() {
    return (
      <div className={styles.nameRow}>
        <h2>Class:</h2>
        <h2 className={styles.field + " strokedWhiteTextHighContrast"}>
          Fullstack Developer
        </h2>
      </div>
    );
  }

  function nationRow() {
    return (
      <div className={styles.nameRow}>
        <h2>Nation:</h2>
        <h2 className={styles.field + " strokedWhiteTextHighContrast"}>
          German
        </h2>
      </div>
    );
  }

  return (
    <Section>
      <div className={styles.content}>
        {nameRow()}
        {levelRow()}
        {classRow()}
        {nationRow()}
        <div className={styles.uglyFaceContainer}>
          <Image
            src="/uglyFace.png"
            alt="Handsome Boy"
            fill={true}
            style={{ objectFit: "contain" }}
            layout="resposive"
          />
        </div>
      </div>
    </Section>
  );
};

export default LeftSection;
