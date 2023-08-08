import { styles } from "@/app/styles"
import Image from "next/image"
import SectionWrapper from "./Container"
import { Button } from "./ui/button"

import amazonImg from "/public/amazon.svg"
import avadaImg from "/public/avada.svg"
import glassdoorImg from "/public/glassdoor.png"
import googleImg from "/public/google.png"
import indeedImg from "/public/indeed.png"
import intelImg from "/public/intel.png"
import linkedinImg from "/public/linkedin.png"
import microsoftImg from "/public/microsoft.png"
import oneplusImg from "/public/oneplus.png"

const Testimonial = () => {
  return (
    <div className={`${styles.paddingY}`}>
        <SectionWrapper>
            <div className="flex items-center justify-between">
                <div className="flex-1 space-y-5">
                    <h1 className={`${styles.sectionHeadText}`}>Take a Look at <br /> Our Clients</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has. Lorem Ipsum dummy text of the printing.</p>
                    <Button className="bg-[#007D88]">VIEW PORTFOLIO</Button>
                </div>
                <div className="grid grid-cols-3 flex-1 gap-5 justify-end items-center">
                    <Image src={intelImg} alt="client company image" width={70} placeholder="blur" className="block justify-self-end"  />
                    <Image src={microsoftImg} alt="client company image" width={100} placeholder="blur" className="block justify-self-end" />
                    <Image src={linkedinImg} alt="client company image" width={100} placeholder="blur" className="block justify-self-end" />
                    <Image src={glassdoorImg} alt="client company image" width={100} placeholder="blur"  className="block justify-self-end"/>
                    <Image src={googleImg} alt="client company image" width={100} placeholder="blur" className="block justify-self-end" />
                    <Image src={amazonImg} alt="client company image" width={100}  className="block justify-self-end" />
                    <Image src={avadaImg} alt="client company image" width={100}  className="block justify-self-end" />
                    <Image src={indeedImg} alt="client company image" width={100} placeholder="blur" className="block justify-self-end" />
                    <Image src={oneplusImg} alt="client company image" width={100} placeholder="blur" className="block justify-self-end" />
                </div>
            </div>
        </SectionWrapper>
    </div>
  )
}

export default Testimonial