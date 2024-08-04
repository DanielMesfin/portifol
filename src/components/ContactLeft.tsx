import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Daniel Mesfin</h3>
        <p className="text-lg font-normal text-gray-400">
          Mobile Application Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        As a mobile application developer, I design, build, and maintain applications for mobile devices, ensuring seamless performance across various platforms like Android and iOS. My role includes coding, testing, debugging, and enhancing app functionalities. 
        I collaborate with cross-functional teams to deliver user-friendly interfaces and engaging user experiences, integrating the latest technologies and adhering to best practices in mobile development.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+251930379106</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">danielmesfin331@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
};

export default ContactLeft;
