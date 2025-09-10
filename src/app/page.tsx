import Image from "next/image";
import styles from "./page.module.css";
import Intro from "./components/Intro/Intro";

export default function Home() {
  return (
    <main className={styles.homeBg}>
      <Intro
        title="All your files in one secure location, accessible anywhere."
        description="Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers."
      />
    </main>
  );
}
