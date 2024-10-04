import Image from "next/image";
import style from "../../../styles/tabs/Overview.module.css";
import ProgressBar from "../../util/ProgressBar";
import { TextWithFrame } from "../../util/TextWithFrame";

const Overview = () => {
  return (
    <div className={style.content}>
      <div className={style.description}>
        <TextWithFrame>
          <span className={style.text}>
            Max, the Fullstack Developer, is a true master of digital realms.
            With his ability to seamlessly blend frontend and backend
            technologies, he is akin to a powerful mage proficient in both
            arcane arts and swordsmanship. His tools are not sword and shield,
            but keyboard and mouse, and his battlefield is the code.
          </span>
        </TextWithFrame>
      </div>
      <h2>Abillities:</h2>
      <div className={style.skillsRow}>
        <div className={style.skillIcon}>
          <Image src="/frontend_icon.svg" alt="" fill />
        </div>
        <div className={style.skillProgressbar}>
          <ProgressBar
            percent={70 / 100}
            label="Frontend 70/100"
            color="#7B99E7"
          />
        </div>
      </div>
      <div className={style.skillsRow}>
        <div className={style.skillIcon}>
          <Image src="/backend_icon.svg" alt="" fill />
        </div>
        <div className={style.skillProgressbar}>
          <ProgressBar
            percent={90 / 100}
            label="Backend 90/100"
            color="#CD5B58"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
