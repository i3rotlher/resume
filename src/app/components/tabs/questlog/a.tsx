import { QuestCard } from "../../util/QuestCard";
import style from "../../../styles/tabs/Questlog.module.css";
import { Quests } from "./QuestlogData";
const QuestLog = () => {
  return (
    <div className={style.scrollContainer}>
      <div className={style.hideScrollBar}>
        <div className={style.questlogContainer}>
          {Quests.map((quest, index) => (
            <QuestCard {...quest} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestLog;
