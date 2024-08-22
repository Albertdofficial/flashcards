import React, { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <Question q={question} key={question.id} />
      ))}
    </div>
  );
}

function Question({ q }) {
  const [ID, setID] = useState(0);

  function handleClick(sid) {
    if(!ID){
      setID(sid);
      // console.log(ID);
    }else{
      setID(0)
    }
  }

  return (
    <div
      className=""
      onClick={() => handleClick(q.id)}
      style={{
        backgroundColor: q.id === ID ? "skyblue" : "white",
        color: q.id === ID ? "white" : "black",
      }}
    >
      {q.id === ID ? <span>{q.answer} </span> : <span>{q.question} </span>}
    </div>
  );
}
