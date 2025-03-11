import React from "react";
import "./Resume.scss";

const Resume = () => {
  const contactInfo = [
    "james.zheng.dev217@gmail.com",
    "https://jameszhengportfolio.netlify.app",
    "github.com/jameszheng217",
  ];
  const education = [
    {
      title: "Bachelor of Software Engineering",
      duration: "2015 - 2019",
      institution: "ALGOMA University",
      description:
        "During my development, I immersed myself in hands-on projects involving modern programming languages, software development tools, and system design. This practical experience helped me build a solid technical foundation and prepared me for real-world challenges in the IT field.",
    },
  ];
  const internships = [
    {
      company: "Datarockets",
      duration: "Oct 2024 - present",
      location: "Toronto, Canada",
      responsibilities: [
        "Collaborated with a cross-functional team including UX/UI designers and product managers to optimize user interfaces, resulting in a 35% increase in user engagement and improved customer retention.",
        "Developed and maintained multiple full-stack web applications using technologies such as React, Node.js, Express, MongoDB, and GraphQL, enhancing performance and reducing load times by 30%.",
        "Designed and implemented dynamic backend services, ensuring the integration of third-party APIs and payment gateways, which reduced the time to complete transactions by 25%.",
        "Identified and resolved bottlenecks in code execution and database queries, improving overall system responsiveness and achieving a 40% reduction in server costs through optimized architecture.",
        "Led troubleshooting sessions and debugging processes, overcoming security vulnerabilities and ensuring zero downtime during deployment, which helped maintain 100% uptime for users.",
        "Collaborated on testing and QA efforts, resulting in the identification of critical bugs before production, reducing post-launch issues by 50% and ensuring smoother user experiences.",
      ],
    },
    {
      company: "247 Labs Inc",
      duration: "May 2022 - Sep 2024",
      location: "Toronto, Canada",
      responsibilities: [
        "Led multiple projects from concept to completion, ensuring timely delivery and alignment with client goals.",
        "Enhanced a MongoDB, Express.js, React, and Node.js (MERN)-based ecommerce system, optimizing the checkout process by 20%, resulting in a 15% higher conversion rate and contributing to over $2 million in annual revenue.",
        "Optimized web applications with Tailwind CSS, achieving full mobile responsiveness and improving user satisfaction scores by 35 %.",
        "Developed a scalable data storage system using React, Node.js, and Express.js, optimizing retrieval times by 50 % and improving efficiency for 500,000+ active users.",
        "Implemented both MongoDB and PostgreSQL to enhance data management efficiency, leading to a 25 % improvement in data retrieval times.",
        "Spearheaded the development of a feature-rich analytics platform, integrating HTML5,CSS3, and React, boosting customer insights by 35%.",
      ],
    },
    {
      company: "Many Hats",
      duration: "August 2018 - April 2022",
      location: "Burnaby, Canada",
      responsibilities: [
        "Developed and deployed 5+ scalable web applications with React, Node.js, and MongoDB, improving system efficiency and supporting 100,000 + users.",
        "Contributed to the development of a customer support chatbot utilizing AI technologies, enhancing response times by 40 %.",
        "Designed and implemented 15+ RESTful APIs with Node.js and PostgreSQL, reducing data retrieval time by 30 % and improving backend performance.",
        "Reduced website load times by 40%, leading to a 25% increase in user retention, through lazy loading, code splitting, and image optimization.",
        "Designed and maintained a blockchain-based real estate platform usingNext.js and TypeScript, increasing site speed by 40 % and boosting user engagement.",
        "Developed blockchain-based authentication solutions, improving security and decentralization, reducing unauthorized access by 60 %.",
      ],
    },
  ];

  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <a
          href="/JamesZheng_CV.pdf"
          className="icon resume"
          target="_blank"
          download="James Zheng"
          aria-label="Download Resume"
        >
          <i className="bi bi-download"></i>
        </a>

        <p className="justify">
          I am an enthusiastic and dedicated IT graduate with a solid foundation
          in programming and software development. I am eager to leverage my
          skills to contribute to innovative projects and solutions. Committed
          to continuous learning and growth, I aim to apply my technical
          knowledge and problem-solving abilities in a dynamic work environment
          where I can collaborate with experienced professionals and drive
          impactful results.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>James Zheng</h4>
              <p className="justify">
                I am a Senior Full-stack developer with 7 years of rich experience in
                building scalable and high-performance web applications. Skilled in React,
                Next.js, Svelte,Vue.js, Angular, Node.js, and GraphQL. Strong expertise in
                data integration and optimized database management, maximizing data
                processing speed with MongoDB, MySQL, and PostgreSQL. Proficient in
                Python, AWS and best practices such as TDD and Agile(SCRUM).
                I am adept at building secure, scalable, and innovative blockchain
                applications across diverse ecosystems.
              </p>
              <ul>
                {contactInfo.map((contact, index) => (
                  <li key={index}>{contact}</li>
                ))}
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            {education.map((edu, index) => (
              <div className="resume-item" key={index}>
                <h4>{edu.title}</h4>
                <h5>{edu.duration}</h5>
                <p>
                  <em>{edu.institution}</em>
                </p>
                <p className="justify">{edu.description}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Work Experience</h3>
            {internships.map((internship, index) => (
              <div className="resume-item" key={index}>
                <h4>{internship.company}</h4>
                <h5>{internship.duration}</h5>
                <p>
                  <em>{internship.location}</em>
                </p>
                <ul>
                  {internship.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="justify">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
