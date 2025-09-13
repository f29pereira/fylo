"use client"; //client component

import styles from "./EarlyAccess.module.css";
import Button from "../Buttons/Button";
import { useState } from "react";
import Form from "next/form";

/**
 * Renders fylo early access submition card
 */
export default function EarlyAccess() {
  //state for invalid email
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const submitEmail = (formData: FormData) => {
    const email = formData.get("email");

    //email validation
    if (typeof email === "string") {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailInvalid(!regex.test(email));
    }
  };

  return (
    <section className={`${styles.earlyAccessCont}`}>
      <div className={`${styles.contentCont}`}>
        {/*Title*/}
        <h2 className={`text-center ${styles.title}`}>
          Get early access today
        </h2>

        {/*Description*/}
        <p className={`text-center ${styles.description}`}>
          It only takes a minute to sign up and our free starter tier is
          extremly generoys. If you have any questions, our support team would
          be happy to hep you.
        </p>

        {/*Submit Form*/}
        <Form className={styles.formCont} action={submitEmail}>
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            className={styles.emailInput}
            aria-invalid={isEmailInvalid}
            aria-describedby="email-error"
          />
          <div className={styles.emailInvalidCont} aria-live="assertive">
            {isEmailInvalid ? (
              <span id="email-error" className={styles.emailInvalid}>
                Please enter a valid email address
              </span>
            ) : null}
          </div>

          <Button
            type="submit"
            description="Get Started For Free"
            styleClass="submitBtn"
          />
        </Form>
      </div>
    </section>
  );
}
