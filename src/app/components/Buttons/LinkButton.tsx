import type { LinkButtonProps } from "@/app/types";
import styles from "./Button.module.css";
import Link from "next/link";

/**
 * Renders a Link styled like a button
 *
 * Props are defined in {@link LinkButtonProps}.
 */
export default function LinkButton({
  description,
  styleClass,
  linkHref,
}: LinkButtonProps) {
  return (
    <Link
      className={`${styles.btn} ${styleClass ? styles[styleClass] : ""}`}
      href={linkHref}
    >
      {description}
    </Link>
  );
}
