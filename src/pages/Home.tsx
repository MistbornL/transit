import { Check, Facebook, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import about from "@/assets/about.webp";
import { HOWITWORKS, OURSERVICES } from "@/const";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import main from "../assets/main.webp";
import partners1 from "@/assets/partners1.jpg";
import partners2 from "@/assets/partners2.jpg";

import { MENUITEMS } from "../const";
import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useAnimation } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
export const Home = () => {
  const homesSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const partnersSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    controls.set({ translateY: -120 });

    const handleScroll = () => {
      if (window.scrollY > 290 && !isVisible) {
        setIsVisible(true);
        controls.start({ translateY: 0 });
      } else if (window.scrollY <= 290 && isVisible) {
        setIsVisible(false);
        controls.start({ translateY: -200 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, isVisible]);

  // Function to handle hover state
  // const handleHover = (isHovered: boolean) => {
  //   if (isHovered) {
  //     // On hover, animate y to 100
  //     controls.start({ y: -100 });
  //   } else {
  //     // On hover out, animate y to -200
  //     controls.start({ y: 100 });
  //   }
  // };

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - 100, // Adjust the offset value as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col">
      <header ref={homesSectionRef}>
        <div className={`flex relative h-[820px] w-full menu`}>
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <img className="w-full object-cover" src={main} alt="travel" />
          {/* middle */}
          <div className="absolute w-full h-full flex-col flex gap-40">
            <div className="flex md:hidden justify-center flex-col items-center gap-4">
              <img src="" alt="" />
              <Menu
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
                className="relative"
                color="white"
                size={40}
              />
            </div>

            {isMenuOpen && (
              <div className="absolute z-20 left-20 w-56 rounded-md items-center flex flex-col px-4 py-2 top-28 bg-slate-50 ">
                <NavigationMenu>
                  <NavigationMenuList className="flex justify-center items-center ">
                    <div className="flex flex-col">
                      {MENUITEMS.map((item, index) => {
                        return (
                          <NavigationMenuItem key={index} className={``}>
                            <a
                              className={`py-4 hover:text-primary transition-all duration-200 items-center flex justify-center text-center cursor-pointer`}
                              onClick={() =>
                                scrollToSection(
                                  // @ts-ignore
                                  item.title.toLowerCase().includes("home")
                                    ? homesSectionRef
                                    : item.title.toLowerCase().includes("about")
                                    ? aboutSectionRef
                                    : item.title
                                        .toLowerCase()
                                        .includes("services")
                                    ? servicesSectionRef
                                    : item.title
                                        .toLowerCase()
                                        .includes("partners")
                                    ? partnersSectionRef
                                    : item.title
                                        .toLowerCase()
                                        .includes("contact")
                                    ? contactSectionRef
                                    : null
                                )
                              }
                            >
                              {item.title}
                            </a>
                          </NavigationMenuItem>
                        );
                      })}
                    </div>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            )}
            <div className="py-2 w-full md:flex hidden justify-between max-w-5xl mx-auto text-white top-0 z-50 items-center">
              <img
                src={logo}
                alt="BBGROUP"
                className="w-34 h-24 cursor-pointer"
                onClick={() => scrollToSection(homesSectionRef)}
              />

              <NavigationMenu>
                <NavigationMenuList className="flex justify-between items-center">
                  <div className="flex gap-10">
                    {MENUITEMS.map((item, index) => {
                      return (
                        <NavigationMenuItem key={index}>
                          <a
                            className={` hover:text-primary transition-all duration-200 items-center flex justify-center text-center cursor-pointer`}
                            onClick={() =>
                              scrollToSection(
                                // @ts-ignore

                                item.title.toLowerCase().includes("about")
                                  ? aboutSectionRef
                                  : item.title
                                      .toLowerCase()
                                      .includes("services")
                                  ? servicesSectionRef
                                  : item.title
                                      .toLowerCase()
                                      .includes("partners")
                                  ? partnersSectionRef
                                  : item.title.toLowerCase().includes("contact")
                                  ? contactSectionRef
                                  : null
                              )
                            }
                          >
                            {item.title}
                          </a>
                        </NavigationMenuItem>
                      );
                    })}
                  </div>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex justify-center gap-10 flex-col items-center">
              <div className="flex flex-col items-center space-y-2">
                <h1 className="uppercase text-white md:text-7xl text-4xl">
                  we make shipping
                </h1>
                <h3 className="text-gray-400 text-2xl">A logistic company</h3>
              </div>

              <Button
                onClick={() => scrollToSection(aboutSectionRef)}
                className="uppercase bg-primary rounded-sm px-20 py-8 text-lg hover:bg-transparent hover:border-solid hover:ring-1 hover:ring-white text-white transition-all"
              >
                get started!
              </Button>
            </div>
          </div>
        </div>

        <motion.div
          animate={controls}
          transition={{ duration: 0.2 }}
          className={`fixed shadow-md bg-white px-40  items-center w-full md:flex hidden justify-between text-black top-0 z-50`}
        >
          <img src={logo} alt="BBGROUP" className="w-34 h-24 cursor-pointer" />

          <NavigationMenu>
            <NavigationMenuList className="flex justify-between items-center">
              <div className="flex gap-10 items-center">
                {MENUITEMS.map((item, index) => {
                  return (
                    <NavigationMenuItem key={index}>
                      <a
                        className={`hover:text-primary transition-all duration-200 items-center flex justify-center text-center cursor-pointer`}
                        onClick={() =>
                          scrollToSection(
                            // @ts-ignore
                            item.title.toLowerCase().includes("home")
                              ? homesSectionRef
                              : item.title.toLowerCase().includes("about")
                              ? aboutSectionRef
                              : item.title.toLowerCase().includes("services")
                              ? servicesSectionRef
                              : item.title.toLowerCase().includes("partners")
                              ? partnersSectionRef
                              : item.title.toLowerCase().includes("contact")
                              ? contactSectionRef
                              : null
                          )
                        }
                      >
                        {item.title}
                      </a>
                    </NavigationMenuItem>
                  );
                })}
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </motion.div>
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
              <h1 className="uppercase text-primary font-bold text-3xl ">
                about us!
              </h1>
              <Separator className="bg-primary w-20 h-1" />
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
          ref={partnersSectionRef}
          className="relative work flex flex-col items-center justify-center py-20"
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>

          <div className="z-10 flex flex-col mb-20 gap-4 items-center">
            <h1 className="uppercase text-4xl text-white">how it works!</h1>
            <Separator className="h-1 w-24 bg-primary" />
          </div>

          <div className="z-10 w-full flex max-w-6xl justify-center  flex-wrap mx-auto gap-20">
            {HOWITWORKS.map((item) => {
              return (
                <div key={item.numeric} className="flex flex-col">
                  <div className="rounded-full bg-primary w-14 h-14 text-center justify-center flex border-solid border-white border-1 items-center text-white mb-10">
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
            <h1 className="uppercase text-4xl text-primary">our team</h1>
            <Separator className="h-1 w-24 bg-primary" />
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
            <h1 className="uppercase text-4xl text-primary">our Services</h1>
            <Separator className="h-1 w-24 bg-primary" />
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

                      <button className="bg-transparent text-start text-primary">
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
        <section
          ref={partnersSectionRef}
          className="flex flex-col items-center w-full mt-14"
        >
          <div className="z-10 flex flex-col mb-10 gap-4 items-center">
            <h1 className="uppercase text-4xl text-primary">Partners</h1>
            <Separator className="h-1 w-24 bg-primary" />
          </div>
          <div className="w-full">
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <div className="flex flex-col gap-10">
                <CarouselContent className="relative flex items-center">
                  <CarouselItem className="basis-1/2 p-0 flex items-center justify-center">
                    <img className="w-[50%]" src={partners1} />
                  </CarouselItem>
                  <CarouselItem className="basis-1/2 p-0 flex justify-center">
                    <img className="w-[250px]" src={partners2} />
                  </CarouselItem>
                </CarouselContent>
                <div className="justify-center flex gap-10">
                  <CarouselPrevious className="relative border-none shadow-none w-14 h-14" />
                  <CarouselNext className="relative border-none shadow-none w-14 h-14" />
                </div>
              </div>
            </Carousel>
          </div>
        </section>

        {/* CONTACT */}
        <section
          ref={contactSectionRef}
          className="relative flex-col items-center justify-center py-20 "
        >
          <div className="z-10 flex flex-col mb-20 gap-4 items-center">
            <h1 className="uppercase text-4xl text-primary">Contact Us</h1>
            <Separator className="h-1 w-24 bg-primary" />
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
        <footer className="flex flex-wrap p-20  bg-primary text-white">
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
                <li
                  className="cursor-pointer hover:underline"
                  onClick={() => scrollToSection(aboutSectionRef)}
                >
                  About Us
                </li>
                <li
                  className="cursor-pointer hover:underline"
                  onClick={() => scrollToSection(servicesSectionRef)}
                >
                  Services
                </li>
                <li
                  className="cursor-pointer hover:underline"
                  onClick={() => scrollToSection(partnersSectionRef)}
                >
                  Partners
                </li>
                <li
                  className="cursor-pointer hover:underline"
                  onClick={() => scrollToSection(contactSectionRef)}
                >
                  Contact
                </li>
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
        </footer>
      </div>
    </div>
  );
};
