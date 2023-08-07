import { styles } from "@/app/styles";
import SectionWrapper from "./Container";

export default function BrandingBar() {
  return (
    <div className={`${styles.paddingY}`}>
      <SectionWrapper>
        <div>
          <div className="branding_bar">
            <span>Branding</span> <span>SEO</span>
            <span>Digital Marketing</span>
          </div>
          <div className="branding_bar">
            <span>Apps Development</span> <span>Graphic Design</span>
            <span>UX Design</span>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
