"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Overview from "../tabs/overview/overview";
import Skills from "../tabs/skills/skills";
import QuestLog from "../tabs/questlog/questlog";
import Section from "./Section";
import style from "../../styles/sections/RightSection.module.css";

const RightSection = () => {
  const [currentTabIdx, setcurrentTabIdx] = useState(0);

  const link_list = [
    { idx: 0, link: "/overview", name: "Overview" },
    { idx: 1, link: "/skills", name: "Skills" },
    { idx: 2, link: "/questlog", name: "Quest Log" },
  ];

  const next = link_list[(currentTabIdx + 1) % link_list.length];
  const prev =
    link_list[(currentTabIdx - 1 + link_list.length) % link_list.length];

  function nextTab() {
    setcurrentTabIdx(next.idx);
  }

  function prevTab() {
    setcurrentTabIdx(prev.idx);
  }

  return (
    <Section>
      <div>
        {currentTabIdx === 0 && <Overview></Overview>}
        {currentTabIdx === 1 && <Skills></Skills>}
        {currentTabIdx === 2 && <QuestLog></QuestLog>}
      </div>
      <nav>
        <Image
          onClick={prevTab}
          src="/navigationArrow.svg"
          alt={prev.name}
          layout="fit"
          className={`${style.navigationArrow} ${style.leftCenter}`}
          width={45}
          height={45}
        ></Image>
        <br />
        <Image
          onClick={nextTab}
          src="/navigationArrow.svg"
          alt={next.name}
          layout="fit"
          className={`${style.navigationArrow} ${style.rightCenter}`}
          width={45}
          height={45}
        ></Image>
        <br />
      </nav>
    </Section>
  );
};

export default RightSection;
