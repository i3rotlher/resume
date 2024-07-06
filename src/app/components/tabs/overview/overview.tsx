import style from "../../../styles/tabs/overview.module.css";
import ProgressBar from "../../util/ProgressBar";
import { TextWithFrame } from "../../util/TextWithFrame";
const Overview = () => {
  return (
    <div className={style.content}>
      <div className={style.description}>
        <TextWithFrame>
          <h2 style={{ textAlign: "justify" }}>
            Max, the Fullstack Developer, is a true master of digital realms.
            With his ability to seamlessly blend frontend and backend
            technologies, he is akin to a powerful mage proficient in both
            arcane arts and swordsmanship. His tools are not sword and shield,
            but keyboard and mouse, and his battlefield is the code.
          </h2>
        </TextWithFrame>
      </div>
      <div className={style.skills}>
        <h2>Attributes:</h2>
        <ProgressBar
          percent={70 / 100}
          label="Frontend 70/100"
          color="#CD5B58"
        />
        <ProgressBar
          percent={90 / 100}
          label="Backend 90/100"
          color="#7B99E7"
        />
      </div>
    </div>
  );
};

export default Overview;
