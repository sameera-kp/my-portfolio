import React from 'react';

const Skills = () => {
  const skills = ["React.js", "Next.js 15", "Redux", "JavaScript", "TypeScript" , "Node.js", "GraphQL", "PostgreSQL", "Prisma", "Python", "Tailwind CSS"];
  
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-item" style={{
            background: '#e0e0ff',
            padding: '10px 20px',
            borderRadius: '20px',
            margin: '10px',
            display: 'inline-block',
            fontWeight: 'bold'
          }}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;