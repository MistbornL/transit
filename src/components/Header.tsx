import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
// import { Menu } from "lucide-react";
import hero from "../assets/hero_bg_2.jpg.webp";
import { MENUITEMS } from "../const";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

interface HeaderProps {
  aboutSectionRef?: React.RefObject<HTMLElement>;
  howItWorksSectionRef?: React.RefObject<HTMLElement>;
  ourTeamSectionRef?: React.RefObject<HTMLElement>;
  servicesSectionRef?: React.RefObject<HTMLElement>;
  contactSectionRef?: React.RefObject<HTMLElement>;
}

export const Header: React.FC<HeaderProps> = (
  {
    // aboutSectionRef,
    // howItWorksSectionRef,
    // ourTeamSectionRef,
    // servicesSectionRef,
    // contactSectionRef,
  }
) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // const scrollToSection = (ref) => {
  //   ref.current.scrollIntoView({ behavior: "smooth" });
  //   setIsMenuOpen(false); // Close the menu after scrolling
  // };
  return (
    <div className={`flex relative h-[100vh] w-full menu`}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <img className="w-full object-cover" src={hero} alt="travel" />
      {/* middle */}
      <div className="absolute w-full h-full flex-col flex gap-40">
        <div className="flex md:hidden justify-center flex-col items-center gap-4">
          <h1 className="text-5xl text-white">Logis</h1>
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
          <div className="absolute z-20 w-56 rounded-md items-center flex flex-col px-4 py-2 top-28 bg-slate-50 ">
            <NavigationMenu>
              <NavigationMenuList className="flex justify-center items-center ">
                <div className="flex flex-col">
                  {MENUITEMS.map((item, index) => {
                    return (
                      <NavigationMenuItem key={index} className={``}>
                        <Link
                          className={`py-4 hover:text-primary transition-all duration-200 items-center flex justify-center text-center `}
                          to={item.link}
                          key={index}
                          // onClick={() => scrollToSection(item.title.includes("services") )}
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuItem>
                    );
                  })}
                </div>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
        <div className="py-2 w-full md:flex hidden justify-between max-w-5xl mt-10 mx-auto text-white top-0 z-50">
          <h1 className="text-3xl ">Logis</h1>

          <NavigationMenu>
            <NavigationMenuList className="flex justify-between items-center">
              <div className="flex gap-10">
                {MENUITEMS.map((item, index) => {
                  return (
                    <NavigationMenuItem key={index}>
                      <Link
                        className={`${
                          location.pathname === item.link && "text-orange-600"
                        }  hover:text-orange-600 transition-all`}
                        to={item.link}
                      >
                        {item.title}
                      </Link>
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

          <Button className="uppercase bg-orange-600 rounded-sm px-20 py-8 text-lg hover:bg-transparent hover:border-solid hover:ring-1 hover:ring-white text-white transition-all">
            get started!
          </Button>
        </div>
      </div>
    </div>
  );
};
