// import { projects } from '../data/projects';
// import GenerateProjects from 'utils/generateProjects';
// import { experience } from 'data/experience';
export default function Landing() {
    return (
        <>
            <section className="page-section">
                    <h2 className="text-2xl md:text-3xl font-bold font-roboto-condensed text-gray-700 dark:text-white">Hey, I&apos;m Hayden</h2>
                    <p className="text-xl font-bold mt-6">I am currently updating this website</p>
                    {/* <p className="mt-4 text-sm md:text-lg">Graduated from UCLA with a B.S. in Computer Science</p>
                    <p className="mt-4 md:text-lg">Currently based in Seattle</p>
                    <p className="mt-4  md:text-lg">Recruiting for SWE, ML roles</p>
                    <p className="mt-4 md:text-lg">Past internships, experience involved LLMs and web development</p> */}
                    <p className="mt-4 md:text-lg">I am reachable at haydenfds[at]gmail.com. I&apos;m always happy to connect with anyone!</p>
            </section>
            <section className="w-full flex flex-row mt-8 gap-8">
                <a href="https://github.com/haydenfd" rel="noopener noreferrer" target="_blank" className="links">GitHub</a>
                <a href="https://www.linkedin.com/in/hayden-dsouza/" rel="noopener noreferrer" target="_blank" className="links">LinkedIn</a>
                <a href="/resume.pdf" rel="noopener noreferrer" target="_blank" className="links">Resume</a>
            </section>
          
        </>
    );
}
