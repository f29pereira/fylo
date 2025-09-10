import { ReactNode } from "react";

/**
 * Props for the Intro component
 */
export type IntroProps = {
  //Intro title
  title: string;
  //Intro description
  description: string;
};

/**
 * Props for the Button component
 */
export type ButtonProps = {
  //Button description (text / link)
  description: ReactNode;
};

/**
 * Props for the Feature component
 */
export type FeatureProps = {
  //Feature icon source
  iconSrc: string;
  //Feature icon alternative text
  iconAlt: string;
  //Feature title
  title: string;
  //Feature description
  description: string;
};

/**
 * Props for the FeaturesGrid component
 */
export type FeaturesGridProps = {
  //List of Feature components
  featuresList: FeatureProps[];
};
