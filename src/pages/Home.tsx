import { Check, Facebook, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import about from "@/assets/about.webp";
import { HOWITWORKS, OURSERVICES } from "@/const";
import { Header } from "@/components/Header";
import { useRef, useState } from "react";
import { HeaderToScroll } from "@/components/HeaderToScroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useAnimation } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

export const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const aboutSectionRef = useRef(null);
  const howItWorksSectionRef = useRef(null);
  // const ourTeamSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const controls = useAnimation();

  // Function to handle hover state
  const handleHover = (isHovered: boolean) => {
    if (isHovered) {
      // On hover, animate y to 100
      controls.start({ y: -100 });
    } else {
      // On hover out, animate y to -200
      controls.start({ y: 100 });
    }
  };
  return (
    <div className="flex flex-col">
      <header>
        <Header />
        <HeaderToScroll />
      </header>
      <div className="flex flex-col">
        {/* ABOUT SECTION */}
        <section
          ref={aboutSectionRef}
          className="flex flex-wrap justify-between md:max-w-6xl md:mx-auto py-14 md:space-x-10 px-2"
        >
          <img
            className="md:w-[445px] md:h-[508px] object-cover md:hidden block rounded-md"
            src={about}
            alt=""
          />
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="uppercase text-orange-600 font-bold text-3xl ">
                about us!
              </h1>
              <Separator className="bg-orange-600 w-20 h-1" />
              <p className="max-w-xl mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis deleniti reprehenderit animi est eaque corporis!
                Nisi, asperiores nam amet doloribus, soluta ut reiciendis.
                Consequatur modi rem, vero eos ipsam voluptas. Error minus sint
                nobis dolor laborum architecto, quaerat. Voluptatum porro
                expedita labore esse velit veniam laborum quo obcaecati
                similique iusto delectus quasi!
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              <div className="flex space-x-3">
                <Check color="green" /> <li>Error minus sint nobis dolor</li>
              </div>
              <div className="flex space-x-3">
                <Check color="green" /> <li>Error minus sint nobis dolor</li>
              </div>
              <div className="flex space-x-3">
                <Check color="green" /> <li>Error minus sint nobis dolor</li>
              </div>
              <div className="flex space-x-3">
                <Check color="green" /> <li>Error minus sint nobis dolor</li>
              </div>
            </ul>
          </div>

          <img
            className="md:w-[445px] md:h-[508px] object-cover md:block hidden"
            src={about}
            alt=""
          />
        </section>
        {/* HOW IT WORKS */}
        <section
          ref={howItWorksSectionRef}
          className="relative work flex flex-col items-center justify-center py-20"
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>

          <div className="z-10 flex flex-col mb-20 gap-4 items-center">
            <h1 className="uppercase text-4xl text-orange-600">
              how it works!
            </h1>
            <Separator className="h-1 w-24 bg-orange-600" />
          </div>

          <div className="z-10 w-full flex max-w-6xl justify-center space-x-10 flex-wrap mx-auto gap-10">
            {HOWITWORKS.map((item) => {
              return (
                <div key={item.numeric} className="flex flex-col">
                  <div className="rounded-full bg-orange-600 w-14 h-14 text-center justify-center flex border-solid border-white border-1 items-center text-white mb-10">
                    {item.numeric}
                  </div>

                  <div className="flex flex-col gap-8 text-white">
                    <h1>{item.title}</h1>

                    <p className="max-w-xs">{item.description}</p>

                    <ul className="z-10">
                      {item.list.map((listItem, index) => {
                        return (
                          <li key={index} className="flex gap-4">
                            <Check color="green" /> {listItem}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {/* OUR TEAM
        <section
          ref={ourTeamSectionRef}
          className="relative flex flex-col items-center justify-center py-20 "
        >
          <div className="z-10 flex flex-col mb-20 gap-4 items-center">
            <h1 className="uppercase text-4xl text-orange-600">our team</h1>
            <Separator className="h-1 w-24 bg-orange-600" />
          </div>

          <div className="z-10 w-full flex  max-w-6xl justify-center space-x-10 flex-wrap mx-auto gap-10">
            {OURTEAM.map((item) => {
              return (
                <div key={item.id} className="flex flex-col">
                  <div className="rounded-full mb-10">
                    <img
                      className="rounded-full w-60 h-60"
                      src={person}
                      alt={item.fullName}
                    />
                  </div>

                  <div className="flex flex-col gap-10">
                    <div className="flex-col gap-2 flex">
                      <h1 className="text-black">{item.fullName}</h1>
                      <h2 className="text-gray-500 text-xs">{item.position}</h2>
                    </div>

                    <p className="max-w-xs">{item.description}</p>

                    <ul className="z-10 flex gap-4">
                      {item.socials.map((listItem, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-gray-500 hover:bg-gray-700 transition-all rounded-full px-2 py-2 cursor-pointer"
                            onClick={() => window.open(listItem.link, "_blank")}
                          >
                            {listItem.name === "facebook" ? (
                              <Facebook color="white" />
                            ) : listItem.name === "twitter" ? (
                              <Twitter color="white" />
                            ) : listItem.name === "linkedin" ? (
                              <Linkedin color="white" />
                            ) : listItem.name === "instagram" ? (
                              <Instagram color="white" />
                            ) : null}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section> */}

        {/*Services */}
        <section
          ref={servicesSectionRef}
          className="relative flex-col items-center justify-center py-20 bg-gray-100 border-t-[1px]"
        >
          <div className="z-10 flex flex-col mb-20 gap-4 items-center">
            <h1 className="uppercase text-4xl text-orange-600">our Services</h1>
            <Separator className="h-1 w-24 bg-orange-600" />
          </div>

          <div className="z-10 w-full flex max-w-6xl space-x-4 flex-wrap mx-auto gap-10 justify-center">
            {OURSERVICES.map((item, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <div className="flex gap-4">
                    <div className="rounded-full mb-10"></div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-black font-bold">{item.title}</h1>
                      <p className="text-gray-700 text-md max-w-[240px]">
                        {item.description}
                      </p>

                      <button className="bg-transparent text-start text-orange-500">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* PARTNERS */}
        <section className="flex flex-col items-center w-full mt-14">
          <div className="z-10 flex flex-col mb-10 gap-4 items-center">
            <h1 className="uppercase text-4xl text-orange-600">Partners</h1>
            <Separator className="h-1 w-24 bg-orange-600" />
          </div>
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-6xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
                className="relative basis-1/3 hover:scale-105 transition-all cursor-pointer"
              >
                <img src={about} />

                <motion.h1
                  initial={{ y: 100 }}
                  className="text-center text-lg text-white"
                  animate={controls}
                >
                  Air Transports
                </motion.h1>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <img src={about} />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <img src={about} />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <img src={about} />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* CONTACT */}
        <section
          ref={contactSectionRef}
          className="relative flex-col items-center justify-center py-20 "
        >
          <div className="z-10 flex flex-col mb-20 gap-4 items-center">
            <h1 className="uppercase text-4xl text-orange-600">Contact Us</h1>
            <Separator className="h-1 w-24 bg-orange-600" />
          </div>

          <div className="z-10 w-full flex max-w-6xl space-x-4 flex-wrap mx-auto gap-10 justify-center">
            <div className="flex flex-col">
              <h1 className="font-bold text-xl">Address</h1>
              <h4 className="max-w-[340px]">
                203 Fake St. Mountain View, San Francisco, California, USA
              </h4>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-xl">Phone</h1>
              <h4 className="max-w-[340px]">+1 232 3235 324</h4>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-xl">Email Address</h1>
              <h4 className="max-w-[340px]">youremail@domain.com</h4>
            </div>
          </div>
        </section>
        <footer className="flex flex-wrap p-20  bg-stone-600 text-white">
          <div className="flex flex-wrap justify-center max-w-6xl mx-auto lg:gap-40 gap-10">
            <div className="flex flex-col">
              <h1 className="font-bold text-lg">About Us</h1>
              <p className="max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                iure deserunt ut architecto dolores quo beatae laborum aliquam
                ipsam rem impedit obcaecati ea consequatur.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-lg">Quick Links</h1>
              <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>About Us</li>
                <li>About Us</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-lg">Follow Us</h1>
              <div className="flex gap-4 cursor-pointer">
                <Facebook />
                <Instagram />
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto mt-10 gap-4 items-center w-full">
            <Separator className="w-full bg-stone-400" />
            <h4>
              Copyright ©2024 All rights reserved | This template is made with
              by Colorlib
            </h4>
          </div>
        </footer>
      </div>
    </div>
  );
};
