import { styles } from "@/app/styles";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "./Container";
import { portfolioData } from "./constants";

const Portfolio = () => {
  return (
    <div className={`${styles.paddingY}`}>
      <SectionWrapper>
        <div className="flex items-end justify-between">
          <div className="">
            <h1 className={`${styles.sectionHeadText}`}>
              We Create And Innovate
            </h1>
            <p className={`${styles.sectionSubText} mt-2`}>
              Nulla facilisi. Sed aliquam massa dictum urna dictum, vitae varius
              quam egestas. Maecenas sollicitudin aliquam neque eu posuere.
              Nulla facilisi. Sed <br /> aliquam massa dictum urna dictum.
            </p>
          </div>
          <div className="flex flex-wrap justify-end text-[#333] text-[0.8rem] gap-3">
            <Link className="rounded-md bg-[#ddd] p-2" href="#">
              Web Design
            </Link>
            <Link className="rounded-md bg-[#ddd] p-2" href="#">
              SMM
            </Link>
            <Link className="rounded-md bg-[#ddd] p-2" href="#">
              Web Develpment
            </Link>
            <Link className="rounded-md bg-[#ddd] p-2" href="#">
              SEO
            </Link>
            <Link className="rounded-md bg-[#ddd] p-2" href="#">
              Graphic Design
            </Link>
            <Link className="rounded-md bg-[#ddd] p-2" href="#">
              Digital Marketing
            </Link>
            <Link className="rounded-md bg-[#ddd] p-2" href="#">
              UI/UX Design
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-8">
          {portfolioData.map((item, index) => {
            return (
              <div key={index} className="relative group">
                <Image
                  src={item.img}
                  alt={item.title}
                  placeholder="blur"
                  className={`port-img-${index} h-[25rem] object-cover rounded-lg `}
                />
                <div className="absolute opacity-0 group-hover:opacity-100 bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-black bg-opacity-20  transition-all duration-300">
                  <h1 className="text-white text-xl">{item.title}</h1>
                  <Link href="#" className="">
                    <Image
                      className=""
                      src="/portfolio-btn.png"
                      alt="btn"
                      width={50}
                      height={50}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Portfolio;
