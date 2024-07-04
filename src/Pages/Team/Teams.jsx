import React from "react";
import "./Teams.css";
import Team1 from "../../Components/Image/Team/khan.png";
import Banner from "../../Components/Image/Banner/banner.jpg";

function Teams() {
  const teamMembers = [
    {
      name: "ABD Rashid Khan",
      title: "Vice Chancellor",
      about:
        "ABD Rashid khan, our esteemed Vice Chancellor, is the driving force behind our institution's vision and commitment to excellence. With a wealth of experience and a passion for education, he leads our institution with unwavering dedication.",
      image: Team1,
    },
    {
      name: "Mr. Mahabub Alam",
      title: "Assistant Professor",
      about:
        "Luyes Figery, our Associate Professor, brings a wealth of knowledge and expertise to our academic team. With a passion for teaching and a deep understanding of the subject matter, he plays a crucial role in shaping the minds of our students.",
      image: Team1,
    },
    {
      name: "Luyes Figery",
      title: "Professor",
      about:
        "Mr. Mahabub Alam, our dedicated Assistant Professor, is a key figure in our academic community. His enthusiasm for education and commitment to student success make him an invaluable asset to our institution.",
      image: Team1,
    },
    {
      name: "Grace Thomas",
      title: "Professor",
      about:
        "Grace Thomas, a distinguished member of the Epic World, epitomizes the ideals of efficiency and hard work in academia. With over 08 years of experience in teaching, research, and mentorship.",
      image: Team1,
    },
  ];

  return (
    <div className="container">
      <div className="background">
        <div className="headerTeam">
          <h1 className="ourTeam">OUR TEAM</h1>
          <h2 className="teamMembers">
            <span className="newGradient fontSize">Our </span>
            <span className="gradient fontexp">Experienced</span>{" "}
            <span className="newGradient fontSize">Team Member</span>
          </h2>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="teamimg banner">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3 className="userName">{member.name}</h3>
                <div className="title gradient">{member.title}</div>
                <p className="memberAbout">{member.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teams;
