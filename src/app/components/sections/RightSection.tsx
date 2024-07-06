"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Skills from "../tabs/skills/Skills";
import QuestLog from "../tabs/questlog/questlog";
import Overview from "../tabs/overview/Overview";
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
      <nav>
        <Image
          onClick={prevTab}
          src="/navigationArrow.svg"
          alt={prev.name}
          className={`${style.navigationArrow} ${style.leftCenter}`}
          width={45}
          height={45}
        ></Image>
        <br />
        <Image
          onClick={nextTab}
          src="/navigationArrow.svg"
          alt={next.name}
          className={`${style.navigationArrow} ${style.rightCenter}`}
          width={45}
          height={45}
        ></Image>
        <br />
      </nav>
      <div className={style.layout}>
        <h2 className={style.heading + " strokedWhiteTextHighContrast"}>
          {link_list[currentTabIdx].name}
        </h2>
        <div className={style.content}>
          {currentTabIdx === 0 && <Overview></Overview>}
          {currentTabIdx === 1 && <Skills></Skills>}
          {currentTabIdx === 2 && <QuestLog></QuestLog>}
        </div>
      </div>
    </Section>
  );
};

export default RightSection;
