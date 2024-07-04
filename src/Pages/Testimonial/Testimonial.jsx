import React from "react";
import { useState } from "react";
import "./Testimonial.css";

import User from "../../Components/Image/Team/user.png";

const testimonials = [
  {
    name: "John M",
    rating: 5,
    image: User,
    text: "I am a frequent visitor to the Epic World library, and it's a treasure trove of knowledge. The online and offline resources are fantastic for research, and the staff is always helpful. My only suggestion would be to expand the physical library even more.",
  },
  {
    name: "David L",
    rating: 5,
    image: User,
    text: "EPIC WORLD's online courses are great for self-paced learning. The platform is user-friendly, and the content is up-to-date. However, I'd love to see more interactive features in their online courses to enhance the learning experience.",
  },
  {
    name: "Sophie K.",
    rating: 5,
    image: User,
    text: "I attended one of EPIC WORLD's events, and it was truly inspiring. The knowledge- sharing and networking opportunities were priceless. I left with a renewed sense of motivation and a network of like-minded individuals.",
  },
  {
    name: "Tina R",
    rating: 5,
    image: User,
    text: "EPIC WORLD is a game-changer in the education industry. Their trending courses are top-notch, covering the most relevant topics in today's job market. The instructors are highly knowledgeable, and the certification programs truly open doors to new opportunities.",
  },
  {
    name: "Mayur R.",
    rating: 5,
    image: User,
    text: "EPIC WORLD is a game-changer in the education industry. Their trending courses are top-notch, covering the most relevant topics in today's job market. The instructors are highly knowledgeable, and the certification programs truly open doors to new opportunities.",
  },
  {
    name: "Maria S.",
    rating: 5,
    image: User,
    text: "EPIC WORLD's certified teachers are the real deal. They're not just educators; they're mentors who genuinely care about your success. I recently completed a course with them, and the guidance and support I received were exceptional.",
  },
  {
    name: "Jeremy Y",
    rating: 5,
    image: User,
    text: "I cannot express enough how transformative my experience with Epic-World has been. As an educator constantly seeking innovative ways to engage my students and enhance their learning experience.",
  },
  {
    name: "Sheena B.",
    rating: 5,
    image: User,
    text: "Epic-World has empowered me to grow both personally and professionally. The skills and knowledge I have gained are directly applicable to my teaching methods, significantly enriching my classroom environment.",
  },
  // Add more testimonials...
];

const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card">
    <div className="testimonial-header">
      <div className="avatar">
        <img src={testimonial.image} alt={testimonial.name} />
      </div>
      <div className="name-rating">
        <h3>{testimonial.name}</h3>
        <div className="rating">{"★".repeat(testimonial.rating)}</div>
      </div>
    </div>
    <p className="testimonialInfo">{testimonial.text}</p>
  </div>
);

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   nextArrow: <></>,
  //   prevArrow: <></>,
  //   beforeChange: (current, next) => setCurrentIndex(next),
  // };

  return (
    <>
      <div className="container">
        <div className="" style={{ position: "relative" }}>
          {" "}
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ paddingTop: "20px" }}
          >
            <div
              style={{
                width: "40%",
                height: "1px",
                border: "1px solid ",
                background:
                  "linear-gradient(90deg, #FFFFFF 0%, rgba(153, 153, 153, 0) 100%)",
              }}
            ></div>
            <div className="testName">Testimonial</div>
            <div
              style={{
                width: "40%",
                height: "1px",
                border: "1px solid ",
                background:
                  "linear-gradient(90deg, #FFFFFF 0%, rgba(153, 153, 153, 0) 100%)",
              }}
            ></div>
          </div>
          <div class="shadowDiv"></div>
          <div className="testimonial-section">
            <h1>
              <span className="gradient">Exceptiona</span>l{" "}
              <span className="newGradient">User Satisfaction</span>
            </h1>
            <p className="subtitle">
              Discover what our students, alumni, and partners have to say about
              their experiences with Epic World. Read testimonials and success
              stories that showcase the impact of our educational services on
              their lives and careers.
            </p>
            <div className="carousel-container">
              <button className="nav-button prev" onClick={prevSlide}>
                &#10094;
              </button>
              <div className="carousel">
                {testimonials
                  .slice(currentIndex, currentIndex + 4)
                  .map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                  ))}
              </div>
              <button className="nav-button next" onClick={nextSlide}>
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
