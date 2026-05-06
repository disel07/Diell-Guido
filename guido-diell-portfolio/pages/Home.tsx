import React, { lazy, Suspense } from 'react';
import Hero from '../components/Hero';

const Skills = lazy(() => import('../components/Skills'));
const CurrentlyLearning = lazy(() => import('../components/CurrentlyLearning'));
const Projects = lazy(() => import('../components/Projects'));
const Experience = lazy(() => import('../components/Experience'));
const Contact = lazy(() => import('../components/Contact'));

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Suspense fallback={null}>
                <Skills />
                <CurrentlyLearning />
                <Projects />
                <Experience />
                <Contact />
            </Suspense>
        </>
    );
};

export default Home;
