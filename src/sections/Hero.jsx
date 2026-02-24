import React from 'react';
import myPhoto from '../assets/photo.jpg';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <img src={myPhoto} alt="Sameera Manaf" className="hero-photo" />
                <h1>Hi, I’m Sameera Manaf</h1>
                <p className="hero-subtitle">Frontend Developer | React & Next.js Expert</p>
                <p className="hero-info">Based in Dubai, UAE | +971585133244</p>
                
                <div className="cta-buttons">
                    <a href="mailto:zakraya60@gmail.com" className="btn-main">Email Me</a>
                   <a href="/resume.pdf" download="SAMEERA MANAF Resume.pdf" className="btn-sub">Download CV</a>
                    <a
                        href="https://www.linkedin.com/in/sameera-manaf-dev"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-sub"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/sameera-kp"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-sub"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;