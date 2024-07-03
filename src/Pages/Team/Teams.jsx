import React from "react";
import "./Teams.css";
import Team1 from "../../Components/Image/Team/khan.png";
import Banner from "../../Components/Image/Banner/banner.jpg";
function Teams() {
  return (
    <>
      <div className="container">
        <div className="headerTeam">
          <h1 className="ourTeam">OUR TEAM</h1>
          <h2 className="teamMembers">
            <span className="newGradient fontSize">Our </span>
            <span className="gradient fontexp">Experienced</span>{" "}
            <span className="newGradient fontSize">Team Member</span>
          </h2>
        </div>

        <div className="team-grid">
          <div className="team-member">
            <div className="teamimg banner">
              <img src={Team1} alt="ABD Rashid Khan" />
            </div>

            <div className="team-info">
              <h3 className="userName">ABD Rashid Khan</h3>
              <div className="title gradient">Vice Chancellor</div>
              <p className="memberAbout">
                ABD Rashid khan, our esteemed Vice Chancellor, is the driving
                force behind our institution's vision and commitment to
                excellence. With a wealth of experience and a passion for
                education, he leads our institution with unwavering dedication.
              </p>
            </div>
          </div>
          <div className="team-member">
            <div className="teamimg banner">
              <img src={Team1} alt="ABD Rashid Khan" />
            </div>
            <div className="team-info">
              <h3 className="userName">Mr. Mahabub Alam</h3>
              <div className="title gradient">Assistant Professor</div>
              <p className="memberAbout">
                Luyes Figery, our Associate Professor, brings a wealth of
                knowledge and expertise to our academic team. With a passion for
                teaching and a deep understanding of the subject matter, he
                plays a crucial role in shaping the minds of our students.
              </p>
            </div>
          </div>
          <div className="team-member">
            <div className="teamimg banner">
              <img src={Team1} alt="ABD Rashid Khan" />
            </div>
            <div className="team-info">
              <h3 className="userName">Luyes Figery</h3>
              <div className="title gradient">Professor</div>
              <p className="memberAbout">
                Mr. Mahabub Alam, our dedicated Assistant Professor, is a key
                figure in our academic community. His enthusiasm for education
                and commitment to student success make him an invaluable asset
                to our institution.
              </p>
            </div>
          </div>
          <div className="team-member">
            <div className="teamimg banner">
              <img src={Team1} alt="ABD Rashid Khan" />
            </div>
            <div className="team-info">
              <h3 className="userName">Grace Thomas</h3>
              <div className="title gradient">Professor</div>
              <p className="memberAbout">
                Grace Thomas, a distinguished member of the Epic World,
                epitomizes the ideals of efficiency and hard work in academia.
                With over 08 years of experience in teaching, research, and
                mentorship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
