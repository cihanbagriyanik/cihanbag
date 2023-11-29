import React from "react";
import { SkillsMainDiv, SkillsLi } from "./Style";
import { FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Skills = () => {
  return (
    <SkillsMainDiv className="row">
      <h1 className="mb-4 fw-bold">My Skills</h1>
      <div className="col-4">
        <dl>
          <dt>Programing Lanuage</dt>
          <SkillsLi>JavaScript</SkillsLi>
          <SkillsLi>Java</SkillsLi>
          <SkillsLi>TypeScript</SkillsLi>
        </dl>
        <dl>
          <dt>Backend</dt>
          <SkillsLi>Node.js</SkillsLi>
          <SkillsLi>Java</SkillsLi>
          <SkillsLi>Express.js</SkillsLi>
          <SkillsLi>JWT</SkillsLi>
          <SkillsLi>Mongoose</SkillsLi>
          <SkillsLi>Sequelize</SkillsLi>
          <SkillsLi>Firebase</SkillsLi>
          <SkillsLi>RESTful APIs</SkillsLi>
          <SkillsLi>Docker</SkillsLi>
        </dl>
        <dl>
          <dt>Testing</dt>
          <SkillsLi>Cypress.js</SkillsLi>
        </dl>
      </div>
      <div className="col-4">
        <dl>
          <dt>Frontend</dt>
          <SkillsLi>HTML</SkillsLi>
          <SkillsLi>CSS</SkillsLi>
          <SkillsLi>JavaScript</SkillsLi>
          <SkillsLi>Next.js</SkillsLi>
          <SkillsLi>React.js</SkillsLi>
          <SkillsLi>Redux.js</SkillsLi>
          <SkillsLi>Redux Tool Kit</SkillsLi>
          <SkillsLi>Axios</SkillsLi>
          <SkillsLi>Yup</SkillsLi>
          <SkillsLi>Formik</SkillsLi>
        </dl>

        <dl>
          <dt>Styling</dt>
          <SkillsLi>CSS</SkillsLi>
          <SkillsLi>SASS</SkillsLi>
          <SkillsLi>Bootstrap</SkillsLi>
          <SkillsLi>MaterialUI</SkillsLi>
          <SkillsLi>Tailwind CSS</SkillsLi>
          <SkillsLi>Styled Components</SkillsLi>
        </dl>
      </div>
      <div className="col-4">
        <dl>
          <dt>Database</dt>
          <SkillsLi>SQL</SkillsLi>
          <SkillsLi>PostgreSQL</SkillsLi>
          <SkillsLi>SQLite3</SkillsLi>
          <SkillsLi>MongoDB</SkillsLi>
        </dl>
        <dl>
          <dt>Tools</dt>
          <SkillsLi>Word Press</SkillsLi>
          <SkillsLi>IntelliJ</SkillsLi>
          <SkillsLi>Postman</SkillsLi>
          <SkillsLi>VSCode</SkillsLi>
          <SkillsLi>Git</SkillsLi>
          <SkillsLi>GitHub</SkillsLi>
          <SkillsLi>Jira</SkillsLi>
          <SkillsLi>Netlify</SkillsLi>
          <SkillsLi>Render</SkillsLi>
          <SkillsLi>Vercel</SkillsLi>
        </dl>
      </div>
    </SkillsMainDiv>
  );
};

export default Skills;
