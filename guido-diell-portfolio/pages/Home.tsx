import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import CurrentlyLearning from '../components/CurrentlyLearning';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Awards from '../components/Awards';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Skills />
            <CurrentlyLearning />
            <Projects />
            <Experience />
            <Awards />
            <Education />
            <Contact />
        </>
    );
};

export default Home;
