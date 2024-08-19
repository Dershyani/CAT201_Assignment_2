import React from "react";
import "./elements.css";
import member1Image from "../../images/member1.png";
import member2Image from "../../images/member2.png"; 
import member3Image from "../../images/member3.png"; 
import member4Image from "../../images/member4.png";
import member5Image from "../../images/member5.png";

function TeamSection() {
  const teamData = [
    {
      name: "Lithia",
      role: "Web Coordinator",
      description: "Experienced web coordinator responsible for managing and optimizing our online presence.",
      imgSrc: member1Image, 
    },
    {
      name: "Dershyani",
      role: "Sales Agent",
      description: "Dedicated sales representative with a keen eye for identifying customer needs and promoting our products.",
      imgSrc: member2Image,
    },
    {
      name: "Muven",
      role: "Supervisor",
      description: "Skilled supervisor overseeing production and ensuring our operations run smoothly.",
      imgSrc: member3Image,
    },
    // Add more team members as needed
    {
      name: "Kavitashini",
      role: "Botanist",
      description: "Experienced botanist specializing in plant cultivation and research.",
      imgSrc: member4Image,
    },
    {
      name: "Tejashree Laxmi",
      role: "Customer Support",
      description: "Friendly customer support specialist providing assistance and resolving inquiries.",
      imgSrc: member5Image,
    },
  ];

  return (
    <section className="team" id="contacts">
      <div className="center">
        <h1>Our Team</h1>
        <h3>Get to know the team behind our company</h3>
      </div>

      <div className="team-content">
        {teamData.map((member, index) => (
          <div className="box" key={index}>
            <img src={member.imgSrc} alt={member.name} />
            <h3>{member.name}</h3>
            <h5>{member.role}</h5>
            <div className="box-description">
              {member.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;

