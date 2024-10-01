import React, { useRef, useState } from "react";
import Image from "next/image";
import style from "../../styles/util/QuestCard.module.css";

export type QuestCardProps = {
  from: string;
  to: string;
  name: string;
  company: string;
  city: string;
  country: string;
  icon: string;
  active: boolean;
  keyResponsibilities: string[];
  skills: string[];
  sidenote: string;
};

export const QuestCard: React.FC<QuestCardProps> = ({
  from,
  to,
  name,
  company,
  city,
  country,
  icon,
  active,
  keyResponsibilities,
  skills,
  sidenote,
}) => {
  const [isOpen, setOpen] = useState(false);
  const contentEl = useRef<HTMLDivElement>(null);

  const renderDropDown = () => {
    return (
      <div
        className={`${style.dropDown} ${
          isOpen ? style.showDropDown : style.hideDropDown
        }`}
      >
        <h3 className={style.dropDownHeader}>Key Responsibilities:</h3>
        <ul className={style.keyResponsibilitiesList}>
          {keyResponsibilities.map((kr, index) => (
            <li key={index}>
              <h3 className={style.dropDownListItemText}>{kr}</h3>
            </li>
          ))}
        </ul>
        <div className={style.dropDownSkillsContainer}>
          <h3 className={style.dropDownHeader}>Skills:</h3>
          &nbsp;
          <div className={style.dropDownSkills}>
            <h3 style={{ textAlign: "justify" }}>{skills.join(", ")}</h3>
          </div>
        </div>
        {sidenote.length > 0 && <h3 className={style.location}>*{sidenote}</h3>}
      </div>
    );
  };

  const renderCard = () => {
    return (
      <div className={style.container} onClick={() => setOpen(!isOpen)}>
        <div className={style.dotColumn}>
          <Image
            src={active ? "/quests/activeDot.svg" : "/quests/doneDot.svg"}
            alt={active ? "activeQuest" : "doneQuest"}
            fill
          />
        </div>
        <div className={style.detailsColumn}>
          <div className={style.timeRow}>
            <h3 className={style.from}>{from}&nbsp;</h3>
            {(active && (
              <h3 className={style.activeQuest}>[Active Quest]</h3>
            )) || <h3 className={style.completedQuest}>[Completed {to}]</h3>}
          </div>
          <h1 className="strokedWhiteText">{name}</h1>
          <div className={style.companyRow}>
            <h3 className={style.company}>{company}&nbsp;</h3>
            <h3 className={style.location}>
              [{city}, {country}]
            </h3>
          </div>
        </div>
        <div className={style.iconColumn}>
          <Image src={"/quests/" + `${icon}`} alt={name} fill />
        </div>
        <div className={style.arrowColumn}>
          <Image
            src="/quests/dropDownArrow.svg"
            alt={name}
            fill
            className={`${isOpen ? style.rotated : ""}`}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderCard()}

      <div
        ref={contentEl}
        style={
          isOpen
            ? { height: contentEl.current?.scrollHeight }
            : { height: "0px" }
        }
        className={`${style["accordion-item"]} ${
          !isOpen ? style.collapsed : ""
        }`}
      >
        {renderDropDown()}
      </div>
    </div>
  );
};
