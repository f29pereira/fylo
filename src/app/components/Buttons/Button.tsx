import type { ButtonProps } from "@/app/types";
import styles from "./Button.module.css";
import Link from "next/link";

/**
 * Renders a button
 *
 * Props are defined in {@link ButtonProps}.
 */
export default function Button({
  type = "button",
  description,
  styleClass,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styleClass ? styles[styleClass] : ""}`}
    >
      {description}
    </button>
  );
}
