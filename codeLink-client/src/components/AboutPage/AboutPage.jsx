import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
} from 'keep-react';
import 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">About CodeLink</h1>

      {/* Accordion for content */}
      <Accordion flush={true} type="single" collapsible>
        
        {/* Introduction Section */}
        <AccordionItem value="intro">
          <AccordionAction>
            <AccordionTitle className="first-letter:text-emerald-500">
              Introduction
            </AccordionTitle>
            <AccordionIcon />
          </AccordionAction>
          <AccordionContent>
            <p className="text-lg leading-relaxed text-gray-700">
              CodeLink is an innovative, real-time collaborative code editor designed to make coding projects more efficient and interactive for teams. Built using modern technologies like <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>WebSockets</strong>, CodeLink ensures that code changes are instantly synchronized among all participants—keeping everyone on the same page.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Mission Section */}
        <AccordionItem value="mission">
          <AccordionAction>
            <AccordionTitle className="first-letter:text-emerald-500">
              Our Mission
            </AccordionTitle>
            <AccordionIcon />
          </AccordionAction>
          <AccordionContent>
            <p className="text-lg leading-relaxed text-gray-700">
              Our mission is to empower developers, educators, and students by providing a tool that promotes real-time collaboration and learning. CodeLink streamlines coding workflows, supports group projects, and enhances interactive teaching experiences—all in one platform.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Key Features Section */}
        <AccordionItem value="features">
          <AccordionAction>
            <AccordionTitle className="first-letter:text-emerald-500">
              Key Features
            </AccordionTitle>
            <AccordionIcon />
          </AccordionAction>
          <AccordionContent>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>
                <strong>Real-Time Collaboration:</strong> Multiple users can work on the same codebase simultaneously, with changes updated instantly on every screen.
              </li>
              <li>
                <strong>Interactive Code Editing:</strong> Enjoy syntax highlighting, autocompletion, and error detection that provide a comfortable and efficient coding environment.
              </li>
              <li>
                <strong>Version Control Integration:</strong> Seamlessly integrate with Git to track changes during collaborative sessions.
              </li>
              <li>
                <strong>Educational Use:</strong> Ideal for classrooms and group studies, CodeLink enables effective collaboration between students and educators.
              </li>
              <li>
                <strong>Private and Public Sessions:</strong> Create private coding sessions for your team projects or open sessions for wider collaboration, giving you full control over your workspace.
              </li>
              <li>
                <strong>Secure and Reliable:</strong> Leveraging WebSockets for real-time communication ensures low latency and secure, automatic conflict resolution.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Why Choose CodeLink Section */}
        <AccordionItem value="why-choose">
          <AccordionAction>
            <AccordionTitle className="first-letter:text-emerald-500">
              Why Choose CodeLink?
            </AccordionTitle>
            <AccordionIcon />
          </AccordionAction>
          <AccordionContent>
            <p className="text-lg leading-relaxed text-gray-700">
              CodeLink provides a straightforward and efficient environment for collaborative coding. Whether you are developing software, learning a new language, or teaching programming, CodeLink offers a seamless experience that improves productivity and fosters teamwork.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
              <li>
                <strong>Boost Productivity:</strong> Eliminate the hassle of manual code merging—work in real-time and see updates immediately.
              </li>
              <li>
                <strong>Enhance Learning:</strong> Collaborate easily with peers and mentors, making it an ideal tool for educational settings.
              </li>
              <li>
                <strong>Simplify Collaboration:</strong> CodeLink’s intuitive interface helps teams share ideas, solve problems, and produce results faster.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Technologies Section */}
        <AccordionItem value="technologies">
          <AccordionAction>
            <AccordionTitle className="first-letter:text-emerald-500">
              Technologies Used
            </AccordionTitle>
            <AccordionIcon />
          </AccordionAction>
          <AccordionContent>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>
                <strong>React.js:</strong> A JavaScript library for building dynamic user interfaces that deliver a fast and interactive experience.
              </li>
              <li>
                <strong>Node.js:</strong> A robust JavaScript runtime that powers scalable backend services and real-time communication.
              </li>
              <li>
                <strong>WebSockets:</strong> Enables low-latency, real-time communication for seamless collaborative coding.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Future Plans Section */}
        <AccordionItem value="future">
          <AccordionAction>
            <AccordionTitle className="first-letter:text-emerald-500">
              Future Plans
            </AccordionTitle>
            <AccordionIcon />
          </AccordionAction>
          <AccordionContent>
            <p className="text-lg leading-relaxed text-gray-700">
              CodeLink is continuously evolving. Our near-term focus is on enhancing the collaborative experience with achievable improvements:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
              <li>
                <strong>Enhanced Editor Features:</strong> Improving syntax highlighting, autocompletion, and error detection to further streamline coding.
              </li>
              <li>
                <strong>Performance Optimizations:</strong> Reducing latency and increasing the responsiveness of real-time collaboration.
              </li>
              <li>
                <strong>User Interface Improvements:</strong> Refining the overall design to make CodeLink even more intuitive and user-friendly.
              </li>
              <li>
                <strong>User Feedback Integration:</strong> Continuously gathering and incorporating user feedback to guide our development priorities.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Call to Action */}
        <AccordionItem value="cta">
          <AccordionAction>
            <AccordionTitle className="first-letter:text-emerald-500">
              Get Started with CodeLink
            </AccordionTitle>
            <AccordionIcon />
          </AccordionAction>
          <AccordionContent className="text-center mt-8">
            <p className="text-lg text-gray-700 mb-4">
              Whether you’re a developer, educator, or student, <strong>CodeLink</strong> offers a practical and efficient solution for real-time collaborative coding.
            </p>
            <button className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition duration-300 ease-in-out">
              Start Collaborating Today
            </button>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
      
    </div>
  );
};

export default AboutPage;
