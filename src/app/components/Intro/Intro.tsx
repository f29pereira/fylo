import Image from "next/image";
import styles from "./Intro.module.css";
import type { IntroProps } from "@/app/types";
import LinkButton from "../Buttons/LinkButton";

/**
 * Renders a component with:
 * - Image
 * - Title and description
 * - Background Image
 * - "Get Started" button
 *
 * Props are defined in {@link IntroProps}.
 */
export default function Intro({ title, description }: IntroProps) {
  return (
    <div className={styles.intro}>
      <div className={`flex-col-center ${styles.imgTitleCont}`}>
        {/*Intro Image*/}
        <Image
          src="/images/illustrations/illustration-intro.png"
          alt="Intro"
          width={720}
          height={534}
          className={styles.imgIntro}
        />

        {/*Background Image Mobile*/}
        <img
          src="/images/background/bg-curvy-mobile.svg"
          alt=""
          className={`${styles.introBgImg} ${styles.bgMobile}`}
        />

        {/*Intro description*/}
        <h1 className={`text-center ${styles.introTitle}`}>{title}</h1>
      </div>

      <div className={`flex-col-center ${styles.descBtnCont}`}>
        {/*Intro description*/}
        <p className={`text-center ${styles.introDescription}`}>
          {description}
        </p>

        {/*Get started button*/}
        <div className={`flex-center ${styles.introButton}`}>
          <LinkButton
            description="Get Started"
            styleClass="introBtn"
            linkHref="#"
          />
        </div>
      </div>

      {/*Background Image Desktop*/}
      <img
        src="/images/background/bg-curvy-desktop.svg"
        alt=""
        className={`${styles.introBgImg} ${styles.bgDesktop}`}
      />
    </div>
  );
}
