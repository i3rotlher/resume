import React from "react";
import Image from "next/image";

export const Devider = () => {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      {" "}
      <Image src="/devider.svg" alt="" fill></Image>
    </div>
  );
};
