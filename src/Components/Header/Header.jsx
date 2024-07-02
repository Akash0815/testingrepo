import React from "react";

import "./Header.css";
import Navpages from "../../Navpages";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "../Image/epiclogo.svg";
import CardOne from "../Image/cardimage.svg";
import CardFour from "../Image/certificate.png";
import CardThree from "../Image/certified.svg";
import CardTwo from "../Image/library.svg";
import About from "../Image/aboutImg.png";
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
      {/* <Navpages/> */}
      <section className="AboutUsSection">
        <div className="container">
          <div className="aboutSection">
            <h3 className="About">About Us</h3>
          </div>
          <div className="aboutMainSection">
            <div className="aboutContent">
              <div className="aboutInfo">
                <h3 class="infoHeader">
                  {" "}
                  <span class="gradient">Welcome</span>
                  <span className="newGradient">To Epic World</span>
                </h3>
                <p className="infoContent">
                  At EPIC WORLD, we believe that education is not just about
                  acquiring knowledge; it's about inspiring a passion for
                  learning. Our institution has been a pillar of the educational
                  community for many years, delivering high-quality educational
                  services to students from diverse backgrounds.
                </p>
              </div>
              <div className="aboutInfo">
                <h3 class="infoHeader">
                  {" "}
                  <span className="newGradient">Our</span>{" "}
                  <span class="gradient"> History</span>
                </h3>
                <p className="infoContent">
                  EPIC WORLD has a rich history of fostering learning and
                  innovation. Founded in 2023, we have consistently evolved to
                  meet the changing needs of our students. From humble
                  beginnings, we have grown to become a respected institution in
                  the field of education.
                </p>
              </div>
              <div className="aboutInfo">
                <h3 class="infoHeader">
                  {" "}
                  <span className="newGradient">Our</span>
                  <span class="gradient">Mission</span>
                </h3>
                <p className="infoContent">
                  Our mission is to provide accessible, high-quality education
                  that empowers individuals to excel in their chosen fields. We
                  are committed to equipping our students with the skills and
                  knowledge they need to thrive in an ever-changing world.
                </p>
              </div>
              <div className="aboutInfo">
                <h3 class="infoHeader">
                  {" "}
                  <span className="newGradient">Our</span>
                  <span class="gradient">Vission</span>
                </h3>
                <p className="infoContent">
                  EPIC WORLD envisions a future where education transcends
                  boundaries. Our vision is to be a global leader in innovative
                  education, where both online and offline resources merge
                  seamlessly to create a dynamic learning experience.
                </p>
              </div>
            </div>
            <div className="aboutimg">
              <figure>
                <img src={About} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
