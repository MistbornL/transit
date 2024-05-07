import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MENUITEMS } from "@/const";
import { useAnimation, motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeaderToScroll = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 10) {
      controls.start({ backgroundColor: "rgba(0, 0, 0, 0.9)" });
    } else {
      controls.start({ backgroundColor: "transparent" });
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <motion.div
      animate={controls}
      className="py-2 w-full md:flex hidden justify-between max-w-5xl mt-10 mx-auto text-white top-0 z-50"
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
