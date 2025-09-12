import Image from "next/image";
import styles from "./page.module.css";
import Intro from "./components/Intro/Intro";
import FeaturesGrid from "./components/FeaturesGrid/FeaturesGrid";
import type { FeatureProps } from "./types";
import About from "./components/About/About";
import QuotesList from "./components/QuotesList/QuotesList";
import { QuoteProps } from "./types";
import EarlyAccess from "./components/EarlyAccess/EarlyAccess";

export default function Home() {
  //List of Feature components
  const featuresList: FeatureProps[] = [
    {
      iconSrc: "images/icons/icon-access-anywhere.svg",
      iconAlt: "Icon showing computer screen and smartphone",
      title: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      iconSrc: "images/icons/icon-security.svg",
      iconAlt: "Icon showing valid security badge",
      title: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      iconSrc: "images/icons/icon-collaboration.svg",
      iconAlt: "Icon showing file sharing between a group of people",
      title: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      iconSrc: "images/icons/icon-any-file.svg",
      iconAlt: "Icon showing folder with files",
      title: "Store any type of file",
      description:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];

  //List of Quote components
  const quotesList: QuoteProps[] = [
    {
      quote:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      userImgSrc: "images/quotes/profile-1.jpg",
      userName: "Satish Patel",
      userRole: "Founder & CEO, Huddle",
    },
    {
      quote:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      userImgSrc: "images/quotes/profile-2.jpg",
      userName: "Bruce McKenzie",
      userRole: "Founder & CEO, Huddle",
    },
    {
      quote:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      userImgSrc: "images/quotes/profile-3.jpg",
      userName: "Iva Boyd",
      userRole: "Founder & CEO, Huddle",
    },
  ];

  return (
    <main className={styles.homeBg}>
      <Intro
        title="All your files in one secure location, accessible anywhere."
        description="Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers."
      />
      <FeaturesGrid featuresList={featuresList} />
      <About
        title="Stay productive, wherever you are"
        content={
          <>
            <p className="mb-rem">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="mb-rem">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </>
        }
      />
      <QuotesList quotesList={quotesList} />
      <EarlyAccess />
    </main>
  );
}
