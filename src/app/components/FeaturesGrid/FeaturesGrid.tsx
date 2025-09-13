import type { FeaturesGridProps, FeatureProps } from "@/app/types";
import Feature from "../Feature/Feature";
import styles from "./FeaturesGrid.module.css";

/**
 * Renders a grid of Feature components
 *
 * Props are defined in {@link FeaturesGridProps}.
 */
export default function FeaturesGrid({ featuresList }: FeaturesGridProps) {
  return (
    <section className={styles.featuresCont}>
      <h2 className="sr-only">Fylo Features</h2>
      <div className={styles.featuresGrid}>
        {featuresList.map((feature: FeatureProps, index) => (
          <Feature
            key={index}
            iconSrc={feature.iconSrc}
            iconAlt={feature.iconAlt}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
