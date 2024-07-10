import React from "react";
import Image from "next/image";

export const Devider = () => {
  return (
    <div style={{ height: "100%", display: "flex" }}>
      <div
        style={{
          position: "relative",
          height: "100%",
          flex: "1",
          objectFit: "contain",
          display: "flex",
          alignItems: "end",
        }}
      >
        <Image src="/devider/devider_twirl_tl.svg" alt="" fill></Image>
      </div>
      <div
        style={{
          position: "relative",
          height: "100%",
          flex: "32",
          width: "100%",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 737 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="pattern"
              x="0"
              y="0"
              width="737"
              height="38"
              patternUnits="userSpaceOnUse"
            >
              <path d="M0 19H737" stroke="#BC894D" strokeWidth="2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      <div
        style={{
          position: "relative",
          height: "100%",
          flex: "1",
          objectFit: "contain",
        }}
      >
        <Image src="/devider/devider_twirl_br.svg" alt="" fill></Image>
      </div>
    </div>
  );
};
