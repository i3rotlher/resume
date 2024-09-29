import Image from "next/image";
import React, { ReactNode } from "react";
import styles from "../../styles/util/AttributesRow.module.css";
import { AttributeData } from "../tabs/skills/AttributesData";

type AttributesRow = { attributes: AttributeData[] };

function renderAttribute(attribute: AttributeData): ReactNode {
  return (
    <div className={styles.attribute}>
      <div className={styles.logoContainer}>
        <Image
          src={attribute.icon}
          fill
          alt={attribute.name}
          style={{ objectFit: "contain" }}
        />
      </div>
      <h3>{attribute.name}</h3>
    </div>
  );
}

export const AttributesRow: React.FC<AttributesRow> = ({ attributes }) => {
  return (
    <div className={styles.row}>
      {attributes.map((attr) => renderAttribute(attr))}
    </div>
  );
};
