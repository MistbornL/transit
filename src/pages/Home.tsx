import { Check, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import about from "@/assets/about.webp";
import { HOWITWORKS, OURTEAM } from "@/const";
import person from "@/assets/person_1.jpg.webp";
export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* ABOUT SECTION */}
      <section className="flex flex-wrap justify-between md:max-w-5xl md:mx-auto py-14 md:space-x-10 px-2">
        <img
          className="md:w-[445px] md:h-[508px]  object-cover md:hidden block rounded-md"
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
              Blanditiis deleniti reprehenderit animi est eaque corporis! Nisi,
              asperiores nam amet doloribus, soluta ut reiciendis. Consequatur
              modi rem, vero eos ipsam voluptas. Error minus sint nobis dolor
              laborum architecto, quaerat. Voluptatum porro expedita labore esse
              velit veniam laborum quo obcaecati similique iusto delectus quasi!
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
          className="md:w-[445px] md:h-[508px]  object-cover md:block hidden"
          src={about}
          alt=""
        />
      </section>

      {/* HOW IT WORKS */}
      <section className="relative work flex flex-col items-center justify-center py-20">
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="z-10 flex flex-col mb-20 gap-4 items-center">
          <h1 className="uppercase text-4xl text-orange-600">how it works!</h1>
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

      <section className="relative flex flex-col items-center justify-center py-20 ">
        <div className="z-10 flex flex-col mb-20 gap-4 items-center">
          <h1 className="uppercase text-4xl text-orange-600">our team</h1>
          <Separator className="h-1 w-24 bg-orange-600" />
        </div>

        <div className="z-10 w-full flex flex-wrap max-w-6xl justify-center space-x-10 flex-wrap mx-auto gap-10">
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
                    <h2 className="text-gray-500">{item.position}</h2>
                  </div>

                  <p className="max-w-xs">{item.description}</p>

                  <ul className="z-10 flex gap-4">
                    {item.socials.map((listItem, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-gray-500 rounded-full px-2 py-2"
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
      </section>
    </div>
  );
};
