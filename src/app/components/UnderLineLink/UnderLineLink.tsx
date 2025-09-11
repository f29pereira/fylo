import type { UnderLineLinkProps } from "@/app/types";
import styles from "./UnderLineLink.module.css";

/**
 * Renders underline link with:
 * - description
 * - arrow icon
 *
 * Props are defined in {@link UnderLineLinkProps}.
 */
export default function UnderLineLink({
  linkHref,
  linkDescription,
}: UnderLineLinkProps) {
  return (
    <a className={styles.underLineLink} href={linkHref}>
      {linkDescription}

      <img
        className={styles.arrowIcon}
        src="/images/icons/icon-arrow.svg"
        alt=""
      />
      <div className={styles.underline}></div>
    </a>
  );
}
