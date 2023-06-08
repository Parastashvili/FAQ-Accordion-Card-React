import React, { useState } from "react";
import styles from "./AccordionCard.module.css";
import AccordionCardItem from "../AccordionCardItem";

function AccordionCard() {
  const [activeAccordionNumber, setActiveAccordionNumber] = useState(null);

  const items = [
    {
      itemNumber: 1,
      question: "რა არის სტაბილური კოინი?",
      answer:
        "სტაბილური კოინი არის კრიპტოვალუტა, რომლის ღირებულება შესაბამისი ქვეყნის ეროვნული ვალუტის ტოლია",
    },
    {
      itemNumber: 2,
      question: "რამდენია ტრანზაქციის მინიმალური ლიმიტი?",
      answer: "მინიმალური ლიმიტი: 5 აშშ დოლარი/USDT/USDC/BUSC",
    },
    {
      itemNumber: 3,
      question:
        "რომელ ბანკში შემიძლია სტანდარტული ვალუტის (ლარი/აშშ დოლარი) მიღება?",
      answer:
        "სტანდარტული ვალუტა (ლარი/აშშ დოლარი) ჩაგერიცხებათ თქვენ მიერ მითითებული საქართველოს ბანკის ანგარიშის ნომერზე (IBAN-ზე).",
    },
    {
      itemNumber: 4,
      question:
        "როდის და რომელი კურსის მიხედვით ხდება მოთხოვნილი თანხის ლარში ჩარიცხვა?",
      answer:
        "მოთხოვნილი თანხის ლარში ჩარიცხვა ხდება იმ შემთხვევაში, თუ მომხმარებელი ელექტრონული საფულის ერთჯერადი მისამართის გენერირების დროს მიუთითებს ლარის ანგარიშის ნომერს (IBAN-ს). აშშ დოლარიდან ლარში კონვერტაცია კი ხდება საქართველოს ბანკის მიერ დადგენილი კურსის მიხედვით.",
    },
    {
      itemNumber: 5,
      question: "როგორ გამოვიყენო რეფერალური კოდი?",
      answer:
        "რეფერალური კოდის მეშვეობით ერთგული მომხმარებლები აზიარებენ ინფორმაციას ჩვენს შესახებ, ჩვენ კი მათ ჩვენსავე ტოკენით ვაჯილდოვებთ. დეტალური ინფორმაცია მალე გამოქვეყნდება.",
    },
    {
      itemNumber: 6,
      question: "მსურს ექაუნთის წაშლა/დეაქტივაცია",
      answer: "აღნიშნული მოთხოვნა მოგვწერეთ შიდა პანელში",
    },
  ];
  const handleClick = (accordionNumber) => {
    activeAccordionNumber === accordionNumber
      ? setActiveAccordionNumber(null)
      : setActiveAccordionNumber(accordionNumber);
  };
  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.heading}>FAQ</h1> 
      {items.map((item)=>(<AccordionCardItem
        activeAccordionNumber={activeAccordionNumber}
        handleClick={handleClick}
        itemNumber={item.itemNumber}
        question={item.question}
        answer={item.answer}
      />))}
      
    </div>
  );
}

export default AccordionCard;
