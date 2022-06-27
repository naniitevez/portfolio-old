import React from "react";
import AboutMeSection from "../components/home/AboutMeSection";
import BannerSection from "../components/home/BannerSection";
import MyWorksSection from "../components/home/MyWorksSection";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div id="content" className="page-wrap">
      <div className="content-wrapper container">
        <div className="row">
          <div id="primary" className="fp-content-area">
            <main id="main" className="site-main" role="main">
              <div className="entry-content">
                <div
                  data-elementor-type="wp-page"
                  data-elementor-id="6"
                  className="elementor elementor-6"
                >
                  <div className="elementor-inner">
                    <div className="elementor-section-wrap">
                      
                      <BannerSection/> 

                      <AboutMeSection/>

                      <MyWorksSection/> 

                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-97cfc3b elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="97cfc3b"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                        style={{ width: "1905px", left: "0px" }}
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div className="elementor-row">
                            <div
                              className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-688d466"
                              data-id="688d466"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-772f302 elementor-widget elementor-widget-heading"
                                    data-id="772f302"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <h3 className="elementor-heading-title elementor-size-default">
                                        Make your designs come to use quickly.
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-e93b554"
                              data-id="e93b554"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-e9431ab elementor-align-right elementor-mobile-align-center elementor-widget elementor-widget-button"
                                    data-id="e9431ab"
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
                                              Hire Now
                                            </span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
