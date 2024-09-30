"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Section from "./Section";
import style from "../../styles/sections/RightSection.module.css";
import Overview from "../tabs/overview/Overview";
import QuestLog from "../tabs/questlog/Questlog";
import Skills from "../tabs/skills/Skills";

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
        <div className={style.heading}>
          <h2 className={"strokedWhiteTextHighContrast"}>
            {link_list[currentTabIdx].name}
          </h2>
          <svg
            width="1028"
            height="76"
            viewBox="0 0 1028 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25));" }}
          >
            <path
              d="M9 5C9 2.23858 11.2386 0 14 0H1014C1016.76 0 1019 2.23858 1019 5V27L1028 33V43L1019 49V71C1019 73.7614 1016.76 76 1014 76H14C11.2386 76 9 73.7614 9 71V50L0 44V34L9 28V5Z"
              fill="#865C2B"
            />
          </svg>
          <svg
            width="1028"
            height="76"
            viewBox="0 0 1028 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="9" width="1010" height="76" rx="5" fill="#865C2B" />
            <rect
              x="16.0005"
              y="10"
              width="996"
              height="56"
              stroke="#BC894D"
              strokeWidth="4"
            />
            <path d="M0 39V34L15 24V54L0 44V39Z" fill="#BC894D" />
            <path d="M1028 38V33L1013 23V53L1028 43V38Z" fill="#BC894D" />
          </svg>
        </div>
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
