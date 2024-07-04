import React, { useState } from "react";
import "./Faq.css";

import Play from "../../Components/Image/Team/google-play.png";
import Apple from "../../Components/Image/Team/apple-logo.png";

const faqData = [
  {
    question: "What types of courses does Epic-World offer?",
    answer:
      "Epic-World offers a wide variety of courses in different fields, including technology, business, design, and personal development.",
  },
  {
    question: "Are the courses self-paced?",
    answer:
      "Most of our courses only require a standard web browser and internet connection. Specific courses may require additional software, which will be mentioned in the course description.",
  },
  {
    question:
      "Do I need any special software or equipment to take the courses?",
    answer:
      "Epic-World offers a wide variety of courses in different fields, including technology, business, design, and personal development.",
  },
  {
    question: "Does Epic-World offer any group or corporate training programs?",
    answer:
      "Most of our courses only require a standard web browser and internet connection. Specific courses may require additional software, which will be mentioned in the course description.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <div
          className="d-flex align-items-center gap-3"
          style={{ paddingBottom: "20px" }}
        >
          <div className="getKnow">Get to Know </div>
          <div
            style={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(90deg, #FFFFFF 0%, rgba(153, 153, 153, 0) 100%)",
            }}
          ></div>
        </div>

        <div className="faqSection">
          <div className="left-column">
            <h1>
              <span className="gradient">Frequently</span>{" "}
              <span className="newGradient">Asked</span>
            </h1>
            <p>
              These FAQs are designed to address common questions and provide
              helpful information to prospective and current students of
              Epic-World. Feel free to reach out to us if you have any other
              questions!
            </p>
            <button className="get-started">Get Started</button>
          </div>
          <div className="right-column">
            {faqData.map((faq, index) => (
              <div key={index}>
                <div
                  className={`faq-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                </div>
                {activeIndex === index && (
                  <div className="faq-content">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="app-buttons">
          <div>
            <h3 className="better">Build Better, Build Faster</h3>
          </div>
          <div className="d-flex gap-3 flex-wrap">
            <button className="app-button">
              <img src={Play} alt="Google Play" />
              <p className="btnText">
                <span className="text">GET IT ON</span> <br />
                GOOGLE PLAY
              </p>
            </button>
            <button className="app-button">
              <img src={Apple} alt="App Store" />
              <p className="btnText">
                <span className="text">DOWNLOAD ON THE</span> <br /> APP STORE
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
