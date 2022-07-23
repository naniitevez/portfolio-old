import React from "react";

interface HeaderPresentationProps {
    description: string;
}

const HeaderPresentation: React.FC<HeaderPresentationProps> = ({description}) => {
  return (
    <div
      className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b20a48c"
      data-id="b20a48c"
      data-element_type="column"
    >
      <div className="elementor-column-wrap elementor-element-populated">
        <div className="elementor-widget-wrap">
          <div
            className="elementor-element elementor-element-93f7ea4 elementor-widget elementor-widget-heading"
            data-id="93f7ea4"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h4 className="elementor-heading-title elementor-size-default">
                Hola!
              </h4>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-2c81356 elementor-widget elementor-widget-heading"
            data-id="2c81356"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h1 className="elementor-heading-title elementor-size-default">
                Yo soy Nicole!
              </h1>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-7399f55 elementor-widget elementor-widget-text-editor"
            data-id="7399f55"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-text-editor elementor-clearfix">
                {description}
              </div>
            </div>
          </div>
          {/* <div
                  className="elementor-element elementor-element-7acad80 elementor-align-left elementor-widget elementor-widget-button"
                  data-id="7acad80"
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
                          <span className="elementor-button-text">
                            Contact Us
                          </span>
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


export default HeaderPresentation;