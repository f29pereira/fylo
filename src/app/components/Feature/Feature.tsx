import type { FeatureProps } from "@/app/types";
import styles from "./Feature.module.css";
import Image from "next/image";

/**
 * Renders single feature with:
 * icon
 * title
 * description
 *
 * Props are defined in {@link FeatureProps}.
 */
export default function Feature({
  iconSrc,
  iconAlt,
  title,
  description,
}: FeatureProps) {
  return (
    <div className={`flex-col-center ${styles.featureCont}`}>
      <img src={iconSrc} alt={iconAlt} className={styles.featureImg} />

      <h2 className={`text-center ${styles.featureTitle}`}>{title}</h2>

      <p className={`text-center ${styles.featureDescription}`}>
        {description}
      </p>
    </div>
  );
}
