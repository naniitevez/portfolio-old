import React from "react";
import IconComponent from "./components/IconComponent";

interface KnowledgeSectionProps {}

const KnowledgeSection: React.FC<KnowledgeSectionProps> = () => {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-97cfc3b elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="97cfc3b"
      data-element_type="section"
      data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
      style={{ width: "1905px", left: "0px" }}
    >
        <div id="knowledge-section-container">
            <IconComponent title="HTML" logoImage="/images/icons/html.png" />
            <IconComponent title="CSS" logoImage="/images/icons/css.png" />
            <IconComponent title="Sass" logoImage="/images/icons/sass.png" />
            <IconComponent title="Javascript" logoImage="/images/icons/javascript.png" />
            <IconComponent title="Typescript" logoImage="/images/icons/typescript.png" />
            <IconComponent title="React Js | React Native" logoImage="/images/icons/react.png" />
            <IconComponent title="Next Js" logoImage="/images/icons/next.png" />
            <IconComponent title="Ionic" logoImage="/images/icons/ionic.png" />
            <IconComponent title="Git" logoImage="/images/icons/git.png" />
            <IconComponent title="GitHub" logoImage="/images/icons/github.png" />
        </div>
    </section>
  );
};

export default KnowledgeSection;
