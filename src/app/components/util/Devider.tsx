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
        <Image src="/devider/devider_twirl_tr.svg" alt="" fill></Image>
      </div>
      <div
        style={{
          position: "relative",
          height: "100%",
          flex: "32",
        }}
      >
        <div
          style={{
            background: "url(/devider/devider_middle.svg)",
            height: "100%",
            width: "100%",
            objectFit: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "repeat-x",
          }}
        ></div>
      </div>
      <div
        style={{
          position: "relative",
          height: "100%",
          flex: "1",
          objectFit: "contain",
        }}
      >
        <Image src="/devider/devider_twirl_bl.svg" alt="" fill></Image>
      </div>
    </div>
  );
};
