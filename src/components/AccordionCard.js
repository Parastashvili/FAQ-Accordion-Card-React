import React, { useState } from "react";
import "./AccordionCard.css";
import AccordionCardItem from "../AccordionCardItem";
import desktopLogo from "../images/illustration-woman-online-desktop.svg";
import desktopPattern from "../images/bg-pattern-desktop.svg";

function AccordionCard() {
  const [activeAccordionNumber, setActiveAccordionNumber] = useState(null);

  const items = [
    {
      itemNumber: 1,
      question: "How many team members can I invite?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
      itemNumber: 2,
      question: "What is the maximum file upload size?",
      answer:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      itemNumber: 3,
      question: "How do I reset my password?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      itemNumber: 4,
      question: "Can I cancel my subscription?",
      answer: "There are many variations of passages of Lorem Ipsum available,",
    },
    {
      itemNumber: 5,
      question: "Do you provide additional support?",
      answer:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum",
    },
  ];
  const handleClick = (accordionNumber) => {
    const expanded = document.querySelector(".expanded");
    const rotated = document.querySelector(".rotated");
    if (expanded) {
      expanded.classList.remove("expanded");
      rotated.classList.remove("rotated");
    }
    if (activeAccordionNumber === accordionNumber) {
      setActiveAccordionNumber(null);
    } else {
      setActiveAccordionNumber(accordionNumber);
      const expanding = document.getElementById(accordionNumber);
      const rotating = document.getElementById(accordionNumber + "arrow");
      expanding.classList.add("expanded");
      rotating.classList.add("rotated");
    }
  };
  return (
    <div className="cardContainer">
      <div>
        <img className="desktopPatter" src={desktopPattern} alt="logo" />
        <img className="desktopLogo" src={desktopLogo} alt="logo" />
      </div>
      <div>
        <h1 className="heading">FAQ</h1>
        {items.map((item) => (
          <AccordionCardItem
            activeAccordionNumber={activeAccordionNumber}
            handleClick={handleClick}
            itemNumber={item.itemNumber}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default AccordionCard;
