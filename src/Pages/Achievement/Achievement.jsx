import React from "react";
import "./Achievement.css";
import { FaArrowDown } from "react-icons/fa";
const Achievement = () => {
  return (
    <>
      <div className="container">
        <div className="achievement-board">
          <h1 className="achieve">Achievement</h1>
          <p className="description">
            EPIC WORLD takes pride in the accomplishments of our students and
            the recognition our institution has received over the years. Our
            achievements are a testament to our commitment to excellence in
            education.
          </p>
          <div className="graph">
            <div className="bar bar-1"></div>
            <div className="bar bar-2"></div>
            <div className="bar bar-3"></div>
            <div className="bar bar-4"></div>
          </div>
          <div className="arrow-down">
            <FaArrowDown className="downArrow" />
          </div>
          <div className="stats">
            <div className="stat-item">
              <h2>60</h2>
              <p>TEACHER</p>
            </div>
            <div className="stat-item">
              <h2>40</h2>
              <p>CORSES</p>
            </div>
            <div className="stat-item">
              <h2>900</h2>
              <p>STUDENTS</p>
            </div>
            <div className="stat-item">
              <h2>3675</h2>
              <p>SATISFIED CLIENT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievement;
