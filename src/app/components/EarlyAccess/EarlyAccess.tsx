"use client"; //client component

import styles from "./EarlyAccess.module.css";
import Button from "../Button/Button";
import { useState } from "react";

/**
 * Renders fylo early access submition card
 */
export default function EarlyAccess() {
  //email value
  const [email, setEmail] = useState("");
  //state for invalid email
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const validateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setIsEmailInvalid(!regex.test(event.target.value));
  };

  return (
    <section className={`${styles.earlyAccessCont}`}>
      <div className={`flex-col-center ${styles.contentCont}`}>
        {/*Title*/}
        <h2 className={`text-center ${styles.title}`}>
          Get early access today
        </h2>

        {/*Description*/}
        <p className={"text-center"}>
          It only takes a minute to sign up and our free starter tier is
          extremly generoys. If you have any questions, our support team would
          be happy to hep you.
        </p>

        {/*Submit Form*/}
        <form className={styles.formCont} action="">
          <input
            type="email"
            placeholder="email@example.com"
            className={styles.emailInput}
            onChange={(event) => {
              setEmail(event.target.value);
              validateEmail(event);
            }}
          />

          {isEmailInvalid ? (
            <span className={styles.emailInvalid}>
              Please enter a valid email address
            </span>
          ) : null}

          <Button description="Get Started For Free" />
        </form>
      </div>
    </section>
  );
}
