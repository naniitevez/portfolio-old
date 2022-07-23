import React from "react";

interface PresentationProps {
    description: string;
}

const Presentation: React.FC<PresentationProps> = ({description}) => {
  return (
    <div
      className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-169b97d"
      data-id="169b97d"
      data-element_type="column"
    >
      <div className="elementor-column-wrap elementor-element-populated">
        <div className="elementor-widget-wrap">
          <div
            className="elementor-element elementor-element-2432e9f elementor-widget elementor-widget-heading"
            data-id="2432e9f"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h4 className="elementor-heading-title elementor-size-default">
                {description}
              </h4>
            </div>
          </div>
          {/* <div
            className="elementor-element elementor-element-c6a3d2c elementor-align-left elementor-widget elementor-widget-button"
            data-id="c6a3d2c"
            data-element_type="widget"
            data-widget_type="button.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a
                  href="https://demo.athemes.com/sp-resume/#"
                  className="elementor-button-link elementor-button elementor-size-sm"
                  role="button"
                >
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text">Saber más</span>
                  </span>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Presentation;
