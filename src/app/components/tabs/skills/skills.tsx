import SkillLevels from "./SkillLevels";
import style from "../../../styles/tabs/Skills.module.css";
import { Attributes } from "./Attributes";
import { Devider } from "../../util/Devider";
import { useState } from "react";
import { TextWithFrame } from "../../util/TextWithFrame";
import { Tab } from "./Tab";

export const Tabs = {
  frontend: "Frontend",
  backend: "Backend",
  general: "General",
};

const Skills = () => {
  const [tab, setTab] = useState(Tabs.frontend);

  function tabUpperContent() {
    switch (tab) {
      case Tabs.frontend:
        return <SkillLevels frontend={true} />;
      case Tabs.backend:
        return <SkillLevels frontend={false} />;
      case Tabs.general:
        return (
          <div className={`${style.generalText} strokedWhiteText`}>
            <h2
              style={{ textAlign: "justify" }}
            >{`I'm a keen observer who never misses a detail, which helps me make
            smart decisions quickly. I'm great at keeping everyone in the loop
            with clear and friendly communication. Juggling multiple tasks at
            once is my specialty, and I pick up new skills fast. I thrive in
            team settings and love working with others to get things done. You
            can always count on me to be dependable and get the job done right.`}</h2>
          </div>
        );
      default:
        return <></>;
    }
  }

  return (
    <div className={style.layout}>
      <Tab tab={tab}>
        <h1 style={{ color: "var(--light-brown-accent)" }}>{tab}</h1>
        {tabUpperContent()}

        <div style={{ height: "50px" }}>
          <Devider />
        </div>
        <div className={style.attributes}>
          <Attributes tab={tab} />
        </div>
      </Tab>
      <div className={`${style.tabsRow} strokedWhiteText`}>
        <div
          onClick={() => {
            setTab(Tabs.frontend);
          }}
          style={{ zIndex: tab === Tabs.frontend ? 2 : "auto" }}
          className={`${style.tab} ${
            tab !== Tabs.frontend ? style.inactiveSideTabLeft : ""
          }`}
        >
          <h3>{Tabs.frontend}</h3>
        </div>
        <div
          onClick={() => {
            setTab(Tabs.backend);
          }}
          style={{ zIndex: tab === Tabs.backend ? 2 : "auto" }}
          className={style.tab}
        >
          <h3>{Tabs.backend}</h3>
        </div>
        <div
          onClick={() => {
            setTab(Tabs.general);
          }}
          style={{ zIndex: tab === Tabs.general ? 2 : "auto" }}
          className={`${style.tab} ${
            tab !== Tabs.general ? style.inactiveSideTabRight : ""
          }`}
        >
          <h3>{Tabs.general}</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
