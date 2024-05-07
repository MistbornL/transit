import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MENUITEMS } from "@/const";
import { useAnimation, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const HeaderToScroll = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    controls.set({ translateY: -110 });

    const handleScroll = () => {
      if (window.scrollY > 290 && !isVisible) {
        setIsVisible(true);
        controls.start({ translateY: 0 });
      } else if (window.scrollY <= 290 && isVisible) {
        setIsVisible(false);
        controls.start({ translateY: -110 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, isVisible]);
  return (
    <motion.div
      animate={controls}
      transition={{ duration: 0.2 }}
      className={`fixed shadow-md bg-white px-40 py-6 items-center w-full md:flex hidden justify-between text-black top-0 z-50`}
    >
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
    </motion.div>
  );
};
