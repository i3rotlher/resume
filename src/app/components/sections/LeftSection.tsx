"use client";

import React from "react";
import styles from "../../styles/sections/LeftSection.module.css";
import Section from "./Section";
import Image from "next/image";
import ProgressBar from "../util/ProgressBar";
import { HoverInfo } from "../util/HoverInfo";

const birthdate = "1998-12-23";

const LeftSection = () => {
  function nameRow() {
    return (
      <div className={`${styles.row}`}>
        <h2 className={styles.title}>Name:</h2>
        <h2 className={styles.field + " strokedWhiteTextHighContrast"}>Max</h2>
      </div>
    );
  }

  function levelRow() {
    const text = [
      `Current Level: ${calculateAge()}.`,
      ``,
      `Days untill next Level:`,
      `${daysUntilNextBirthday()}  XP`,
    ];
    return (
      <div className={`${styles.levelRow}`}>
        <h3 className={styles.levelTitle}>Level:</h3>
        <div style={{ width: "100%" }}>
          <HoverInfo hoverText={text}>
            <ProgressBar
              percent={percentageOfYearCompleted()}
              label={`${calculateAge()}`}
              color={"#e7d95f"}
            ></ProgressBar>
          </HoverInfo>
        </div>
      </div>
    );
  }

  function classRow() {
    return (
      <div className={`${styles.row}`}>
        <h3 className={styles.title}>Class:</h3>
        <h3 className={styles.field + " strokedWhiteTextHighContrast"}>
          Fullstack
        </h3>
      </div>
    );
  }

  function nationRow() {
    return (
      <div className={`${styles.row}`}>
        <h3 className={styles.title}>Nation:</h3>
        <h3 className={styles.field + " strokedWhiteTextHighContrast"}>
          German
        </h3>
      </div>
    );
  }

  function uglyFace() {
    return (
      <div className={styles.uglyFace}>
        <HoverInfo hoverText={["That's me."]}>
          <Image src="/uglyFace.png" alt="" fill />
        </HoverInfo>
      </div>
    );
  }

  function percentageOfYearCompleted(): number {
    return parseFloat(((365 - daysUntilNextBirthday()) / 365).toFixed(2));
  }

  function calculateAge() {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  function daysUntilNextBirthday() {
    const today = new Date();
    const birthDate = new Date(birthdate);

    birthDate.setFullYear(today.getFullYear());

    if (today > birthDate) {
      birthDate.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = birthDate.getTime() - today.getTime();

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  }

  const showPdf = () => {
    window.open("/CV_Max_Kuhwald.pdf", "_blank", "noopener,noreferrer");
  };

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
          {uglyFace()}
          <Image src="/frame_vertical.png" alt="" fill />
        </div>
        <div className={styles.downloadCV}>
          <h3 className={styles.buttonStyle} onClick={() => showPdf()}>
            <Image src="/download.svg" alt="" height={20} width={20}></Image>{" "}
            Download CV
          </h3>
        </div>
      </div>
    </Section>
  );
};

export default LeftSection;
