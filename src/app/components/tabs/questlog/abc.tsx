import { QuestCard, QuestCardProps } from "../../util/QuestCard";
import style from "../../../styles/tabs/Questlog.module.css";
import { Quests } from "./QuestlogData";
const QuestLog = () => {
  return (
    <div className={style.container}>
      {Quests.map((quest, index) => (
        <QuestCard {...quest} key={index} />
      ))}
    </div>
  );
};

export default QuestLog;
