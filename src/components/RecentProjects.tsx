"use client";
import { projects } from "../../data";
import { PinContainer } from "./ui/Pin";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "./ui/animated-modal";
import { Button } from "./ui/MovingBorders";
import ImageCarousel from "./ui/animated-testimonials";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A selection of{" "}
        <span className="text-purple">my projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <Modal key={item.id}>
            <ModalTrigger className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] relative cursor-pointer">
              <PinContainer title="Project details">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 z-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl z-10"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>

                  <img
                    src={item.images[0].src}
                    alt="cover"
                    className="z-10 absolute bottom-0 "
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 z-10">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 z-10"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3 z-10">
                  <div className="flex items-center z-10">
                    {item.techStackIcons.map((tech, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center z-10"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        {/*@ts-ignore*/}
                        <img src={tech.icon} alt={tech.name} className="p-2 z-10" />
                      </div>
                    ))}
                  </div>
                </div>
              </PinContainer>
            </ModalTrigger>

            <ModalBody className="z-[1050]">
              <ModalContent className="z-[1050]">
                {/* Project Title */}
                <h4 className="text-2xl md:text-3xl text-neutral-600 dark:text-neutral-100 font-bold text-center">
                  {item.title}
                </h4>
                
                {/* Tech Stack Section */}
                {/* <div className="flex justify-center items-center gap-3 mt-4 mb-6">
                  {dummyData.techStackIcons.map((icon, index) => (
                    <div
                      key={index}
                      className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded-lg transition-transform hover:scale-110"
                    >
                      <img
                        src={icon}
                        alt={`tech-${index}`}
                        className="w-6 h-6 md:w-8 md:h-8"
                      />
                    </div>
                  ))}
                </div> */}

                  <div className="flex flex-row items-center justify-center mb-10 w-full gap-7 mt-6">
                    {/*@ts-ignore*/}
                    <AnimatedTooltip items={item.techStackIcons} />
                  </div>

                {/* Project Description */}
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base text-center mb-8">
                  {item.description}
                </p>

                {/* Project Images */}
                <div className="flex justify-center items-center w-full">
                  <ImageCarousel images={item.images}/>

                </div>
              </ModalContent>
              
              <ModalFooter className="gap-4">
                
              {item.devpostUrl !== "" && (
              <a href={item.devpostUrl} target="_blank" rel="noreferrer">
                <Button className="px-4 py-2 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm">
                  Devpost Link
                </Button>
              </a>
              )}

              {item.sourceUrl !== "" && (
                 <a href={item.sourceUrl} target="_blank" rel="noreferrer">
                 <Button className="px-4 py-2 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm">
                   Source Code
                 </Button>
               </a>)}
               
                {item.liveUrl !== "" && (
                  <a href={item.liveUrl} target="_blank" rel="noreferrer">
                  <Button className="px-4 py-2 bg-purple text-white dark:bg-purple dark:border-purple dark:text-white border border-purple rounded-md text-sm">
                    Live Demo
                  </Button>
                </a>)}
                
              </ModalFooter>
            </ModalBody>
          </Modal>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
