import React from "react";
import "./Testimonial.css";
// import User from "../Image/Team/user.png";
import User from "../../Components/Image/Team/user.png";
function Testimoial() {
  return (
    <>
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
            <div class="marquee-container">
              <div class="marquee1">
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
    </>
  );
}

export default Testimoial;
