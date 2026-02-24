import React from 'react';

const About = () => {
  return (
    <section id="about" className="section" style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '30px' }}>About Me</h2>
      
      <div className="about-content" style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
        <p>
          I'm <strong>Sameera Manaf</strong>, a dedicated <strong>Front-end Developer</strong> currently based in <strong>Dubai, UAE</strong>. 
          I specialize in building scalable and high-performance web applications using modern technologies like <strong>React.js and Next.js 15</strong>.
        </p>

        <p>
          My expertise lies in developing responsive user interfaces and optimizing web performance. I have a proven track record of 
          improving load times by up to <strong>30%</strong> and boosting SEO scores through advanced techniques like <strong>Server-Side Rendering (SSR)</strong>.
        </p>

        <p>
          Currently, I am an Intern at <strong>Upcode Software Labs</strong>, where I collaborate in Agile teams to deliver 
          production-ready solutions. I am also passionate about continuous learning and am 
          presently expanding my backend knowledge with <strong>Python and FastAPI</strong> to become a more versatile Full-stack Developer.
        </p>

        <div className="education-highlights" style={{ marginTop: '30px', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
          <h3>Education & Training</h3>
          <ul>
            <li><strong>Frontend Developer Training</strong> - Upcode Software Labs (2025)</li>
            <li><strong>AI Bootcamp Certificate</strong> - Upcode Academy, Sharjah</li>
            <li><strong>Higher Secondary Education</strong> - SIAC HSS, Ummathur</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;