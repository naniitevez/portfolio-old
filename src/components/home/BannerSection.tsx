import React from "react";

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
                      Hello!
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
                      I'm Brianna
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
                      UX/UI designer Austin based, who loves clean, simple &amp;
                      unique design.
                    </div>
                  </div>
                </div>
                <div
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
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5e72abb"
            data-id="5e72abb"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-e6896b6 elementor-widget elementor-widget-image"
                  data-id="e6896b6"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-image">
                      <img
                        width="600"
                        height="600"
                        src="./assets/Mask-Group-5.webp"
                        className="attachment-full size-full"
                        alt=""
                        loading="lazy"
                        srcSet="
                                              https://demo.athemes.com/sp-resume/wp-content/uploads/sites/106/2020/01/Mask-Group-5.png         600w,
                                              https://demo.athemes.com/sp-resume/wp-content/uploads/sites/106/2020/01/Mask-Group-5-300x300.png 300w,
                                              https://demo.athemes.com/sp-resume/wp-content/uploads/sites/106/2020/01/Mask-Group-5-150x150.png 150w,
                                              https://demo.athemes.com/sp-resume/wp-content/uploads/sites/106/2020/01/Mask-Group-5-230x230.png 230w,
                                              https://demo.athemes.com/sp-resume/wp-content/uploads/sites/106/2020/01/Mask-Group-5-350x350.png 350w,
                                              https://demo.athemes.com/sp-resume/wp-content/uploads/sites/106/2020/01/Mask-Group-5-480x480.png 480w
                                            "
                        sizes="(max-width: 600px) 100vw, 600px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
