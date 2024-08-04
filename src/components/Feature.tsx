import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaReact } from "react-icons/fa";
import { SiProgress, SiAntdesign, SiSpring } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Mobile Development"
            des="As a mobile application developer, I specialize in creating, enhancing, and 
            maintaining applications for mobile devices across various platforms such as Android and iOS."
            icon={<FaMobile />}
          />
          <Card
            title="Business Strategy Developer"
            des="I specialize in crafting comprehensive plans to achieve organizational goals and drive growth. 
            My responsibilities include market analysis, identifying opportunities, setting strategy."
            icon={null}
          />
          <Card
            title="Web3.0 Developert"
            des="As a Web 3.0 developer, I specialize in building decentralized applications (dApps) using blockchain technology including smart contract development, integrating decentralized finance (DeFi) protocols, and leveraging distributed ledger technologies for enhanced security and transparency."
            icon={<FaGlobe/>}
          />
          <Card
            title="Backend Developer"
            des="As a Spring developer, I build scalable Java-based applications using the Spring framework, including Spring Boot, Spring MVC, Spring Data JPA, and Spring Security."
            icon={<SiSpring/>}
          />
          <Card
            title="React Developer"
            des="As a React developer, I build dynamic, responsive user interfaces using React.js and manage state with Redux.
            My focus is on creating and ensuring high-performance web applications
            "
            icon={<FaReact />}
          />
          <Card
            title="UX Design"
            des="As a UI/UX developer, I design and implement intuitive, visually appealing user interfaces and enhance user experiences.
             My focus is on creating  and ensuring accessibility and usability."
            icon={<SiAntdesign />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
