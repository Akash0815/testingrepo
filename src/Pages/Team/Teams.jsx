import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Teams.css";
// import Team1 from "../Image/Team/khan.jpg";
import Team1 from "../../Components/Image/Team/khan.png";
import Team2 from "../../Components/Image/Team/alam.png";
import Team3 from "../../Components/Image/Team/figery.png";
import Team4 from "../../Components/Image/Team/thomas.png";

const TeamMember = ({ name, role, image, description }) => (
  <Col>
    <Card className="h-100 bg-dark text-white border-0">
      <Card.Img variant="top" src={image} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-success">{role}</Card.Subtitle>
        <Card.Text className="flex-grow-1">{description}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

const Teams = () => {
  const teamMembers = [
    {
      name: "ABD Rashid Khan",
      role: "Vice Chancellor",
      image: Team1,
      description:
        "ABD Rashid khan, our esteemed Vice Chancellor, is the driving force behind our institution's vision and commitment to excellence. With a wealth of experience and a passion for education, he leads our institution with unwavering dedication.",
    },
    {
      name: "Mr. Mahabub Alam",
      role: "Assistant Professor",
      image: Team2,
      description:
        "Luyes Figery, our Associate Professor, brings a wealth of knowledge and expertise to our academic team. With a passion for teaching and a deep understanding of the subject matter, he plays a crucial role in shaping the minds of our students.",
    },
    {
      name: "Luyes Figery",
      role: "Professor",
      image: Team3,
      description:
        "Mr. Mahabub Alam, our dedicated Assistant Professor, is a key figure in our academic community. His enthusiasm for education and commitment to student success make him an invaluable asset to our institution.",
    },
    {
      name: "Grace Thomas",
      role: "Professor",
      image: Team4,
      description:
        "Grace Thomas, a distinguished member of the Epic World, epitomizes the ideals of efficiency and hard work in academia. With over 08 years of experience in teaching, research, and mentorship.",
    },
  ];

  return (
    <Container fluid className="bg-black py-5">
      <h2 className="text-center text-white mb-4">
        Our <span className="text-success">Experienced</span> Team Member
      </h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {teamMembers.map((member, idx) => (
          <TeamMember key={idx} {...member} />
        ))}
      </Row>
    </Container>
  );
};

export default Teams;
