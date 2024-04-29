import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import about from "@/assets/about.webp";
export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* ABOUT SECTION */}
      <section className="flex justify-between max-w-5xl mx-auto py-14 space-x-10">
        <div className="flex  flex-col gap-10">
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

        <img className="w-[445px] h-[508px]" src={about} alt="" />
      </section>

      {/* HOW IT WORKS */}
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <h1 className="uppercase text-4xl text-orange-600">how it works!</h1>
          <Separator className="h-1 bg-orange-600" />
        </div>
      </section>
    </div>
  );
};
