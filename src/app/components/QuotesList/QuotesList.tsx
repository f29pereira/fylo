import type { QuoteProps, QuotesListProps } from "@/app/types";
import styles from "./QuotesList.module.css";
import Quote from "../Quote/Quote";

/**
 * Renders a list of Quote components
 *
 * Props are defined in {@link QuotesListProps}.
 */
export default function QuotesList({ quotesList }: QuotesListProps) {
  return (
    <section>
      <div className={styles.quotesListCont}>
        <img
          className={styles.quoteIcon}
          src="/images/quotes/bg-quotes.png"
          alt=""
        />
        <div className={styles.quotesCont}>
          {quotesList.map((quote: QuoteProps, index) => (
            <Quote
              key={index}
              quote={quote.quote}
              userImgSrc={quote.userImgSrc}
              userName={quote.userName}
              userRole={quote.userRole}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
