import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useNavigate } from "react-router-dom";
// import { Menu } from "lucide-react";
import hero from "../assets/hero_bg_2.jpg.webp";
import { useAnimation } from "framer-motion";
import { MENUITEMS } from "../const";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const ScrollToTopOnRedirect = () => {
    const navigate = useNavigate();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [navigate]);

    return null; // Render nothing (null) in the component
  };
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);
  return (
    <div
      className={` flex relative h-[400px] md:h-[660px] lg:h-[660px] 2xl:h-[742px] w-full menu`}
    >
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
        <div className="py-2 w-full md:flex hidden justify-between max-w-5xl mt-10 mx-auto text-white top-0 z-50">
          <h1 className="text-3xl">Logis</h1>

          <NavigationMenu>
            <NavigationMenuList className="flex justify-between items-center">
              <div className="flex gap-10">
                {MENUITEMS.map((item, index) => {
                  return (
                    <NavigationMenuItem key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </NavigationMenuItem>
                  );
                })}
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex justify-center gap-10 flex-col items-center">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="uppercase text-white text-7xl">we make shipping</h1>
            <h3 className="text-gray-700 text-2xl">A logistic company</h3>
          </div>

          <Button className="uppercase bg-orange-600">get started!</Button>
        </div>
      </div>
    </div>
  );
};
