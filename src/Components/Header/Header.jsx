import React from "react";

import "./Header.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "../Image/epiclogo.svg";
import CardOne from "../Image/cardimage.svg";
import CardFour from "../Image/certificate.svg";
import CardThree from "../Image/certified.svg";
import CardTwo from "../Image/library.svg";
function Header() {
  return (
    <>
      <section>
        <div className="container">
          <div className="nav">
            <div className="logo">
              <div className="companylogo">
                <figure>
                  <img src={logo} alt="" />
                </figure>
              </div>
              <div className="header">
                <div className="list">
                  <ul class="navlinks">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Login</li>
                    <li>Registration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="searchbar">
              <form action="">
                <input type="search" />
              </form>
            </div>
          </div>
        </div>
        <section className="herosection">
          <div className="container">
            <div className="wrappersection">
              <h1 className="text-center epicWorldHeader">
                <span class="gradient">Welcome</span> To Epic World
              </h1>
              <p className="text-center epicWorldPara">
                Welcome to EPIC WORLD, We are committed to providing a seamless
                blend of online and offline education solution that empower
                learners of all ages to unlock their potential.
              </p>
              <div className="text-center buttonsection">
                <button class="logInBtn">Login</button>
                <button class="logInBtn">Register</button>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section>
        <div className="container">
          <div className="cards">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={CardOne}
                className="custom-card-img"
              />
              <Card.Body>
                <Card.Title class="cardHeader">Trending Courses</Card.Title>
                <Card.Text className="cardpara">
                  EPIC WORLD offers a range of trending courses that are
                  carefully curated to meet the demands of the ever-evolving job
                  market. Whether you'reinterested in digital technology,
                  business management, or creative arts.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={CardTwo}
                className="custom-card-img"
              />
              <Card.Body>
                <Card.Title class="cardHeader">Books & Library</Card.Title>
                <Card.Text className="cardpara">
                  Our extensive digital library is a way to a world of
                  knowledge. Whether you're accessing resources online or
                  visiting our physical library, you'll find a vast collection
                  of books, research materials, and educational tools to support
                  your academic journey.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={CardThree}
                className="custom-card-img"
              />
              <Card.Body>
                <Card.Title class="cardHeader">Certified Teachers</Card.Title>
                <Card.Text className="cardpara">
                  At EPIC WORLD, we take pride in our highly qualified and
                  certified teaching staff. Our instructors are not only experts
                  in their respective fields, but they're also dedicated to
                  providing a supportive and enriching learning environment.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={CardFour}
                className="custom-card-img"
              />
              <Card.Body>
                <Card.Title class="cardHeader"> Certification</Card.Title>
                <Card.Text className="cardpara">
                  EPIC WORLD's courses are not just about acquiring knowledge;
                  they're about earning valuable certifications that will set
                  you on a path to success. We offer a range of
                  industry-recognized
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
