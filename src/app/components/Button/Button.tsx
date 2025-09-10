import type { ButtonProps } from "@/app/types";
import styles from "./Button.module.css";

/**
 * Renders a button
 *
 * Props are defined in {@link ButtonProps}.
 */
export default function Button({ description }: ButtonProps) {
  return <button className={styles.btn}>{description}</button>;
}
