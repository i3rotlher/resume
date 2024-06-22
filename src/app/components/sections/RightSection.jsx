"use client";
import React from "react";
import "./Section.css";
import "./RightSection.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RightSection = ({ children }) => {
  const link_list = [
    { idx: 0, link: "/questlog", name: "Quest Log" },
    { idx: 1, link: "/skills", name: "Skills" },
    { idx: 2, link: "/overview", name: "Overview" },
  ];

  const path = usePathname();

  const currentIndex = link_list.findIndex((item) => item.link === path);

  const back =
    link_list[(currentIndex - 1 + link_list.length) % link_list.length];
  const forward =
    link_list[(currentIndex + 1 + link_list.length) % link_list.length];

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
      <nav>
        <Link href={back.link}>
          <Image
            src="/navigationArrow.svg"
            alt=""
            layout="fit"
            className="navigationArrow leftCenter"
            width={45}
            height={45}
          ></Image>
        </Link>
        <br />
        <Link href={forward.link}>
          <Image
            src="/navigationArrow.svg"
            alt=""
            layout="fit"
            className="navigationArrow rightCenter"
            width={45}
            height={45}
          ></Image>
        </Link>
        <br />
      </nav>
      {children}
    </div>
  );
};

export default RightSection;
