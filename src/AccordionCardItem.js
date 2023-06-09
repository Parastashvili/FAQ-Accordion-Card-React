import styles from "./AccordionCardItem.module.css";
import arrow from "./images/icon-arrow-down.svg";
export default function AccordionCardItem(props) {
  const { handleClick, activeAccordionNumber, itemNumber, question, answer } =
    props;
  return (
    <div
      onClick={() => {
        handleClick(itemNumber);
      }}
      className={styles.question}
    >
      <div className={styles.questionFlex} id={itemNumber}>
        {question}
        <img src={arrow} alt="indicator" id={itemNumber+"arrow"} />
      </div>
      {activeAccordionNumber === itemNumber ? (
        <p className={styles.answer}>{answer}</p>
      ) : null}
    </div>
  );
}
