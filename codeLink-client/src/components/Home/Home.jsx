import { useInView } from "react-intersection-observer";
import { AccordionComponent } from "../AccordionComponent/AccordionComponent";
import { EnterRoomCard } from "../EnterRoomCard/EnterRoomCard";
import { FeatureCard } from "../FeatureCard/FeatureCard";
import { TimelineComponent } from "../TimelineComponent/TimelineComponent";

const Home = () => {
  const { ref: fadeInRef1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: fadeInRef2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: fadeInRef3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: fadeInRef4, inView: inView4 } = useInView({ triggerOnce: true });

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-10 bg-gray-50">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30 animate-fade"></div>

      {/* EnterRoomCard */}
      <div
        className={`relative z-10 w-full max-w-lg p-8 mb-12 sm:mb-20 ${
          inView1 ? "animate-fadeInUp duration-1000 opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        ref={fadeInRef1}
      >
        <EnterRoomCard />
      </div>

      {/* Section: Powerful Features */}
      <div
        className={`w-full max-w-6xl mt-20 px-4 sm:px-6 lg:px-12 ${
          inView2 ? "animate-fadeInUp duration-1000 opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        ref={fadeInRef2}
      >
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">
          Powerful Features
        </h2>
        <FeatureCard />
      </div>

      {/* How it works section */}
      <div
        className={`w-full max-w-6xl mt-24 px-4 sm:px-6 lg:px-12 ${
          inView3 ? "animate-fadeInUp duration-1000 opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        ref={fadeInRef3}
      >
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">
          How It Works
        </h2>
        <div className="flex justify-center items-center w-full">
          <TimelineComponent />
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div
        className={`w-full max-w-6xl mt-24 px-4 sm:px-6 lg:px-12 ${
          inView4 ? "animate-fadeInUp duration-1000 opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        ref={fadeInRef4}
      >
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>
        <AccordionComponent />
      </div>
    </div>
  );
};

export default Home;
