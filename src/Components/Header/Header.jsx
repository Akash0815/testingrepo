import React from "react";

import "./Header.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "../Image/epiclogo.svg";
import CardOne from "../Image/cardimage.svg";
import CardFour from "../Image/certificate.png";
import CardThree from "../Image/certified.svg";
import CardTwo from "../Image/library.svg";
import About from "../Image/aboutImg.png";

import Team1 from "../Image/Team/khan.png";
import Team2 from "../Image/Team/alam.png";
import Team3 from "../Image/Team/figery.png";
import Team4 from "../Image/Team/thomas.png";
import User from "../Image/Team/user.png";
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
              <figure className="aboutFigure">
                <img src={About} alt="" className="rotatingEarth" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement section */}

      <section>
        <div class="container">
          <h1 className="achieve">Achievement</h1>
          <p class="subtitle">
            EPIC WORLD takes pride in the accomplishments of our students and
            the recognition our institution has received over the years. Our
            achievements are a testament to our commitment to excellence in
            education.
          </p>

          <div className="chart">
            <div className="bar" style={{ height: "60%;" }}></div>
            <div className="bar" style={{ height: "100%;" }}></div>
            <div className="bar" style={{ height: "80%;" }}></div>
            <div className="bar" style={{ height: "40%;" }}></div>
          </div>

          <div className="stats">
            <div className="stat-box">
              <div className="stat-number">60</div>
              <div className="stat-label">Teacher</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">40</div>
              <div className="stat-label">Courses</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">900</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">3675</div>
              <div className="stat-label">Satisfied Client</div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div class="container py-5">
          <div class="team-header">
            <h2>OUR TEAM</h2>
            <h1>
              Our <span>Experienced</span> Team Member
            </h1>
          </div>
          <div class="row g-4">
            <div class="col-md-3">
              <div class="team-card">
                <img src={Team1} alt="ABD Rashid Khan" />
                <div class="card-body">
                  <h5 class="card-title">ABD Rashid Khan</h5>
                  <h6 class="card-subtitle">Vice Chancellor</h6>
                  <p class="card-text">
                    ABD Rashid Khan, our esteemed Vice Chancellor, is the
                    driving force behind our institution's vision and commitment
                    to excellence. With a wealth of experience, he leads our
                    academic community, guiding our institution with unwavering
                    dedication.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="team-card">
                <img src={Team2} alt="Mr. Mahabub Alam" />
                <div class="card-body">
                  <h5 class="card-title">Mr. Mahabub Alam</h5>
                  <h6 class="card-subtitle">Assistant Professor</h6>
                  <p class="card-text">
                    Mr. Mahabub Alam, our dedicated Assistant Professor, brings
                    a wealth of knowledge and expertise to our academic team.
                    With a passion for teaching and a deep commitment to student
                    success, he plays a crucial role in shaping the minds of our
                    students.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="team-card">
                <img src={Team3} alt="Luyes Figery" />
                <div class="card-body">
                  <h5 class="card-title">Luyes Figery</h5>
                  <h6 class="card-subtitle">Professor</h6>
                  <p class="card-text">
                    Mr. Mahabub Alam, our esteemed Assistant Professor, is a key
                    figure in our academic community. His enthusiasm for
                    education and commitment to student success make him an
                    invaluable asset to our institution.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="team-card">
                <img src={Team4} alt="Grace Thomas" />
                <div class="card-body">
                  <h5 class="card-title">Grace Thomas</h5>
                  <h6 class="card-subtitle">Professor</h6>
                  <p class="card-text">
                    Grace Thomas, a distinguished member of the Epic team,
                    brings a wealth of knowledge and expertise to her work in
                    academic research. With over 20 years of experience in
                    teaching, research, and mentoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section> */}

      <section>
        <div className="container">
          <div className="testimonials">
            <h3 className="test">Testimonial</h3>
            <div className="user text-center">
              <h3>
                <span className="gradient">Expectional</span>{" "}
                <span className="newGradient">User Satisfaction</span>
                <p className="test-info">
                  Discover what our students, alumni, and partners have to say
                  about their experiences with Epic World. Read testimonials and
                  success stories that showcase the impact of our educational
                  services on their lives and careers.
                </p>
              </h3>
            </div>
            <div class="marquee-container">
              <div class="marquee">
                <div class="testimonial">
                  <div class="testimonial-header">
                    <img src={User} alt="John M" />
                    <div>
                      <div>John M</div>
                      <div class="stars">★★★★★</div>
                    </div>
                  </div>
                  <div class="testimonial-content">
                    "The courses on the Brain World Sharpener site is a treasure
                    trove of knowledge. The online staff is always receptive and
                    ready to help, and the staff is always helpful. My only
                    suggestion would be to expand the physical locations to
                    other cities."
                  </div>
                </div>
                <div class="testimonial">
                  <div class="testimonial-header">
                    <img src={User} alt="David L" />
                    <div>
                      <div>David L</div>
                      <div class="stars">★★★★★</div>
                    </div>
                  </div>
                  <div class="testimonial-content">
                    "BWS offers an incredible range of courses for self-paced
                    learning. The platform is user-friendly, and the content is
                    up-to-date. However, I'd love to see more interactive
                    features in their online courses to enhance the learning
                    experience."
                  </div>
                </div>
                <div class="testimonial">
                  <div class="testimonial-header">
                    <img src={User} alt="Sophie K" />
                    <div>
                      <div>Sophie K</div>
                      <div class="stars">★★★★★</div>
                    </div>
                  </div>
                  <div class="testimonial-content">
                    "It interacts with a FITC World Community and was truly
                    inspiring. The knowledge-sharing and networking
                    opportunities were priceless. I left with a renewed sense of
                    motivation and a network of like-minded individuals."
                  </div>
                </div>
                <div class="testimonial">
                  <div class="testimonial-header">
                    <img src={User} alt="Tina R" />
                    <div>
                      <div>Tina R</div>
                      <div class="stars">★★★★★</div>
                    </div>
                  </div>
                  <div class="testimonial-content">
                    "BWS is at the forefront of continuing education beauty.
                    Their training courses are top-notch, covering the most
                    relevant topics in today's industry. The instructors are
                    highly knowledgeable, and the certification programs are
                    well-structured and comprehensive."
                  </div>
                </div>
              </div>

              {/* <div className="marquee">
                  <div class="testimonial">
                    <div class="testimonial-header">
                      <img src={User} alt="John M" />
                      <div>
                        <div>John M</div>
                        <div class="stars">★★★★★</div>
                      </div>
                    </div>
                    <div class="testimonial-content">
                      "The courses on the Brain World Sharpener site is a
                      treasure trove of knowledge. The online staff is always
                      receptive and ready to help, and the staff is always
                      helpful. My only suggestion would be to expand the
                      physical locations to other cities."
                    </div>
                  </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section>
        <div class="container">
          <div className="faqSection">
            <div class="left-column">
              <h1>
                <span class="gradient">Frequently</span>{" "}
                <span class="newGradient"> Asked</span>
              </h1>
              <p>
                These FAQs are designed to address common questions and provide
                helpful information to prospective and current students of
                Epic-World. Feel free to reach out to us if you have any other
                questions!
              </p>
              <button class="get-started">Get Started</button>
            </div>
            <div class="right-column">
              <div class="faq-item">
                What types of courses does Epic-World offer?
              </div>
              <div class="faq-item">Are the courses self-paced?</div>
              <div class="faq-item">
                Q4: Do I need any special software or equipment to take the
                courses?
              </div>
              <div class="faq-item">
                Does Epic-World offer any group or corporate training programs?
              </div>
            </div>
          </div>
          <div class="app-buttons">
            <button class="app-button">
              <img src="google-play-icon.png" alt="Google Play" />
              GET IT ON GOOGLE PLAY
            </button>
            <button class="app-button">
              <img src="app-store-icon.png" alt="App Store" />
              DOWNLOAD ON THE APP STORE
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
