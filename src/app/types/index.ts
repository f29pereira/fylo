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
  //Button type
  type?: "button" | "submit" | "reset";
  //Button description
  description: string;
  //style class
  styleClass?: string;
};

/**
 * Props for the LinkButton component
 */
export type LinkButtonProps = {
  //Link description
  description: string;
  //style class
  styleClass?: string;
  //link
  linkHref: string;
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

/**
 * Props for the About component
 */
export type AboutProps = {
  //About title
  title: string;
  //About content elements
  content: ReactNode;
};

/**
 * Props for the UnderLineLink component
 */
export type UnderLineLinkProps = {
  //link href
  linkHref: string;
  //link description
  linkDescription: string;
};

/**
 * Props for the Quote component
 */
export type QuoteProps = {
  //quote
  quote: string;
  //user image source
  userImgSrc: string;
  //user name
  userName: string;
  //user role
  userRole: string;
};

/**
 * Props for the QuoteList component
 */
export type QuotesListProps = {
  //List of Quote components
  quotesList: QuoteProps[];
};
