import React from "react";
import HeaderPresentation from "./components/HeaderPresentation";
import ResumeImage from "./components/ResumeImage";

interface BannerSectionProps {}

const BannerSection: React.FC<BannerSectionProps> = () => {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-090df54 elementor-section-stretched elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="090df54"
      data-element_type="section"
      data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
      style={{ width: "1905px", left: "0px" }}
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <HeaderPresentation
            description="UX/UI designer Austin based, who loves clean, simple &amp;
                unique design."
          />
          <ResumeImage />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
