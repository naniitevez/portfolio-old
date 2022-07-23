import React from "react";
import Presentation from "./components/Presentation";

interface AboutMeSectionProps {}

const AboutMeSection: React.FC<AboutMeSectionProps> = () => {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-08ef5dd elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="08ef5dd"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <Presentation
            description="I'm a Jane Brianna, UX/UI designer Austin based, who loves
                clean, simple &amp; unique design."
          />
          <div
            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-d9dd441"
            data-id="d9dd441"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-ac669ac elementor-widget elementor-widget-text-editor"
                  data-id="ac669ac"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor elementor-clearfix">
                      <p>
                        Logo distribution and brand recognition are an integral
                        component to building a company and its client base. So,
                        just to get the promotional product out there and off
                        the shelf is an important part of the overall goal.
                      </p>
                      <p>
                        I think that I lost the pen sometime that week, but I’ll
                        never forget the lesson of promotional advertising
                        specialties that I learned from the man that gave me my
                        first god-awful, thankless job.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-b80f425"
            data-id="b80f425"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-b2f188a elementor-widget elementor-widget-text-editor"
                  data-id="b2f188a"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor elementor-clearfix">
                      <p>
                        When I was just starting 6th grade I got my first job.
                        Paperboy! Boy, was I excited. At that time I had spent a
                        lot of time actually playing the video game Paperboy, so
                        I knew I had what it took to get the job done. But, its
                        just not that easy.
                        <br />
                        <br />
                        The StarTribune doesn’t just hand out the responsibility
                        of informing their community’s citizenry on a daily
                        basis to just any fool that says they’d like a shot at
                        paper delivery greatness. Nope, I had to interview for
                        this job.
                      </p>
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

export default AboutMeSection;
