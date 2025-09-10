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
