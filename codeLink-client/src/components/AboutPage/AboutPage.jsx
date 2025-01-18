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
              CodeLink is an innovative, real-time collaborative code editor designed to make coding projects more efficient and interactive for teams. Built using modern technologies like <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>WebSockets</strong>, the platform enables seamless, instant synchronization of code changes among all participants, ensuring that everyone is always on the same page.
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
              Our mission is to empower developers, educators, and students by providing a tool that promotes real-time collaboration and learning. SyncLipika helps streamline coding workflows, supports group projects, and allows educators to conduct coding lessons and pair programming exercises more effectively. It’s a platform where creativity, learning, and teamwork come together.
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
              <li><strong>Real-Time Collaboration:</strong> Multiple users can collaborate on the same codebase simultaneously, with instant updates reflecting in real-time across all participants&apos; screens.</li>
              <li><strong>Interactive Code Editing:</strong> With features like syntax highlighting, autocompletion, and error-checking, SyncLipika offers a comfortable coding environment for all skill levels.</li>
              <li><strong>Version Control Integration:</strong> Effortlessly integrate Git for version control, keeping track of changes made during collaborative sessions.</li>
              <li><strong>Educational Use:</strong> Ideal for classrooms and group studies, SyncLipika helps students and educators work together effectively in a dynamic, real-time coding environment.</li>
              <li><strong>Private and Public Sessions:</strong> Create private coding sessions for team projects or open sessions for public collaboration, giving you control over your workspace.</li>
              <li><strong>Secure and Reliable:</strong> SyncLipika leverages WebSockets for real-time communication, ensuring low-latency and secure collaboration, with automatic conflict resolution.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Why Choose SyncLipika Section */}
        <AccordionItem value="why-choose">
          <AccordionAction>
            <AccordionTitle className="first-letter:text-emerald-500">
              Why Choose SyncLipika?
            </AccordionTitle>
            <AccordionIcon />
          </AccordionAction>
          <AccordionContent>
            <p className="text-lg leading-relaxed text-gray-700">
              SyncLipika offers a unique environment where developers, educators, and students can collaborate and work together on coding projects, all within a single platform. Whether you are building software, learning a new programming language, or teaching others, SyncLipika provides a seamless and efficient experience that enhances productivity and fosters creative teamwork.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li><strong>Improve Productivity:</strong> Say goodbye to the hassle of merging code changes manually. With real-time syncing, everyone can work simultaneously without disrupting others.</li>
              <li><strong>Promote Learning:</strong> Students and educators can use the platform to work together on projects, facilitating peer-to-peer learning and effective teaching.</li>
              <li><strong>Enhance Teamwork:</strong> Collaborative coding promotes idea sharing, problem-solving, and quicker results.</li>
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
              <li><strong>React.js:</strong> A JavaScript library for building user interfaces, providing the fast, interactive experience SyncLipika users enjoy.</li>
              <li><strong>Node.js:</strong> A powerful JavaScript runtime for building scalable backend services, ensuring smooth performance and real-time communication.</li>
              <li><strong>WebSockets:</strong> This protocol powers our real-time collaboration feature, ensuring low-latency communication between users.</li>
              <li><strong>MongoDB:</strong> Used for storing session data, user preferences, and other platform-related information.</li>
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
              While SyncLipika already provides an intuitive and reliable collaborative coding environment, we have ambitious plans for future enhancements:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li><strong>Integration with More Code Hosting Platforms:</strong> Expanding support for repositories like GitHub, GitLab, and Bitbucket for better version control and repository management.</li>
              <li><strong>Advanced Collaborative Features:</strong> Adding features like live debugging, code suggestions, and real-time chat to further improve the collaborative experience.</li>
              <li><strong>Mobile App Support:</strong> Developing mobile apps for on-the-go coding collaboration.</li>
              <li><strong>Community & Open Source:</strong> SyncLipika is committed to fostering a community of developers and educators. We plan to open-source parts of our platform to encourage contributions from the developer community.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Call to Action */}
        <AccordionItem value="cta">
          <AccordionAction>
            <AccordionTitle className="first-letter:text-emerald-500">
              Get Started with SyncLipika
            </AccordionTitle>
            <AccordionIcon />
          </AccordionAction>
          <AccordionContent className="text-center mt-8">
            <p className="text-lg text-gray-700 mb-4">
              Whether you&apos;re a developer looking to improve your team’s workflow, an educator aiming to create engaging lessons, or a student collaborating on a group project, <strong>SyncLipika</strong> is the perfect solution for you.
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
