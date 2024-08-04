import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaYoutube, FaLinkedinIn,  } from "react-icons/fa";
import { SiTailwindcss,  SiNextdotjs, SiFlutter, SiSpring,  SiReact } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Mobile Application Developer.", "Backend and .", "Web 3.0 Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Daniel Mesfin </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
        Daniel Mesfin is an exceptional software engineer known for his innovative solutions and
         dedication to excellence. With expertise in multiple programming languages and frameworks, 
         Daniel consistently delivers high-quality software products. He excels in problem-solving, 
         system design, and performance optimization, making complex concepts accessible and effective. 
         His collaborative spirit, attention to detail, and commitment to continuous learning make him a valuable asset to any development team.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/channel/UCeYWzbv0C5Ntb2dNbo97E2A" target="_blank">
              <span className="bannerIcon">
                <FaYoutube />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-mesfin-0b8b13293/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://www.facebook.com/daniel.mesfin.927758" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiFlutter />
            </span>
            <span className="bannerIcon">
              <SiSpring />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs/>
            </span>
            <span className="bannerIcon">
              <SiReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
