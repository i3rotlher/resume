import Image from "next/image";
import style from "../../../styles/tabs/Overview.module.css";
import ProgressBar from "../../util/ProgressBar";

const Overview = () => {
  return (
    <div className={style.content}>
      <div className={style.textScrollWrapper}>
        <div
          className={`${style.generalText} ${style["custom-scrollbar"]} strokedWhiteText`}
        >
          <span
            className={style.text}
          >{`I'm a keen observer who never misses a detail, which helps me make
            smart decisions quickly. I'm great at keeping everyone in the loop
            with clear and friendly communication. Juggling multiple tasks at
            once is my specialty, and I pick up new skills fast. I thrive in
            team settings and love working with others to get things done. You
            can always count on me to be dependable and get the job done right.`}</span>
        </div>
        <Image
          src="/frame_horizontal.png"
          alt=""
          fill
          className={style.frame}
        />
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
            color="var(--bright-background)"
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
            color="var(--bright-background)"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
