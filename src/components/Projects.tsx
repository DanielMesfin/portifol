import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { telbir, fooddeliver, mbi,ethiomap,esora,todoye } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="TEL BIRR CLONE"
            des="  A streamlined replica of the Telbir platform, With attractive user interface and
             collaboration with enhanced user interface and intuitive navigation"
            src={telbir}
            gitlink={"https://github.com/DanielMesfin/tel-birr-app"}
          />
          <ProjectsCard
            title="Esora Resturant App "
            des=" A comprehensive platform enabling users to explore local restaurants, browse menus, place orders, and
             track their order progrss in real-time, ensuring a seamless and efficient dining experience"
            src={esora}
            gitlink={"https://github.com/DanielMesfin/ethioClicks"}
          />
          <ProjectsCard
            title="Ethio Map"
            des="A user-friendly app that provides accurate navigation, real-time directions, and powerful search 
            capabilities to help users find and explore places effortlessly on their mobile devices"
            src={ethiomap}
            gitlink={"https://github.com/DanielMesfin/EthioMaps_Flutter"}
          />
          <ProjectsCard
            title="Food Delivery App"
            des=" A robust platform that facilitates seamless ordering, efficient delivery tracking, and real-time updates,
             ensuring users receive their favorite meals from local restaurants quickly and conveniently"
            src={fooddeliver}
            gitlink={"https://github.com/DanielMesfin/food-delivery-mobile-application"}
          />
          <ProjectsCard
            title="Bod Mass index Calculater"
            des=" A simple and intuitive mobile application that allows users to easily calculate their BMI by 
            entering their height and weight, providing instant feedback on their health status"
            src={mbi}
            gitlink={"https://github.com/DanielMesfin/body-mass-index-calculator-by-flutter-for-both-android-and-ios"}
          />
          <ProjectsCard
            title="Manage Task"
            des="  An efficient and intuitive tool designed to help users organize, prioritize, and track their tasks and projects, with features
             for setting deadlines, managing to-do lists, and monitoring progress to boost productivity."
            src={todoye}
            gitlink={""}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
