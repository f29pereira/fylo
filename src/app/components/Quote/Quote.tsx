import type { QuoteProps } from "@/app/types";
import styles from "./Quote.module.css";

/**
 * Renders single user quote with:
 * quote text
 * user image, name and role
 *
 * Props are defined in {@link QuoteProps}.
 */
export default function Quote({
  quote,
  userImgSrc,
  userName,
  userRole,
}: QuoteProps) {
  return (
    <div className={styles.quoteCont}>
      {/*Quote*/}
      <p className={styles.quote}>{quote}</p>

      {/*User Info*/}
      <div className={styles.userCont}>
        <img
          className={styles.userImg}
          src={userImgSrc}
          alt={`${userName} picture`}
        />
        <div>
          <h2 className={styles.userName}>{userName}</h2>
          <span className={styles.userRole}>{userRole}</span>
        </div>
      </div>
    </div>
  );
}
