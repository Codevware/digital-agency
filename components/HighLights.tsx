import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionWrapper from "./Container";
import { styles } from "@/app/styles";

export default function HighLights() {
  return (
    <div className={`${styles.paddingY}`}>
      <SectionWrapper>
        <div>
          <div>
            <h2 className="uppercase text-5xl font-bold text-primary leading-relaxed">
              Bringing brands <br /> to life with
              <span className="p-2 bg-secondry text-white rounded">
                strategy
              </span>
              <br /> and design.
            </h2>

            <p className="max-w-md border-l-4 border-secondry pl-2 mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              possimus corrupti asperiores dolores doloribus molestiae
              consequuntur unde? Ipsum, iusto!
            </p>
          </div>

          <div className="mt-8 flex">
            <div>
              <Image
                src="/highlight1.jpg"
                alt=""
                width={822}
                height={412}
                className="rounded-md object-cover h-[412px]"
              />
            </div>

            <div className="uppercase ml-10 flex flex-col justify-between w-1/3">
              <p className="border-b text-primary">
                <span className="font-bold text-3xl">10</span>
                <br />
                Years Experience
              </p>
              <p className="border-b text-primary">
                <span className="font-bold text-3xl">55</span>
                <br />
                Completed Projects
              </p>
              <p className="border-b text-primary">
                <span className="font-bold text-3xl">70+</span>
                <br />
                Award Winning
              </p>
              <p className="text-primary">
                <span className="font-bold text-3xl">200+</span>
                <br />
                Happy Clients
              </p>
            </div>
          </div>

          <div className="mt-28 flex justify-between">
            <Accordion
              type="single"
              collapsible
              className="w-full mr-16 flex flex-col justify-between"
            >
              <h3 className="text-4xl font-bold mb-4 text-primary">
                Service We Provide
              </h3>

              <AccordionItem value="item-1">
                <AccordionTrigger>UI/UX Design</AccordionTrigger>
                <AccordionContent>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
                  ducimus?
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Web Development</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Grphic Design</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Digital Marketing</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>

              <button className="px-4 py-2 bg-secondry text-white rounded mt-8 w-1/3">
                View All Services
              </button>
            </Accordion>

            <div className="w-full">
              <Image
                src="/highlight2.jpg"
                alt=""
                width={570}
                height={552}
                className="rounded-md object-cover h-[552px]"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
