import React from "react";
import PortfolioProject from "./components/PortfolioProject";

interface MyWorksSectionProps {}

const MyWorksSection: React.FC<MyWorksSectionProps> = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-4ac9d70 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="4ac9d70"
        data-element_type="section"
        data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
        style={{ width: "1905px", left: "0px" }}
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-235fe36"
              data-id="235fe36"
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div
                    className="elementor-element elementor-element-545ed2a elementor-widget elementor-widget-heading"
                    data-id="545ed2a"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        Mis proyectos
                      </h2>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-ddbd6b0 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                    data-id="ddbd6b0"
                    data-element_type="widget"
                    data-widget_type="divider.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-divider">
                        <span className="elementor-divider-separator"></span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-c827565 elementor-widget elementor-widget-text-editor"
                    data-id="c827565"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        Estos son algunos de los proyectos en los que trabajé y
                        <br />
                        de los cuales me siento muy orgullosa.
                        <br />
                        Te invito a darles un vistazo!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-25fbfb8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="25fbfb8"
        data-element_type="section"
        id="home-portfolio"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7c2389c"
              data-id="7c2389c"
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-3cdf6b2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="3cdf6b2"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-row">
                        <PortfolioProject
                          containerId="add2783"
                          itemId="a450c4f"
                          imageSrc="/images/projects/Swappy.png"
                          alt=""
                          hrefLink="https://play.google.com/store/apps/details?id=com.aivenweb.swappy"
                          title="Swappy - Tu Mundo Crypto"
                          description="Aplicación para Android"
                        />

                        <PortfolioProject
                          containerId="f76fcf5"
                          itemId="adf5da0"
                          imageSrc="/images/projects/Hotel-Valle-del-Volcan.png"
                          alt=""
                          hrefLink="https://hotelvalledelvolcan.info/"
                          title="Hotel Valle del Volcán"
                          description="Sitio web"
                        />
                        
                        <PortfolioProject
                          containerId="f76fcf5"
                          itemId="adf5da0"
                          imageSrc="/images/projects/Call-for-speakers.png"
                          alt=""
                          hrefLink="https://latinonet.online/callforspeakers/"
                          title="Call For Speakers Latino .NET Online"
                          description="Aplicación web"
                        />
                      </div>
                    </div>
                  </section>
                  {/* <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-808fed6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="808fed6"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-row">
                        <PortfolioProject
                          containerId="673d443"
                          itemId="c9d21dd"
                          imageSrc="/assets/port-4.webp"
                          alt=""
                          hrefLink="https://latinonet.online/callforspeakers/"
                          title="Creative Adventer"
                          description="Graphic $ Branding"
                        />
                      </div>
                    </div>
                  </section> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyWorksSection;
