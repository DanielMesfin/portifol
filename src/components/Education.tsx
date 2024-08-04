import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Software Engineering"
            subTitle="Haramaya University(2019 - 2024)"
            result="3.91/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          {/* <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          /> */}
          <ResumeCard
            title="Secondary School Education"
            subTitle="Bishaw Woldeyohannes Secondary School (2017 - 2019)"
            result="85.5"
            des="Secondary education or post-primary education covers two phases as Country  Standard Classification of Ethiopia."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Ethio Clicks - (2023 - 2024)"
            result="Ethiopia"
            des="As a mobile application developer at Ethio Clicks, I contributed to the development of a comprehensive
             platform designed to enhance user engagement and streamline service delivery "
          />
          <ResumeCard
            title="Web3.0 Developer"
            subTitle="By Self Employ - (2022 - 2024)"
            result="Ethiopia"
            des="As a self-taught Web3 developer, I have independently mastered the intricacies of blockchain technology and decentralized applications. Through self-directed learning and hands-on projects, I have gained proficiency in key Web3 concepts such as smart contracts, decentralized finance (DeFi), and blockchain integration."
          />
          <ResumeCard
            title="Spring  Developer"
            subTitle="EthioClicks - (2022 - 2023)"
            result="Ethiopia"
            des="As a Spring developer, I have gained hands-on experience in designing and implementing robust, scalable applications using the Spring framework. My work encompasses a range of Spring technologies"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
