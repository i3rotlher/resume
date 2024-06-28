import React from "react";
import styles from "../../styles/sections/LeftSection.module.css";
import Section from "./Section";
import Image from "next/image";
import ProgressBar from "../util/ProgressBar";

const LeftSection = () => {
  function nameRow() {
    return (
      <div className={`${styles.row}`}>
        <h1 className={styles.title}>Name:</h1>
        <h1 className={styles.field + " strokedWhiteTextHighContrast"}>Max</h1>
      </div>
    );
  }

  function levelRow() {
    return (
      <div className={`${styles.levelRow}`}>
        <h2 className={styles.levelTitle}>Level:</h2>
        <ProgressBar percent={daysSinceLastDec23()} label={"25"}></ProgressBar>
      </div>
    );
  }

  function classRow() {
    return (
      <div className={`${styles.row}`}>
        <h2 className={styles.title}>Class:</h2>
        <h2 className={styles.field + " strokedWhiteTextHighContrast"}>
          Fullstack Developer
        </h2>
      </div>
    );
  }

  function nationRow() {
    return (
      <div className={`${styles.row}`}>
        <h2 className={styles.title}>Nation:</h2>
        <h2 className={styles.field + " strokedWhiteTextHighContrast"}>
          German
        </h2>
      </div>
    );
  }

  function uglyFace() {
    return <div className={styles.uglyFace}></div>;
  }

  function daysSinceLastDec23(): number {
    const now: Date = new Date();
    const currentYear: number = now.getFullYear();
    let lastDec23: Date = new Date(currentYear - 1, 11, 23); // Last year's Dec 23rd

    if (now >= new Date(currentYear, 11, 23)) {
      // If the current date is on or after this year's Dec 23rd
      lastDec23.setFullYear(currentYear); // Use this year's Dec 23rd
    }

    const nextDec23: Date = new Date(lastDec23.getFullYear() + 1, 11, 23); // Next Dec 23rd
    const daysInYear: number =
      (nextDec23.getTime() - lastDec23.getTime()) / (1000 * 60 * 60 * 24); // Total days between the two Dec 23rds
    const daysCompleted: number =
      (now.getTime() - lastDec23.getTime()) / (1000 * 60 * 60 * 24); // Days completed since last Dec 23rd

    const result: number = daysCompleted / daysInYear;
    return parseFloat(result.toFixed(2));
  }

  return (
    <Section>
      <div className={styles.content}>
        <div className={styles.fieldsContainer}>
          {nameRow()}
          {levelRow()}
          {classRow()}
          {nationRow()}
        </div>
        <div className={styles.uglyFaceContainer}>
          <Image src="/frame_vertical.png" alt="" fill />
          {uglyFace()}
        </div>
      </div>
    </Section>
  );
};

export default LeftSection;
