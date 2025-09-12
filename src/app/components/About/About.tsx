import type { AboutProps } from "@/app/types";
import styles from "./About.module.css";
import Image from "next/image";
import UnderLineLink from "../UnderLineLink/UnderLineLink";

/**
 * Renders about section with:
 * - image
 * - title
 * - text content
 * - link
 *
 * Props are defined in {@link AboutProps}.
 */
export default function About({ title, content }: AboutProps) {
  return (
    <section className={styles.aboutCont}>
      <Image
        src="images/illustrations/illustration-stay-productive.png"
        alt="Three people having a conversation with speech bubbles"
        width={615}
        height={465}
        className={styles.abouImg}
      />
      <div>
        <h2 className={` ${styles.aboutTitle}`}>{title}</h2>
        <div className={styles.contentCont}>{content}</div>
        <UnderLineLink linkHref="#" linkDescription="See how Fylo works" />
      </div>
    </section>
  );
}
