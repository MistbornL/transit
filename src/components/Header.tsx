import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import hero from "../assets/hero_bg_2.jpg.webp";
import { useAnimation } from "framer-motion";
import { MENUITEMS } from "../const";

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

      <img className="w-full  object-cover" src={hero} alt="travel" />
      {/* middle */}
      <div className="absolute w-full h-full flex-col">
        <ScrollToTopOnRedirect />
        {/* Responsive menu */}
        <div className="flex md:hidden justify-center flex-col items-center gap-4">
          <h1 className="text-5xl text-white">Skybound</h1>
          <Menu
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className="relative"
            color="white"
            size={40}
          />
        </div>
        {/* menu */}
        <div className="py-2 w-full md:flex hidden justify-center text-white top-0 z-50">
          <NavigationMenu>
            <NavigationMenuList className="flex justify-center items-center">
              <div className="flex">
                {MENUITEMS.map((item, index) => {
                  return (
                    <NavigationMenuItem key={index}>
                      <Link to={item.link}>{item.link}</Link>
                    </NavigationMenuItem>
                  );
                })}
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};
